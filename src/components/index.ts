import SvgIcon from './SvgIcon/index.vue'
import type { App, Component } from 'vue'
const allClobalComponent: { [name: string]: Component } = { SvgIcon }

// 对外暴露插件对象
export default {
	// 务必叫 install 方法
	// 会将 app 对象注册进来
	install(app: App) {
		Object.keys(allClobalComponent).forEach((key) => {
			// 注册为全局组件
			app.component(key, allClobalComponent[key])
		})
	},
}
