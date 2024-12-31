import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 引入path模块

export default defineConfig({
	plugins: [vue()],
	resolve: {
		// 配置别名
		alias: {
			'@': path.resolve('./src'),
			'#': path.resolve('./types'),
		},
	},
})
