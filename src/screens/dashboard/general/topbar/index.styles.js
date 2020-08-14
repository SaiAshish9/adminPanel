import styled, { css } from "styled-components";


const row = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.div`
  height: 60px;
  background-color: #fff;
  width: 100%;
  padding-left: 1%;
  padding-right: 2.7%;
  ${row}
`;

export const Text = styled.div`
  font-family: "Montserrat";
  font-size: 18px;
  align-self: center;
  margin-left: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #333e49;
`;