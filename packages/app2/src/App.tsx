import { useMemo } from 'react';
import {
  createBrowserRouter,
  createHashRouter,
  createMemoryRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';

/** 路由前缀 */
const basename = '/app2';

/** 创建路由 */
const router: RouteObject[] = [
  {
    path: '/',
    element: <h2>app2</h2>,
  },
];

function App({ microProps }: any) {
  const { routeType } = microProps;

  const routes = useMemo(() => {
    switch (routeType) {
      case 'hash':
        return createHashRouter(router, { basename });
      case 'memory':
        return createMemoryRouter(router, {
          basename,
          initialEntries: ['/app2'], // 初始化时指定初始路径, 用户可以通过浏览器前进后退操作
          initialIndex: 0, // 初始化时指定初始索引
        });
      default:
        return createBrowserRouter(router, { basename });
    }
  }, [routeType]);

  return <RouterProvider router={routes} />;
}

export default App;
