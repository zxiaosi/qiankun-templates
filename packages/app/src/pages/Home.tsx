import { Button, Divider } from 'antd';
import { microApps } from '../main';
import { useEffect, useRef } from 'react';
import { loadMicroApp, MicroApp } from 'qiankun';

/** 子应用样式 */
const subStyle = {
  width: 'calc((100% - 20px * 2) / 3)',
  height: 400,
  border: '1px solid red',
};

const Home = () => {
  const microInstanceRef = useRef<MicroApp>(undefined); // 子应用实例

  const handleClick = (appName: string) => {
    microInstanceRef.current?.unmount();

    const microApp = microApps.find((item) => item.name === appName);
    console.log('microApps', microApp);

    const { activeRule, ...rest } = microApp;

    microInstanceRef.current = loadMicroApp({
      ...rest,
      props: { routeType: 'memory' }, // 设置路由类型为 memory
    });
  };

  useEffect(() => {
    return () => {
      microInstanceRef.current?.unmount();
    };
  }, []);

  return (
    <div>
      <h2>App</h2>

      <Divider />

      <button onClick={() => handleClick('app1')}>加载 app1</button>
      <button onClick={() => handleClick('app2')}>加载 app2</button>
      <button onClick={() => handleClick('app3')}>加载 app3</button>

      <Divider>样式</Divider>

      <div className="color">测试样式文字</div>
      <Button type="primary">测试组件库样式按钮</Button>

      <Divider>子应用</Divider>

      <div style={{ display: 'flex', gap: '0 20px' }}>
        <div id="subapp1" style={subStyle}></div>
        <div id="subapp2" style={subStyle}></div>
        <div id="subapp3" style={subStyle}></div>
      </div>
    </div>
  );
};

export default Home;
