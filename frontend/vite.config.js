import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dotenv from 'dotenv';

export default defineConfig(({ mode }) => {
    dotenv.config({path:__dirname+'/../.env'});

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
            host: true,
            proxy: {
                '/api': {
                    target: 'http://api-gateway:' + process.env.API_GATEWAY_PORT,
                    changeOrigin: true,
                },
            },
        },
    };
});
