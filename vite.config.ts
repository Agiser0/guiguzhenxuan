import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 引入path模块
// svg 图标
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig({
	plugins: [
		vue(),
		createSvgIconsPlugin({
			// Specify the icon folder to be cached
			iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
			// Specify symbolId format
			symbolId: 'icon-[dir]-[name]',
		}),
	],
	resolve: {
		// 配置别名
		alias: {
			'@': path.resolve('./src'),
			'#': path.resolve('./types'),
		},
	},
})
