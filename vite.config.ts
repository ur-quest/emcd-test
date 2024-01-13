import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: [
			{
				find: '@',
				replacement: fileURLToPath(new URL('./src', import.meta.url)),
			},
			{
				find: 'Components',
				replacement: fileURLToPath(new URL('./src/components', import.meta.url)),
			},
		],
		extensions: ['.js', '.ts', '.json', '.vue'],
	},
})
