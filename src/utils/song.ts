import { toHttps } from './tools'
import type { RawMusicData } from '@/types/song'

export class Song {
  id: number
  name: string
  singer: string
  album: string
  image: string | null
  duration: number
  url: string

  constructor({
    id,
    name,
    singer,
    album,
    image,
    duration,
    url,
  }: {
    id: number
    name: string
    singer: string
    album: string
    image: string | null
    duration: number
    url: string
  }) {
    this.id = id
    this.name = name
    this.singer = singer
    this.album = album
    this.image = image
    this.duration = duration
    this.url = url
  }
}
/**
 * 过滤并格式化歌手列表
 * @param singers 歌手数组或其他值
 * @returns 格式化后的歌手字符串
 */
function filterSinger(singers: unknown): string {
  if (!Array.isArray(singers) || singers.length === 0) {
    return ''
  }

  // 类型断言：确认是包含name属性的数组
  const singerArray = singers as Array<{ name?: string }>
  return singerArray.map((item) => item.name || '').join('/')
}

/**
 * 创建歌曲实例
 * @param music 原始音乐数据
 * @returns 格式化后的Song实例
 */
export function createSong(music: RawMusicData): Song {
  const album = music.album || music.al || {}
  const duration = music.duration || music.dt || 0 // 确保有默认值

  return new Song({
    id: music.id,
    name: music.name,
    singer: filterSinger(music.ar || music.artists),
    album: album.name || '', // 处理可能的空值
    image: toHttps(album.picUrl) || null,
    duration: duration / 1000,
    url: `https://music.163.com/song/media/outer/url?id=${music.id}.mp3`,
  })
}

/**
 * 格式化歌曲列表
 * @param list 原始歌曲列表数据
 * @returns 格式化后的Song实例数组
 */
export function formatSongs(list: RawMusicData[]): Song[] {
  return list
    .filter((item) => item.id) // 过滤无效数据
    .map((item) => createSong(item))
}
