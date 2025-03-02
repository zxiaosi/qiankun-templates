import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/** 路由前缀 */
const basename = '/app1';

/** 创建路由 */
const routes = createBrowserRouter(
  [
    {
      path: '/',
      element: <h2>app1</h2>,
    },
  ],
  {
    basename,
  }
);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
