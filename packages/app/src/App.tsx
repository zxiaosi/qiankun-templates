import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import BaseLayout from './pages/Layout';

/** 路由配置 */
const routes = createBrowserRouter(
  [
    {
      path: '/',
      element: <Navigate to="/app" replace />, // 重定向
    },
    {
      path: '/',
      element: <BaseLayout />, // 布局
      children: [
        {
          path: '/app',
          element: <Home />, // 首页
        },
        {
          path: '/app1/*', // 通配符 * 表示匹配所有子路由
          element: <div id="subapp1"></div>, // 子应用挂载点 对应 main.tsx 注册子应用的 container
        },
        {
          path: '/app2/*', // 通配符 * 表示匹配所有子路由
          element: <div id="subapp2"></div>, // 子应用挂载点 对应 main.tsx 注册子应用的 container
        },
        {
          path: '/app3/*', // 通配符 * 表示匹配所有子路由
          element: <div id="subapp3"></div>, // 子应用挂载点 对应 main.tsx 注册子应用的 container
        },
      ],
    },
    {
      path: '*',
      element: <div>404</div>,
    },
  ],
  {
    basename: '/',
  }
);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
