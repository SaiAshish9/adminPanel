import React from "react";
import { Select, Tag } from "antd";
import styled from "styled-components";

const Skills = styled(Select)`
  width: 100%;
  .ant-select-selector {
    height: 100px !important;
    outline: none !important;
    box-shadow: none !important;
    border: 1px solid #d9d9d9 !important;
    padding: 7px !important;
    display: flex !important;
    align-items: flex-start !important;
    flex-wrap: wrap !important;
    background-color: #fff !important;
  }

  .ant-tag {
    color: #444584 !important;
    font-size: 12px;
    font-weight: 500 !important;
    background: #fff;
    border-radius: 12px !important;
    border: solid 1px #444584;
  }
  .ant-select-item-option-content {
    background-color: #fff !important;
  }
`;

function tagRender(props) {
  const { label, value, closable, onClose } = props;

  return (
    <Tag closable={closable} onClose={onClose} style={{ marginRight: 3 }}>
      {label}
    </Tag>
  );
}

const SkillsDropdown = () => {
  return (
    <Skills
      mode="multiple"
      tagRender={tagRender}
      defaultValue={["Marketing"]}
      options={[
        {
          value: "Marketing",
        },
      ]}
    />
  );
};

export default SkillsDropdown;
