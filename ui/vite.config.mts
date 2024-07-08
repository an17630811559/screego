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
                target: 'http://localhost:5050',
                ws: true,
            },
        },
    },
    build: {outDir: 'build/'},
    plugins: [react()],
});
