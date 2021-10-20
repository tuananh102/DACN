import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
function Header() {
  const [showHidden, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Nav>
      <Overlay show={showHidden} onClick={handleClose}></Overlay>
      {/* Start - Sidebar */}
      <SideBar show={showHidden}>
        <div className="title">
          Danh mục sản phẩm
          <i className="fas fa-times" onClick={handleClose}></i>
        </div>
        <li>
          <a href="about.asp">Sách trong nước</a>
        </li>
        <li>
          <a href="sachtrongnuoc.asp">Foreign Books</a>
        </li>
        <li>
          <a href="news.asp">VPP- Dụng cụ học sinh</a>
        </li>
        <li>
          <a href="contact.asp">Đồ chơi</a>
        </li>
        <li>
          <a href="about.asp">Sách giáo khoa</a>
        </li>
        <li>
          <a href="about.asp">Bách hóa Online - Lưu Niệm</a>
        </li>
        <li>
          <a href="about.asp">Bách hóa Online - Lưu Niệm</a>
        </li>
        <li>
          <a href="about.asp">Bách hóa Online - Lưu Niệm</a>
        </li>
        <li>
          <a href="about.asp">Bách hóa Online - Lưu Niệm</a>
        </li>
        <li>
          <a href="about.asp">Bách hóa Online - Lưu Niệm</a>
        </li>
        <li>
          <a href="about.asp">Bách hóa Online - Lưu Niệm</a>
        </li>
        <li>
          <a href="about.asp">Bách hóa Online - Lưu Niệm</a>
        </li>
        <li>
          <a href="about.asp">Bách hóa Online - Lưu Niệm</a>
        </li>
        <li>
          <a href="about.asp">Bách hóa Online - Lưu Niệm</a>
        </li>
        <li>
          <a href="about.asp">Bách hóa Online - Lưu Niệm</a>
        </li>
      </SideBar>
      <div className="nav-mobile">
        <div className="logo-header-container">
          <div className="logo-header">
            <Link to="/">
              <img src="/images/logo.png" alt="" />
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="show-menu">
            <i className="fas fa-bars" onClick={handleShow}></i>
          </div>
          <div className="search-bar">
            <input placeholder="Tìm kiếm sản phẩm mong muốn..." type="text" />
            <div className="search-btn">
              <i className="fas fa-search"></i>
            </div>
          </div>
          <div className="right-nav">
            <i className="fas fa-shopping-cart"></i>
            <i className="fas fa-user"></i>
          </div>
        </div>
      </div>
      <div className="row navbar-desktop">
        <div className="col-lg-3 logo-header">
          <Link to="/">
            <img src="/images/logo.png" alt="" />
          </Link>
        </div>
        <div className="col-lg-6">
          <div className="search-bar">
            <input placeholder="Tìm kiếm sản phẩm mong muốn..." type="text" />
            <div className="search-btn">
              <i className="fas fa-search"></i>
            </div>
          </div>
        </div>
        <div className="col-lg-3 right-nav">
          <div className="row">
            <div className="col notification-hidden">
              <i className="far fa-bell"></i>
              <span>Thông báo</span>
            </div>
            <div className="col">
              <i className="fas fa-shopping-cart"></i>
              <span>Giỏ hàng</span>
            </div>
            <div className="col">
              <i className="fas fa-sign-in-alt"></i>
              <span>Đăng nhập</span>
            </div>
          </div>
        </div>
      </div>
    </Nav>
  );
}

export default Header;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #333;
  opacity: 0.5;
  z-index: 9;
  display: ${(props) => (props.show ? "block" : "none")};
`;
const Nav = styled.nav`
  height: 93px;
  .navbar-desktop {
    @media (max-width: 992px) {
      display: none;
    }
    padding: 0 5px;
    background-color: #fff;
    height: 100%;
    display: flex;
    align-items: center;
    i {
      color: #f7941e;
      cursor: pointer;
    }
    .logo-header {
      img {
        width: 100%;
        padding: 20px 20px 30px 20px;
      }
    }
    .search-bar {
      position: relative;
      input {
        padding-left: 15px;
        width: 95%;
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
      }
      .search-btn {
        width: 30px;
        height: 30px;
        position: absolute;
        right: 6%;
        top: 10px;
        bottom: 10px;
        i {
          font-size: 20px;
        }
      }
    }
    .right-nav {
      padding-right: 20px;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 500;
      color: #f7941e;
      .col {
        padding: 5px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        span {
          padding-top: 5px;
          user-select: none;
        }
      }
      i {
        font-size: 17px;
      }
    }
  }

  .nav-mobile {
    padding: 10px 0;
    @media (min-width: 992px) {
      display: none;
    }
    background-color: #f7941e;
    i {
      font-size: 17px;
      color: white;
      cursor: pointer;
    }
    .logo-header-container {
      display: flex;
      justify-content: center;
      .logo-header {
        width: 150px;
        padding-bottom: 10px;
        img {
          width: 100%;
        }
      }
    }
    .show-menu {
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .search-bar {
      width: calc(100% - 120px);
      position: relative;
      input {
        padding-left: 15px;
        width: 100%;
        height: 35px;
        border: none;
        border-radius: 5px;
        font-size: 1em;
        &:focus,
        &:active {
          outline: none;
        }
        &::placeholder {
          opacity: 0.5;
          font-size: 12px;
        }
      }
      .search-btn {
        width: 30px;
        height: 30px;
        position: absolute;
        right: 0px;
        top: 7px;
        i {
          font-size: 20px;
          color: #f7941e;
        }
      }
    }
    .right-nav {
      width: 80px;
      display: flex;
      align-items: center;
      i {
        padding: 0 10px;
        font-size: 20px;
      }
    }
  }
`;

const SideBar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: white;
  z-index: 10;
  width: 300px;
  padding: 20px;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};
  transition: 300ms all cubic-bezier(0.25, 0.46, 0.45, 0.94);
  overflow: auto;
  .title {
    color: #f7941e;
    display: flex;
    align-items: center;
    margin: 0 -20px;
    padding: 0px 0px 15px 15px;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    position: relative;
    i {
      position: absolute;
      right: 10px;
      cursor: pointer;
    }
  }
  li {
    padding: 12px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 500;
    }
  }
`;
