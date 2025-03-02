import { Layout, Menu, theme } from 'antd';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const menuItems = [
  { key: 'app', label: 'App' },
  { key: 'app1', label: 'App1' },
  { key: 'app2', label: 'App2' },
  { key: 'app3', label: 'App3' },
];

/** 布局组件 */
const BaseLayout = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  /** 菜单点击事件 */
  const handleMenuClick = ({ key }) => {
    navigate(`/${key}`);
  };

  useEffect(() => {
    const key = location.pathname.split('/')[1];
    setSelectedKeys([key]);
  }, [location]);

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          items={menuItems}
          selectedKeys={selectedKeys}
          style={{ flex: 1, minWidth: 0 }}
          onClick={handleMenuClick}
        />
      </Header>

      <Content style={{ padding: '16px 48px' }}>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 400,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}>
          <Outlet />
        </div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        Demo ©{new Date().getFullYear()} Created by Zxiaosi
      </Footer>
    </Layout>
  );
};

export default BaseLayout;
