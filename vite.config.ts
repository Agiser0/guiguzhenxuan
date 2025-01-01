import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 引入path模块
// svg 图标
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// mock数据插件
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig(({ command }) => {
	return {
		plugins: [
			vue(),
			createSvgIconsPlugin({
				// Specify the icon folder to be cached
				iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
				// Specify symbolId format
				symbolId: 'icon-[dir]-[name]',
			}),
			viteMockServe({
				// default；保证 mock 接口能用
				mockPath: 'mock',
				enable: true,
			}),
		],
		resolve: {
			// 配置别名
			alias: {
				'@': path.resolve('./src'),
				'#': path.resolve('./types'),
			},
		},
		// scss 全局变量配置
		css: {
			preprocessorOptions: {
				scss: {
					javascriptEnabled: true,
					additionalData: '@import "@/style/variable.scss";',
				},
			},
		},
	}
})
