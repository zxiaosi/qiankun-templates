import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
    // 新增微应用示例
    { name: 'App1', path: '/app1/*', microApp: 'app1' },
    { name: 'App2', path: '/app2/*', microApp: 'app2' },
  ],
  npmClient: 'npm',
  qiankun: {
    master: {
      apps: [
        {
          name: 'app1', // 与上面 routes 中 microApp 对应
          entry: '//localhost:8001', // packages/app1/.env 文件中的 PORT
        },
        {
          name: 'app2', // 与上面 routes 中 microApp 对应
          entry: '//localhost:8002', // packages/app2/.env 文件中的 PORT
        },
      ],
    },
  },
});
