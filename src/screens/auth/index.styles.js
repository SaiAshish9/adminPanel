import styled from "styled-components";
import { Input, Button } from "antd";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;
export const AuthType = styled.p`
  font-size: 28px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: left;
  color: #333e49;
`;

export const AuthForm = styled.form`
  width: 407px;
  height: 384px;
  border-radius: 15px;
  box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  padding: 58px 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const Btn = styled(Button)`
         width: 278px;
         height: 46px;
         border-radius: 3px;
         display: flex;
         align-items: center;
         justify-content: center;
         background-color: #38bdba !important;
         font-size: 15px;
         font-weight: 600;
         font-stretch: normal;
         font-style: normal;
         line-height: 1.2;
         border: none !important;
         letter-spacing: normal;
         color: #ffffff !important;
         cursor: pointer;
         &:focus,&:active {
           color: #ffffff;
           background-color: #38bdba;
           border: none !important;
         }
       `;

export const Inp = styled(Input)`
  outline: none !important;
  box-shadow: none !important;
  border: none !important;
  border-bottom: 1px solid #38bdba !important;
  ::-webkit-input-placeholder {
    font-size: 14px !important;
    font-weight: normal !important;
    font-stretch: normal !important;
    font-style: normal !important;
    line-height: 1.14 !important;
    letter-spacing: normal !important;
    text-align: left !important;
    color: #333e49 !important;
  }
`;
