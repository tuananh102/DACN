import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


function Listcategory(props) {
  return (
    <ListCategory className={props.className}>
      <div className="title"> Danh Mục Sản Phẩm</div>
      <div className="DMSP">
        <ul style={{ padding: "0" }}>
          <li>
            <Link to="/products" className="dropdown">
              Sách trong nước
            </Link>
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
            <a href="about.asp">Làm đẹp - Sức khỏe</a>
          </li>
          <li>
            <a href="about.asp">Hành trang đến trường</a>
          </li>
          <li>
            <a href="about.asp">VPP - DCHS theo thương hiệu</a>
          </li>
          <li>
            <a href="about.asp">Đồ chơi theo thương hiệu</a>
          </li>
          <li>
            <a href="about.asp">Bách hóa Online - Lưu Niệm</a>
          </li>
        </ul>
      </div>
    </ListCategory>
  );
}

export default Listcategory;

const ListCategory = styled.div`
  .DMSP {
    max-height: 340px;
  }
  .title {
    background-color: #f7941e;
    min-height: 42px;
    line-height: 38px;
    text-align: center;
    font-weight: 600;
    color: white;
    font-size: 20px;
  }
  li {
    background-color: white;
    display: block;
    width: 100%;
    list-style-type: none;
    list-style-position: inside;
    &:hover {
      background-color: #fcdab0;
    }
  }
  a {
    display: flex;
    font-size: 15px;
    text-decoration: none;
    color: #444;
    padding: 11.1px 12px;

    i {
      position: absolute;
      right: 10px;
      bottom: 13px;
    }
  }
`;
