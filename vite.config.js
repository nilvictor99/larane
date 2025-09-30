import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
            // Force HTTPS for assets
            transformOnServe: (code, { path }) => {
                if (path.endsWith('.html') || path.endsWith('.js') || path.endsWith('.css')) {
                    return code.replace(/http:\/\//g, 'https://');
                }
                return code;
            },
        }),
        tailwindcss(),
    ],
    server: {
        https: true,
        host: true,
    },
    // Force HTTPS in production
    base: process.env.APP_ENV === 'production' ? 'https://larane-production.up.railway.app/' : '/',
});
