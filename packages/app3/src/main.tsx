import { createRoot } from 'react-dom/client';
import {
  QiankunProps,
  qiankunWindow,
  renderWithQiankun,
} from 'vite-plugin-qiankun/dist/helper';
import App from './App.tsx';
import './index.css';

/** 渲染函数 */
const render = (container?: HTMLElement, microProps = {}) => {
  const app = container || (document.getElementById('root') as HTMLDivElement);

  /**
   * 添加属性，用于样式隔离
   * 注意：这里的属性名要和 postcss-prefix-selector 插件中的 prefix 保持一致
   */
  app.setAttribute('data-qiankun-app3', 'true');

  createRoot(app).render(<App microProps={microProps} />);
};

/** Qiankun 生命周期钩子 */
const qiankun = () => {
  renderWithQiankun({
    bootstrap() {},
    async mount(props: QiankunProps) {
      render(props.container, props);
    },
    update: () => {},
    unmount: () => {},
  });
};

// 检查是否在 Qiankun 环境中
console.log('qiankunWindow', qiankunWindow.__POWERED_BY_QIANKUN__);

if (qiankunWindow.__POWERED_BY_QIANKUN__) qiankun(); // 以子应用的方式启动
else render();
