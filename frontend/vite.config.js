import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dotenv from 'dotenv';

export default defineConfig(({ mode }) => {
    dotenv.config({path:__dirname+'/../.env.development'});

    return {
        plugins: [react()],
        build: {
            outDir: 'build',
            assetsDir: 'assets',
            emptyOutDir: true,
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        server: {
            port: process.env.FRONTEND_PORT,
            proxy: {
                '/api': {
                    target: 'http://localhost:' + process.env.BACKEND_PORT,
                    changeOrigin: true,
                },
            },
        },
    };
});
