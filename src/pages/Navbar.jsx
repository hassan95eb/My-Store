import { Menu, Button, Drawer } from "antd";
import Logo from "../Components/Logo/Logo";
import {
  ContactsOutlined,
  HomeOutlined,
  InfoOutlined,
  ReadOutlined,
  ShoppingOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const menuItems = useMemo(
    () => [
      {
        key: "/",
        label: <Link to="/">Home</Link>,
        icon: <HomeOutlined />,
      },
      {
        key: "/store",
        label: <Link to="/store">Store</Link>,
        icon: <ShoppingOutlined />,
      },
      {
        key: "/blog",
        label: <Link to="/blog">Blog</Link>,
        icon: <ReadOutlined />,
      },
      {
        key: "/about-us",
        label: <Link to="/about-us">About Us</Link>,
        icon: <InfoOutlined />,
      },
      {
        key: "/contact-us",
        label: <Link to="/contact-us">Contact Us</Link>,
        icon: <ContactsOutlined />,
      },
    ],
    []
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="navbar-container w-screen" style={{ padding: "10px" }}>
      <div className="flex justify-between items-center">
        {isMobile ? (
          <>
            <Button type="primary" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
            <Drawer
              title="Menu"
              placement="right"
              onClose={onClose}
              open={visible}
            >
              <Menu
                theme="light"
                mode="vertical"
                items={menuItems}
                onClick={onClose}
              />
            </Drawer>
          </>
        ) : (
          <Menu
            theme="dark"
            className="w-1/2"
            mode="horizontal"
            items={menuItems}
          />
        )}
        <Logo />
      </div>
    </div>
  );
};

export default Navbar;
