import React from 'react';
import { Layout, Menu } from 'antd';
import './index.less';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  DeploymentUnitOutlined,
} from '@ant-design/icons';
import { Link } from 'umi';
import { menuList, menuType } from './menuList';
import { clearConfigCache } from 'prettier';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
let mapidx = 0;
const urls = ['/myBaidu', '/myBaidu2', '/myBaidu3'];

class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      openKeys: [],
      selectedKeys: [],
      mapidx: 0,
    };
  }
  componentDidMount() {}

  renderMenu = (menuList: menuType[]) => {
    console.log(menuList);
    return menuList.map((item: menuType) => {
      let type = item.id.split('-')[0];
      if (!item.list) {
        return (
          <Menu.Item key={item.id} icon={<AppstoreOutlined />}>
            <Link to={item.href}>{item.name}</Link>
          </Menu.Item>
        );
      } else {
        return (
          <SubMenu title={item.name} key={item.id} icon={<AppstoreOutlined />}>
            {this.renderMenu(item.list)}
          </SubMenu>
        );
      }
    });
  };
  menuClick = (e: any) => {
    console.log(e);
    // this.setState({selectedKeys:e.key});
  };
  render() {
    const { openKeys, selectedKeys } = this.state;
    return (
      <>
        <Layout className="main-box">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <div className="logo">
              <DeploymentUnitOutlined
                style={{ fontSize: 24, color: '#fff', marginRight: 10 }}
              />
              Umi-React
            </div>
          </Header>

          <Layout
            className="site-layout main-content"
            style={{ marginLeft: 200, height: 'calc(100% - 64)' }}
          >
            <Sider
              style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
              }}
            >
              <Menu theme="dark" mode="inline">
                {this.renderMenu(menuList)}
              </Menu>
            </Sider>

            <Layout className="page-right">
              <Content className="page-content">{this.props.children}</Content>

              {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
            </Layout>
          </Layout>
        </Layout>
      </>
    );
  }
}
export default Home;
