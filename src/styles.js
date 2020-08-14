import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    font-family:'Montserrat',sans-serif ;
    overflow-x: hidden;
    &::-webkit-scrollbar{
        display: none;
    }
 .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    color: #444584 !important;
    font-weight: 500;
    background-color: #f7f7f7 !important;
  }
  .anticon-check{
    color: #444584 !important;
  }
}

`;
