import React from "react";
import { Col } from "react-bootstrap";

import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.png" />
      <Search>
        <Input placeholder="Tìm kiếm sản phẩm mong muốn..." type="text" />
        <i className="fas fa-search"></i>
      </Search>
      <RightNav className="row">
        <Col>
          <i className="far fa-bell"></i>
          <span>Thông báo</span>
        </Col>
        <Col>
          <i className="fas fa-shopping-cart"></i>
          <span>Giỏ hàng</span>
        </Col>
        <Col>
          <i className="fas fa-sign-in-alt"></i>
          <span>Đăng nhập</span>
        </Col>
      </RightNav>
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  i {
    color: #f7941e;
    font-size: 20px;
    cursor: pointer;
  }
`;
const Logo = styled.img`
  width: 200px;
`;

const Search = styled.div`
  position: relative;
  width: calc(100% - 590px);
  margin: 6px 0 0 30px;
  i {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 25px;
  }
`;
const Input = styled.input`
  padding-left: 10px;
  width: 100%;
  height: 45px;
  border: 2px solid #f7941e;
  border-radius: 3px;
  font-size: 1em;
  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    opacity: 0.5;
    font-size: 15px;
  }
`;

const RightNav = styled.div`
  width: 325px;
  display: flex;
  justify-content: space-between;
  .col {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-top: 10px;
    span {
      line-height: 18px;
      text-transform: uppercase;
      color: #f7941e;
      font-size: 12px;
      font-weight: 500;
    }
  }
`;
