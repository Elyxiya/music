export const constantRoute = [
  {
    path: '/',

    redirect: '/home',
  },
  // 主导航
  {
    path: '/home',
    name: 'home',
    component: () => import('../view/home/index.vue'),
    meta: { title: '首页' },
  },
  {
    path: '/found',
    name: 'found',
    component: () => import('../view/found/index.vue'),
    meta: { title: '发现' },
  },
  {
    path: '/star',
    name: 'star',
    component: () => import('@/view/star/index.vue'),
    meta: { title: '我的收藏' },
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('../view/history/index.vue'),
    meta: { title: '播放历史' },
  },

  // // 我的歌曲相关
  // {
  //   path: 'my-songs',
  //   name: 'my-songs',
  //   component: () => import('@/views/MySongs.vue'),
  //   meta: { title: '我的歌曲' },
  // },
  // {
  //   path: 'liked-music',
  //   name: 'liked-music',
  //   component: () => import('@/views/LikedMusic.vue'),
  //   meta: { title: '喜欢的音乐' },
  // },

  // // 分类歌单
  // {
  //   path: 'workout',
  //   name: 'workout',
  //   component: () => import('@/views/Playlist.vue'),
  //   meta: { title: '运动健身' },
  // },
  // {
  //   path: 'relax',
  //   name: 'relax',
  //   component: () => import('@/views/Playlist.vue'),
  //   meta: { title: '休闲放松' },
  // },
  // {
  //   path: 'classic-albums',
  //   name: 'classic-albums',
  //   component: () => import('@/views/ClassicAlbums.vue'),
  //   meta: { title: '经典专辑' },
  // },

  // // 搜索
  // {
  //   path: 'search',
  //   name: 'search',
  //   component: () => import('@/views/Search.vue'),
  //   meta: { title: '搜索' },
  // },
  // {
  //   path: 'search/:keyword',
  //   name: 'search-result',
  //   component: () => import('@/views/SearchResult.vue'),
  //   meta: { title: '搜索结果' },
  // },

  // // 登录
  // {
  //   path: 'login',
  //   name: 'login',
  //   component: () => import('@/views/Login.vue'),
  //   meta: { title: '登录', guest: true },
  // },
]
