import React from "react";
import styled from "styled-components";

const BtnReadMore = (props) => {
  return <Wrap>
    <a {...props}>{props.title}</a>
  </Wrap>;
};
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 992px) {
    a {
      width: 140px;
    }
  }
  @media screen and (min-width: 993px) {
    height: 80px;
    a {
      width: 220px;
    }
  }
  a {
    padding: 10px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: #c92127;
    border: 2px solid #c92127;
    border-radius: 5px;
    box-shadow: 2px 3px 5px #ccc;
    &:hover {
      box-shadow: 0px 6px 8px #e6e6e6;
    }
  }
`;
export default BtnReadMore;