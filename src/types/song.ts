// 定义歌手数据结构接口
export interface SingerItem {
  name: string
  [key: string]: any // 允许其他属性存在
}

// 定义原始音乐数据接口（涵盖可能的字段）
export interface RawMusicData {
  id: number
  name: string
  ar?: SingerItem[]
  artists?: SingerItem[]
  album?: {
    name: string
    picUrl?: string
    [key: string]: any
  }
  al?: {
    name: string
    picUrl?: string
    [key: string]: any
  }
  duration?: number
  dt?: number
  [key: string]: any // 允许其他未知字段
}
