import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        items={[
          {
            key: "/",
            label: "Dashboard",
            icon: <AppstoreOutlined />,
          },
          {
            key: "/inventory",
            label: "Inventory",
            icon: <ShopOutlined />,
          },
          {
            key: "/orders",
            label: "Orders",
            icon: <ShoppingCartOutlined />,
          },
          {
            key: "/customers",
            label: "Customers",
            icon: <UserOutlined />,
          },
        ]}
        selectedKeys={[selectedKeys]}
        onClick={(item) => {
          // item.key
          navigate(item.key);
        }}
      ></Menu>
    </div>
  );
}

export default SideMenu;
