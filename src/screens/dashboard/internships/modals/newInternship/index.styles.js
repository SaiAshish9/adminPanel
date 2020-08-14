import styled from "styled-components";
import { Modal as NewInternship, InputNumber, Input as Inp } from "antd";
import { Link } from "react-router-dom";

export const AddNew = styled.p`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: center;
  color: #3b599b;
  font-weight: 500;
  cursor: pointer;
`;

export const Content = styled.div`
  margin-left: 20px;
  margin-right: 50px;
  width: 97%;
  height: 72vh;
  border-top: 1px solid #444584;
  position: relative;
  bottom: 20px;
  display:flex:
  flex-direction: column;
  padding-top: 1.6rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const HighlightedButton = styled(Link)`
  width: 264px;
  height: 56px;
  border-radius: 28px;
  border: ${(props) => (props.inverted ? "2px solid #00bfa6" : "none")};
  box-shadow: ${(props) =>
    props.inverted ? "none" : "0 4px 15px 0 rgba(0, 0, 0, 0.16)"};
  background-color: ${(props) => (props.inverted ? "#f7f7f7" : "#00bfa6")};
  color: ${(props) => (!props.inverted ? "#f7f7f7" : "#00bfa6")};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  &:hover {
    color: ${(props) => (!props.inverted ? "#f7f7f7" : "#00bfa6")};
  }
`;

export const InputNum = styled(InputNumber)`
  width: 100%;
  height: 2.7rem;
  border-radius: 4px;
  background-color: #ffffff;
  margin-top: 10px;
  outline: none !important;
  border: solid 1px #c6c6c6 !important;
  box-shadow: none !important;
  .ant-input-number-input {
    width: 100%;
    height: 2.7rem;
    border: none !important;
    outline: none;
    box-shadow: none !important;
  }
`;

export const Input = styled(Inp)`
  width: 100%;
  height: 2.7rem;
  border-radius: 4px;
  background-color: #ffffff;
  margin-top: 10px;
  outline: none !important;
  border: ${(props) => (props.add ? "none" : "solid 1px #c6c6c6 !important")};
  box-shadow: none !important;
  .ant-input-number-input {
    width: 100%;
    height: 2.7rem;
    border: none !important;
    outline: none;
    box-shadow: none !important;
  }
  .ant-input {
    width: 100%;
    height: 2.7rem;
    border: solid 1px #c6c6c6 !important;
    outline: none;
    box-shadow: none !important;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled(Link)`
  padding: 14px 19px;
  margin-top: 10px;
  margin-right: 10px;
  border-radius: 22px;
  border: solid 1px #444584;
  background-color: ${(props) => (props.inverted ? "#444584" : "#ffffff")};
  font-weight: 600;
  color: ${(props) => (props.inverted ? "#fff" : "#444584")};
  &:hover {
    color: ${(props) => (props.inverted ? "#fff" : "#444584")};
  }
`;

export const Text = styled.p`
  opacity: 0.8;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  color: #000000;
`;

export const Modal = styled(NewInternship)`
  .ant-modal-header {
    border: none !important;
    border-radius: 12px !important;
    background-color: #f7f7f7 !important;
  }

  .ant-modal-title {
    font-size: 28px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.21;
    letter-spacing: normal;
    color: #000000;
  }

  .ant-modal-close {
    margin: 23px 46px 0 !important;
  }
  .ant-modal-content {
    border-radius: 12px !important;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.16) !important;
    background-color: #f7f7f7 !important;
    border: none !important;
    height: 90vh !important;
    padding: 23px 46px !important;
  }

  .ant-modal-wrap {
    background-color: rgba(146, 146, 146, 0.1);
  }
`;
