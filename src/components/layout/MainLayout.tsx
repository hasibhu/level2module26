import { Layout, Menu, MenuProps } from "antd";
import { NavLink, Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;




const items: MenuProps['items'] = [
  {
    key: 'Dashboard',
    label: <NavLink to={'/admin'}>Dashboard</NavLink>
  },
  {
    key: 'User Management',
    label: 'User Management',
    children: [
      {
        key: 'Create Student',
        label: <NavLink to={'createStudent'}>Create Student</NavLink>
      },
      {
        key: 'Create Faculty',
        label: <NavLink to={'createFaculty'}>Create Faculty</NavLink>
      },
      {
        key: 'Create Admin',
        label: <NavLink to={'createAdmin'}>Create Admin</NavLink>
      }
    ]
  }
]






const MainLayout = () => {

   
    return (
        <Layout style={{height: '100vh'}} >
            <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
                        


                <Layout>
                    <Header style={{ padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                        padding: 24,
                        minHeight: 360}}>
              

                        <Outlet></Outlet>
            </div>
            


                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                    </Footer>
                </Layout>
        </Layout>
    );
};

export default MainLayout;