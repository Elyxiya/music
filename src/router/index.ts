import { createRouter, createWebHistory } from 'vue-router'
import { constantRoute } from './route'

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoute,
})

// 路由守卫 - 登录验证
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('token') // 或者你的登录状态检查
  console.log('to:', to.name, 'from:', from.name, 'next:', next)
  // 需要登录的页面
  const authRequired = ['favorites', 'my-songs', 'liked-music']

  if (to.name && authRequired.includes(to.name as string) && !isLoggedIn) {
    next('/login')
  } else if (to.name === 'login' && isLoggedIn) {
    next('/home')
  } else {
    next()
  }
})

// 更新页面标题
router.afterEach((to: any) => {
  document.title = to.meta.title ? `音乐播放器 - ${to.meta.title}` : '音乐播放器'
})

export default router
