import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import smvp from 'speed-measure-vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: smvp([
    vue({
      template: {
        compilerOptions: {
          // https://stackoverflow.com/questions/71601714/how-to-set-compileroptions-iscustomelement-for-vuejs-3-in-laravel-project
          isCustomElement: tag => ['swiper-container', 'swiper-slide'].includes(tag),
        },
      },
    }),
    vueJsx(),
  ]),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    watch: {
      usePolling: true, // Activate HMR for windoof https://inspector.dev/how-to-make-vite-hot-module-replacement-work-on-windows/
    },
    allowedHosts: ['riversurf.academy'] // add new attribute that came with bumping the dependencies due to security fix
  },
});
