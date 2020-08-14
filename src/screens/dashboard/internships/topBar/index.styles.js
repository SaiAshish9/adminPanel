import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const TopBar = styled.div`
  background: #fff;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 14px;
  /* padding: 9px; */
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.02);
`;

export const Btn = styled(Link)`
  border-radius: 8px;
  text-align: left;
  height: 49px;
  min-width: 9.2rem;
  padding: 0 10px;
  display: flex;
  align-items: center;
  margin: auto 9px;
  background-color: ${(props) => props.selected && "rgba(93,167,241,0.1)"};
`;

export const BtnText = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: auto;
  color: ${(props) => (props.selected ? "#5da7f1" : "#333e49")};
`;

export const Button = styled.div`
         width: 176px;
         height: 38px;
         border-radius: 19px;
         border: solid 1.5px #5da7f1;
         display:flex;
         align-items: center;
         justify-content: space-around;
         padding:0 15px;
         font-weight:600;
         font-size:16;
         color:#5da7f1;
         margin:0 9px;
         cursor:pointer;
       `;

