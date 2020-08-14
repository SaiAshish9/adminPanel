import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const menu = () => (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const Dropdown1 = () => (
  <Dropdown overlay={menu}>
    <a
      style={{
        color: "#000",
        opacity: 0.4,
        fontSize: 12,
        lineHeight: 1.43,
        fontWeight: 600,
      }}
      onClick={(e) => e.preventDefault()}
    >
      Months <DownOutlined />
    </a>
  </Dropdown>
);

export default Dropdown1;
