/* 默认分页数量 */
export const DEFAULT_LIMIT: number = 30

/* 版本号（从环境变量获取，Vite环境变量类型声明需在vite-env.d.ts中定义） */
export const VERSION: string = import.meta.env.VUE_APP_VERSION as string

/**
 * 访客统计 id
 * 具体使用文档 https://github.com/jwenjian/visitor-badge
 */
export const VISITOR_BADGE_ID: string = import.meta.env.VUE_APP_VISITOR_BADGE_ID as string

/* 背景图（Vite 中使用 import.meta.glob 替代 require.context） */
// 导入所有背景图（同步导入）
const backgroundModules = import.meta.glob<{ default: string }>('./assets/background/*', {
  eager: true, // 同步加载
})

// 提取图片路径数组
const BACKGROUNDS: string[] = Object.values(backgroundModules).map((module) => module.default)

/**
 * 播放模式类型定义
 */
export type PlayModeValue = 0 | 1 | 2 | 3 // 限制只能是这四个值

export interface PlayMode {
  LIST_LOOP: 0
  ORDER: 1
  RANDOM: 2
  LOOP: 3
}

export const PLAY_MODE: PlayMode = {
  LIST_LOOP: 0,
  ORDER: 1,
  RANDOM: 2,
  LOOP: 3,
}

/**
 * 播放器默认配置类型
 */
export interface PlayerConfig {
  /**
   * 默认歌单ID （正在播放列表）
   * 默认为云音乐热歌榜 https://music.163.com/#/discover/toplist?id=3778678
   */
  PLAYLIST_ID: number
  /* 默认播放模式 */
  PLAY_MODE: PlayModeValue
  /* 默认音量（0-1之间的浮点数） */
  VOLUME: number
  /* 默认背景（图片路径） */
  BACKGROUND: string
}

/**
 * 播放器默认配置
 */
export const PLAYER_CONFIG: PlayerConfig = {
  PLAYLIST_ID: 3778678,
  PLAY_MODE: PLAY_MODE.LIST_LOOP,
  VOLUME: 0.8,
  // 从背景图数组中随机取一张
  BACKGROUND: BACKGROUNDS[Math.floor(Math.random() * BACKGROUNDS.length)],
}
