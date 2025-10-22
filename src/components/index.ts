// 导入自定义组件
import SvgIcon from './icon/SvgIcon.vue'
import type { App, Component } from 'vue'

// 定义组件映射对象
const components: { [name: string]: Component } = { SvgIcon }

// 导出插件对象
export default {
  install(app: App) {
    // 注册自定义全局组件
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key])
    })
  },
}
