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
            '/get_live': {
                target: 'http://127.0.0.1:12345',
                changeOrigin: true, //是否跨域
                rewrite: (path: any) => path.replace(/^\//, "/"),
               /* bypass(req: any, res: any, options: any) {
                    res = res;
                    const proxyURL = options.target + options.rewrite(req.url);
                    console.log('proxyURL', proxyURL);
                },*/
            },
        },
    },
    build: {outDir: 'build/'},
    plugins: [react()],
});
