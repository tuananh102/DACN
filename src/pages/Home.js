import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import ImgSlider from "../components/Home/ImgSlider";
import Viewers from "../components/Home/Viewers";
import IconMenu from "../components/Home/IconMenu";
import Content from "../components/Home/Content";
import Listcategory from "../components/Home/Listcategory";

function Home() {
  return (
    <ContainerMain>
        <Wrap className="row">
          <Listcategory className="col-lg-3 list-mobile-hidden" />
          <Col className="col-lg-9"><ImgSlider /></Col>
        </Wrap>
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
  //min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  //position: relative;
  overflow-x: hidden;
`;
