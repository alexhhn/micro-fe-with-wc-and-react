import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			output: {
				// Configure the output filename for entry files
				entryFileNames: 'index.js',
				assetFileNames: (assetInfo) => {
					if (assetInfo.name === 'App.css') return 'index.css';
					return 'assets/[name][extname]';
				},
			},
		},
	},
});
