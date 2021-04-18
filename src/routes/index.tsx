export default [
  {
    exact: true,
    path: '/',
    component: 'layout',
    routes: [
      { exact: true, path: '/', component: '@/pages/index' },
      {
        path: '/echarts',
        component: '@/pages/echarts',
        routes: [
          {
            path: '/map',
            component: '@/pages/echarts/map',
          },
          {
            path: '/axisLine',
            component: '@/pages/echarts/axisLine',
          },
        ],
      },
      { path: '/tree', component: '@/pages/tree' },
      // { path: '/admin', component: 'admin' },
      { path: '/users', component: '@/pages/users' },
    ],
  },
  // { path: 'detail', component: '@/pages/details/details.tsx' },
  // { path: 'tree', component: '../pages/tree' },
];
