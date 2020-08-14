import React from "react";
import { Select as Pick } from "antd";
import styled from "styled-components";

const Select = styled(Pick)`
  width: 130%;
  height: 2.7rem;
  border-radius: 4px;
  background-color: #ffffff;
  margin-top: 10px;
  outline: none !important;
  border: ${(props) => (props.add ? "none" : "solid 1px #c6c6c6 !important")};
  box-shadow: none !important;
  .ant-select-selector {
    width: 100%;
    height: 2.7rem;
    border: none !important;
    outline: none;
    box-shadow: none !important;
  }
  .ant-input {
    width: 130%;
    height: 2.7rem;
    border: solid 1px #c6c6c6 !important;
    outline: none;
    box-shadow: none !important;
  }
`;

const { Option } = Select;

const Type = () => {
  return (
    <Select>
      <Option value="1">Negotiable</Option>
    </Select>
  );
};

export default Type;
