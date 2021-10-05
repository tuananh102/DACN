import React from 'react'
import styled from 'styled-components';

function Listcategory(props) {
  return (
    <ListCategory className={props.className}>
      <div className="title"> Danh Mục Sản Phẩm</div>
            <div className="DMSP">
              <ul style={{ padding: "0" }}>
                <li>
                  <a href="about.asp">
                    Sách trong nước
                    <i className="fas fa-angle-right"></i>
                  </a>
                </li>
                <li>
                  <a href="sachtrongnuoc.asp">
                    Foreign Books <i className="fas fa-angle-right"></i>
                  </a>
                </li>
                <li>
                  <a href="news.asp">
                    VPP- Dụng cụ học sinh <i className="fas fa-angle-right"></i>
                  </a>
                </li>
                <li>
                  <a href="contact.asp">
                    Đồ chơi <i className="fas fa-angle-right"></i>
                  </a>
                </li>
                <li>
                  <a href="about.asp">
                    Sách giáo khoa <i className="fas fa-angle-right"></i>
                  </a>
                </li>
                <li>
                  <a href="about.asp">
                    Bách hóa Online - Lưu Niệm{" "}
                    <i className="fas fa-angle-right"></i>
                  </a>
                </li>
                <li>
                  <a href="about.asp">
                    Bách hóa Online - Lưu Niệm{" "}
                    <i className="fas fa-angle-right"></i>
                  </a>
                </li>
                <li>
                  <a href="about.asp">
                    Bách hóa Online - Lưu Niệm{" "}
                    <i className="fas fa-angle-right"></i>
                  </a>
                </li>
                <li>
                  <a href="about.asp">
                    Bách hóa Online - Lưu Niệm{" "}
                    <i className="fas fa-angle-right"></i>
                  </a>
                </li>
              </ul>
            </div>
    </ListCategory>
  )
}

export default Listcategory

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
    position: relative;
    font-size: 14px;
    text-decoration: none;
    color: #444;
    padding: 10.5px 12px;
    i {
      position: absolute;
      right: 10px;
      bottom: 13px;
    }
  }
`;
