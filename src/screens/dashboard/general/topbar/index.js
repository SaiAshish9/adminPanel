import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Dropdown from "./dropdown";

import { Header, Text } from "./index.styles";

const TopBar = ({ collapsed, toggleCollapsed, Row }) => {
  return (
    <Header>
      <Row>
        {!collapsed ? (
          <MenuFoldOutlined
            onClick={toggleCollapsed}
            style={{ fontSize: 18, cursor: "pointer" }}
          />
        ) : (
          <MenuUnfoldOutlined
            onClick={toggleCollapsed}
            style={{ fontSize: 18, cursor: "pointer" }}
          />
        )}
        <Text>12th August 2020, 10:45 AM</Text>
      </Row>
      <Dropdown Row={Row} />
    </Header>
  );
};

export default TopBar;
