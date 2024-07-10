import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
    base: './',
    server: {
        host: '0.0.0.0',
        port: 3000,
        open: false,
        proxy: {
            '^/(config|logout|login|stream)$': {
                target: 'http://45.136.14.6:5050',
                ws: true,
            },
            '/hls': {
                target: 'https://screen.anwb.top',
                changeOrigin: true, //是否跨域
                rewrite: (path: any) => path.replace(/^\//, "/")
            },
        },
    },
    build: {outDir: 'build/'},
    plugins: [react()],
});
