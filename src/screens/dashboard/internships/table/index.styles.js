import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  height: 70vh;
  margin-top: 2rem;
  border-radius: 15px;
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Data = styled.p`
  margin: 1rem 0;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #333e49;
`;

export const Thead = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  align-items: center !important ;
  padding-left: 2rem;
`;

export const Head = styled.div`
  width: 37px;
  height: 19px;
  opacity: 0.7;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;
  color: #333e49;
`;

export const Highlight = styled.div`
  border-radius: 14px;
  background-color: ${props=>props.bg};
  padding: 3px 23px;
  margin:0 10px;
  font-weight:500;
  font-size:14px;
  color:${props=>props.color};
  cursor: pointer;
`;
