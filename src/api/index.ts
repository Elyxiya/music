// api/index.ts
import axios from '@/utils/axios'
import { DEFAULT_LIMIT } from '@/config'
import { formatSongs } from '@/utils/song'
import type {
  Toplist,
  Playlist,
  SearchResult,
  SearchHot,
  Song,
  MusicUrl,
  Lyric,
  CommentResponse,
  ApiResponse,
} from '@/types/api'

// 排行榜列表
export function getToplistDetail(): Promise<Toplist[]> {
  return axios
    .get<ApiResponse<{ list: Toplist[] }>>('/toplist/detail')
    .then((res) => res.list || [])
}

// 推荐歌单
export function getPersonalized(): Promise<Playlist[]> {
  return axios
    .get<ApiResponse<{ result: Playlist[] }>>('/personalized')
    .then((res) => res.result || [])
}

// 歌单详情
export function getPlaylistDetail(id: number): Promise<Playlist> {
  return new Promise((resolve, reject) => {
    axios
      .get<ApiResponse<{ playlist: Playlist }>>('/playlist/detail', {
        params: { id },
      })
      .then(({ playlist }) => playlist || ({} as Playlist))
      .then((playlist: Playlist) => {
        const { trackIds, tracks } = playlist

        if (!Array.isArray(trackIds)) {
          reject(new Error('获取歌单详情失败'))
          return
        }

        // 过滤完整歌单 如排行榜
        if (tracks && tracks.length === trackIds.length) {
          playlist.tracks = formatSongs(playlist.tracks)
          resolve(playlist)
          return
        }

        // 限制歌单详情最大 500
        const ids = trackIds
          .slice(0, 500)
          .map((v) => v.id)
          .join(',')

        getMusicDetail(ids)
          .then(({ songs }) => {
            playlist.tracks = formatSongs(songs)
            resolve(playlist)
          })
          .catch(reject)
      })
      .catch(reject)
  })
}

// 搜索
export function search(
  keywords: string,
  page: number = 0,
  limit: number = DEFAULT_LIMIT,
): Promise<SearchResult> {
  return axios
    .get<ApiResponse<SearchResult>>('/search', {
      params: {
        offset: page * limit,
        limit: limit,
        keywords,
      },
    })
    .then((res) => res.result || { songs: [], hasMore: false, songCount: 0 })
}

// 热搜
export function searchHot(): Promise<SearchHot[]> {
  return axios
    .get<ApiResponse<{ result: { hots: SearchHot[] } }>>('/search/hot')
    .then((res) => res.result?.hots || [])
}

// 获取用户歌单详情
export function getUserPlaylist(uid: number): Promise<Playlist[]> {
  return axios
    .get<ApiResponse<{ playlist: Playlist[] }>>('/user/playlist', {
      params: { uid },
    })
    .then((res) => res.playlist || [])
}

// 获取歌曲详情
export function getMusicDetail(ids: string): Promise<{ songs: Song[] }> {
  return axios.get<ApiResponse<{ songs: Song[] }>>('/song/detail', {
    params: { ids },
  })
}

// 获取音乐是否可以用
export function getCheckMusic(id: number): Promise<{ success: boolean; message?: string }> {
  return axios.get<ApiResponse<{ success: boolean; message?: string }>>('/check/music', {
    params: { id },
  })
}

// 获取音乐地址
export function getMusicUrl(id: number): Promise<MusicUrl[]> {
  return axios
    .get<ApiResponse<{ data: MusicUrl[] }>>('/song/url', {
      params: { id },
    })
    .then((res) => res.data || [])
}

// 获取歌词
export function getLyric(id: number): Promise<Lyric> {
  return axios.get<ApiResponse<Lyric>>('/lyric', {
    params: { id },
  })
}

// 获取音乐评论
export function getComment(
  id: number,
  page: number,
  limit: number = DEFAULT_LIMIT,
): Promise<CommentResponse> {
  return axios.get<ApiResponse<CommentResponse>>('/comment/music', {
    params: {
      offset: page * limit,
      limit: limit,
      id,
    },
  })
}
