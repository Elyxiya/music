// types/api.ts

// 歌曲相关类型
export interface Song {
  id: number
  name: string
  artists: Artist[]
  album: Album
  duration: number
  [key: string]: any
}

export interface Artist {
  id: number
  name: string
  [key: string]: any
}

export interface Album {
  id: number
  name: string
  [key: string]: any
}

// 歌单相关类型
export interface Playlist {
  id: number
  name: string
  coverImgUrl: string
  trackCount: number
  playCount: number
  tracks: Song[]
  trackIds: TrackId[]
  [key: string]: any
}

export interface TrackId {
  id: number
  [key: string]: any
}

// 排行榜类型
export interface Toplist {
  id: number
  name: string
  updateFrequency: string
  [key: string]: any
}

// 搜索相关类型
export interface SearchResult {
  songs?: Song[]
  hasMore: boolean
  songCount: number
  [key: string]: any
}

export interface SearchHot {
  first: string
  second: number
  [key: string]: any
}

// 评论相关类型
export interface Comment {
  content: string
  time: number
  user: {
    userId: number
    nickname: string
    avatarUrl: string
  }
  [key: string]: any
}

export interface CommentResponse {
  comments: Comment[]
  total: number
  [key: string]: any
}

// 响应类型
export interface ApiResponse<T = any> {
  code: number
  data: T
  [key: string]: any
}

// 音乐URL类型
export interface MusicUrl {
  id: number
  url: string
  [key: string]: any
}

// 歌词类型
export interface Lyric {
  lrc: {
    lyric: string
  }
  [key: string]: any
}
