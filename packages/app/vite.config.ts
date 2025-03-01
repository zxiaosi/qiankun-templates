import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default ({ mode }) => {
  const name = 'app';

  return defineConfig({
    plugins: [react()],
    server: {
      port: 8000,
    },
    define: {
      __APP_NAME__: name,
    },
  });
};
