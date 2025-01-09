import { Layout, Menu } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const menuConfig = [
  { label: "Home", path: "/" },
  { label: "User Management", path: "/user-management" },
  { label: "Semester Create", path: "/semester-create" },
  { label: "User Profile", path: "/user-profile" },
];

// Icons
const icons = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined];

// Map Menu Items
const items = menuConfig.map((config, index) => ({
  key: String(index + 1), // Assign a unique key for each menu item
  icon: React.createElement(icons[index]), // Create the icon dynamically
  label: config.label, // Assign the label
  path: config.path, // Assign the path for navigation
}));

const MainLayout = () => {
  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    const selectedItem = items.find((item) => item.key === key);
    if (selectedItem) {
      navigate(selectedItem.path); // Navigate to the corresponding path
    }
  };

  return (
    <Layout style={{ height: "100vh" }}>
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
        <div style={{ color: "white", textAlign: "center", height: "2.6rem" }}>
          <h2>PH Uni.</h2>
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]} // Highlight the first item by default
          items={items.map(({ key, icon, label }) => ({
            key,
            icon,
            label,
          }))}
          onClick={handleMenuClick} // Handle navigation on item click
        />
      </Sider>

      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}>
                      


                <Outlet /> {/* Render child routes here */}
                      

          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
