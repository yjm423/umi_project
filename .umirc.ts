import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: '@/pages/index' },
    { exact: true, path: '/user', component: '@/pages/user' },
    { exact: true, path: '/detail', component: '@/pages/details' },
  ],
});
