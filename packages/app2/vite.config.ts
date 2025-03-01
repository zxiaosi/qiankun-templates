import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default ({ mode }) => {
  const name = 'app2';
  const port = 8002;

  return defineConfig({
    plugins: [react()],
    server: {
      port: port, // 启动端口
    },
    define: {
      __APP_NAME__: name, // 应用名称(全局变量)
    },
  });
};
