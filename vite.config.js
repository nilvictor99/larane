import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        tailwindcss(),
    ],
     server: {
        https: process.env.VITE_DEV_SERVER_HTTPS === 'true',
    },
    build: {
        manifest: 'manifest.json',
        outDir: 'public/build',
        assetsDir: 'assets',
        base: process.env.APP_URL ? `${process.env.APP_URL}/build/` : '/build/', // HTTPS
        rollupOptions: {
        output: {
            manualChunks: undefined,
        },
        },
    },
    cacheDir: '/tmp/.vite',
    optimizeDeps: {
        force: true
    }
});
