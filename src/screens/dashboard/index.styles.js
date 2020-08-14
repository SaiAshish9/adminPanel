import styled, { css } from "styled-components";
import {Link} from "react-router-dom";

const row = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Row = styled.div`
  ${row}
`;


export const Container = styled.div`
  background-color: #f7f9fc;
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  display: flex;
`;

export const Btn = styled(Link)`
  padding: ${(props) => (props.selected ? "10px 29px" : "9px 29px")};
  border-radius: 8px;
  width: 100%;
  text-align: left;
  background-color: ${(props) => props.selected && "rgba(93,167,241,0.1)"};
`;

export const BtnText = styled.p`
  font-size: 16px;
  line-height: 1.19;
  font-weight: ${(props) => props.selected && 500};
  color: ${(props) => (props.selected ? "#5da7f1" : "#333e49")};
  position: relative;
  top: 9px;
`;