import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container } from "react-bootstrap";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import IconMenu from "./IconMenu";
import Content from "./Content";

function Home() {
  return (
    <ContainerMain>
      <Container fluid>
        <Wrap className="row">
        <ListCategory className="col-lg-3 list-mobile-hidden">
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
          <Col className="col-lg-9">
            <ImgSlider />
          </Col>
        </Wrap>
      </Container>
      <Viewers />
      <IconMenu />
      <Content />
    </ContainerMain>
  );
}

export default Home;

const Wrap = styled.div`
  margin: 20px -20px 0px -20px;
    @media screen and (max-width: 992px) {
      .list-mobile-hidden {
    display: none;
  }
}
`;

const ContainerMain = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
`;

const ListCategory = styled.div`

@media screen and (max-width: 600px) {
  div.example {
    display: none;
  }
}
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
