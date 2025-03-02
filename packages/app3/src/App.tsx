import { Button, Divider } from 'antd';
import { useMemo } from 'react';
import {
  createBrowserRouter,
  createHashRouter,
  createMemoryRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';

/** 路由前缀 */
const basename = '/app3';

/** 创建路由 */
const router: RouteObject[] = [
  {
    path: '/',
    element: (
      <div>
        <h2>app2</h2>

        <Divider>样式隔离, 组件库样式未隔离</Divider>

        <div className="color">测试样式文字</div>
        <Button type="primary">测试组件库样式按钮</Button>
      </div>
    ),
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
          initialEntries: ['/app3'], // 初始化时指定初始路径, 用户可以通过浏览器前进后退操作
          initialIndex: 0, // 初始化时指定初始索引
        });
      default:
        return createBrowserRouter(router, { basename });
    }
  }, [routeType]);

  return <RouterProvider router={routes} />;
}

export default App;
