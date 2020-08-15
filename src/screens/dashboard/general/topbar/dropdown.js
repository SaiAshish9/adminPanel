import React, { useContext } from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Text } from "./index.styles";
import { Context as AuthContext } from "../../../../contexts/authContext";

const Menu1 = ({ signout }) => (
  <Menu>
    <Menu.Item>
      <Text
        onClick={() => {
          signout();
        }}
      >
        Logout
      </Text>
    </Menu.Item>
  </Menu>
);

const Options = ({ Row }) => {
  const { signout } = useContext(AuthContext);

  return (
    <Dropdown overlay={<Menu1 signout={signout} />}>
      <Row style={{ cursor: "pointer" }}>
        <Text>Hi Mayank</Text>
        <DownOutlined
          style={{
            marginLeft: 10,
            fontWeight: "bolder",
            cursor: "pointer",
          }}
        />
      </Row>
    </Dropdown>
  );
};

export default Options;
