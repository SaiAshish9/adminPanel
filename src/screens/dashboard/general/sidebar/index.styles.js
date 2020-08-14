import styled, { css } from "styled-components";
import { Layout } from "antd";

const { Sider } = Layout;

export const View = styled.div`
  margin-top: 29px;
  width: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 6px;
`;

export const Slider = styled(Sider)`
  background: #fff;
  display: flex;
  justify-content: center;
  padding-top: 60px;
  text-align: center;
`;

export const Name = styled.div`
  font-size: 18px;
  line-height: 1.22;
  color: #333e49;
  margin-top: 16px;
`;

export const Email = styled.div`
  font-size: 12px;
  line-height: 1.15;
  color: #333e49;
  margin-top: 7px;
`;

export const Avatar = styled.div`
  height: 130px;
  width: 130px;
  background: #f7f9fc;
  border-radius: 50%;
  cursor: pointer;
`;
