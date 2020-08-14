import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 25px 36px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Col = css`
  display: flex;
  flex-direction: column;
  flex-direction: space-between;
`;

export const Section12 = styled.div`
  width: 100%;
  height: 138px;
  background: #fff;
  border-radius: 15px;
`;

export const Section21 = styled.div`
  width: 40%;
  height: 285px;
  background: #fff;
  border-radius: 15px;
`;

export const Section22 = styled.div`
  width: 58%;
  height: 285px;
  background: #fff;
  border-radius: 15px;
`;

export const Workers = styled.div`
  height: 301px;
  width: 60%;
  background: #fff;
  margin-top: 36px;
  border-radius: 15px;
  padding: 28px 15px;
  ${Col}
`;

export const Highlight = styled.p`
  background: ${(props) => props.bg};
  padding: 5px 10px;
  cursor: pointer;
  display: flex !important;
  height: 25;
  align-items: center;
  font-weight: 600;
  color: ${(props) => props.color};
  font-size: 12px !important;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #333e49;
`;
