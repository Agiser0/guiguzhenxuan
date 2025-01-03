// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 国际化
//@ts-ignore 忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'

// 导入 svg 配置项
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(ElementPlus, {
	locale: zhCn,
})
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}

// 引入自定义插件对象：注册整个项目全局组件
import globalComponents from '@/components'
// 安装自定义插件
app.use(globalComponents)
// 引入模板全局样式
import '@/style/index.scss'

app.mount('#app')
