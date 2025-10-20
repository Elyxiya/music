import { PLAYER_CONFIG } from '@/config'

// 假设 MMPLAYER_CONFIG 的类型（如果已有定义可省略）
interface PLayerConfig {
  PLAY_MODE: number
  VOLUME: number
}

// 定义音乐数据类型（复用之前的 Song 类型或单独定义）
interface MusicItem {
  id: number
  [key: string]: any // 允许其他音乐相关属性
}

// 存储工具的类型定义
interface StorageUtils {
  get: <T = any>(key: string, defaultValue: T) => T
  set: (key: string, value: string) => void
  clear: (key: string) => void
}

const STORAGE = typeof window !== 'undefined' ? window.localStorage : null

const storage: StorageUtils = {
  /**
   * 获取本地存储值
   * @param key 存储键名
   * @param defaultValue 默认值
   * @returns 解析后的值（自动处理JSON数组）
   */
  get: <T = any>(key: string, defaultValue: T): T => {
    if (!STORAGE) return defaultValue

    const value = STORAGE.getItem(key)
    if (value === null) return defaultValue

    // 处理数组类型的默认值（自动解析JSON）
    if (Array.isArray(defaultValue)) {
      try {
        return JSON.parse(value) as T
      } catch {
        return defaultValue
      }
    }

    return value as unknown as T
  },

  /**
   * 设置本地存储值
   * @param key 存储键名
   * @param value 存储值（需自行序列化为字符串）
   */
  set: (key: string, value: string) => {
    if (STORAGE) {
      STORAGE.setItem(key, value)
    }
  },

  /**
   * 清除指定存储键
   * @param key 存储键名
   */
  clear: (key: string) => {
    if (STORAGE) {
      STORAGE.removeItem(key)
    }
  },
}

/**
 * 播放历史相关
 */
const HISTORYLIST_KEY = '__Player_historyList__'
const HistoryListMAX = 200

/**
 * 获取播放历史列表
 * @returns 音乐列表数组
 */
export function getHistoryList(): MusicItem[] {
  return storage.get<MusicItem[]>(HISTORYLIST_KEY, [])
}

/**
 * 更新播放历史（去重并保持最新）
 * @param music 音乐项
 * @returns 更新后的历史列表
 */
export function setHistoryList(music: MusicItem): MusicItem[] {
  const list = storage.get<MusicItem[]>(HISTORYLIST_KEY, [])
  const index = list.findIndex((item) => item.id === music.id)

  // 已在首位则直接返回
  if (index === 0) {
    return list
  }

  // 已存在则移除旧项
  if (index > 0) {
    list.splice(index, 1)
  }

  // 添加到首位
  list.unshift(music)

  // 限制最大长度
  if (HistoryListMAX && list.length > HistoryListMAX) {
    list.pop()
  }

  storage.set(HISTORYLIST_KEY, JSON.stringify(list))
  return list
}

/**
 * 删除一条播放历史（修正原逻辑错误）
 * @param music 要删除的音乐项
 * @returns 更新后的历史列表
 */
export function removeHistoryList(music: MusicItem): MusicItem[] {
  const list = storage.get<MusicItem[]>(HISTORYLIST_KEY, [])
  const updatedList = list.filter((item) => item.id !== music.id)
  storage.set(HISTORYLIST_KEY, JSON.stringify(updatedList))
  return updatedList
}

/**
 * 清空播放历史
 * @returns 空数组
 */
export function clearHistoryList(): [] {
  storage.clear(HISTORYLIST_KEY)
  return []
}

/**
 * 播放模式相关
 */
const MODE_KEY = '__Player_mode__'

/**
 * 获取播放模式
 * @returns 播放模式（数字类型）
 */
export function getMode(): number {
  return storage.get<number>(MODE_KEY, PLAYER_CONFIG.PLAY_MODE)
}

/**
 * 修改播放模式
 * @param mode 新播放模式
 * @returns 新播放模式
 */
export function setMode(mode: number): number {
  storage.set(MODE_KEY, mode.toString())
  return mode
}

/**
 * 网易云用户UID相关
 */
const USERID_KEY = '__Player_userID__'

/**
 * 获取用户UID
 * @returns 用户ID（数字或null）
 */
export function getUserId(): number | null {
  return storage.get<number | null>(USERID_KEY, null)
}

/**
 * 设置用户UID
 * @param uid 用户ID
 * @returns 设置的用户ID
 */
export function setUserId(uid: number | null): number | null {
  if (uid === null) {
    storage.clear(USERID_KEY)
  } else {
    storage.set(USERID_KEY, uid.toString())
  }
  return uid
}

/**
 * 版本号相关
 */
const VERSION_KEY = '__Player_version__'

/**
 * 获取版本号
 * @returns 版本号字符串或null
 */
export function getVersion(): string | null {
  const version = storage.get<string | null>(VERSION_KEY, null)
  return Array.isArray(version) ? null : version
}

/**
 * 设置版本号
 * @param version 版本号字符串
 * @returns 设置的版本号
 */
export function setVersion(version: string): string {
  storage.set(VERSION_KEY, version)
  return version
}

/**
 * 音量相关
 */
const VOLUME_KEY = '__Player_volume__'

/**
 * 获取音量
 * @returns 音量值（0-100之间的数字）
 */
export function getVolume(): number {
  const volume = storage.get<number>(VOLUME_KEY, PLAYER_CONFIG.VOLUME)
  return Number(volume)
}

/**
 * 设置音量
 * @param volume 音量值（0-100之间的数字）
 * @returns 设置的音量值
 */
export function setVolume(volume: number): number {
  storage.set(VOLUME_KEY, volume.toString())
  return volume
}
