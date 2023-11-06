import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    base: 'https://propel-test-4a1b0257790a.herokuapp.com/',
    plugins: [
        laravel({
            input: ['https://propel-test-4a1b0257790a.herokuapp.com/resources/css/app.css', 'https://propel-test-4a1b0257790a.herokuapp.com/resources/js/app.js'],
            refresh: true,
        }),
        vue(),
    ],
});
