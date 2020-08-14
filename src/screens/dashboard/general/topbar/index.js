import React from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
} from "@ant-design/icons";

import {Header,Text} from './index.styles'

const TopBar = ({collapsed,toggleCollapsed,Row}) => {
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
        <Row>
          <Text>Hi Mayank</Text>
          <DownOutlined
            style={{
              marginLeft: 10,
              fontWeight: "bolder",
              cursor: "pointer",
            }}
          />
        </Row>
      </Header>
    )
}

export default TopBar
