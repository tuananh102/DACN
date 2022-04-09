import React from "react";
import { Link } from "react-router-dom";
// import { Col } from "react-bootstrap";
import styled from "styled-components";
import ImgSlider from "../components/Home/ImgSlider";
import IconMenu from "../components/Home/IconMenu";
import Trend from "../components/Home/Content/Trend";
import CategoryTabList from "../components/Home/Content/CategoryTabList";
import PartnerSlider from "../components/Home/PartnerSlider";

function Home({ categories }) {
  document.title = "Nhà sách trực tuyến Fahasa";

  return (
    <ContainerMain>
      <Wrap className="row">
        {/* Category list Start */}
        <div className="col-lg-3 list-mobile-hidden">
          <div className="title"> Danh Mục Sản Phẩm</div>
          <div className="DMSP">
            <ul style={{ padding: "0" }}>
              {categories
                .filter((c) => c.parentId === null)
                .slice(0, 9)
                .map((item) => (
                  <li key={item.id}>
                    <Link to={`/all-category/${item.id}`} className="dropdown">
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        {/* Category list End */}

        {/* Slider */}
        <ImgSlider />
      </Wrap>
      <div className="banner">
        <div className="inner-item">
          <img src="/images/viewers-disney.png" alt="" />
        </div>
        <div className="inner-item">
          <img src="/images/viewers-pixar.png" alt="" />
        </div>
        <div className="inner-item">
          <img src="/images/viewers-marvel.png" alt="" />
        </div>
        <div className="inner-item">
          <img src="/images/viewers-national.png" alt="" />
        </div>
      </div>
      <IconMenu />
      <Trend
        data={categories.filter(
          (c) => c.id === 62 || c.id === 63 || c.id === 64 || c.id === 65
        )}
      />
      {/* Start Tab product by category */}
      {categories
        .filter((c) => c.parentId === null)
        .slice(0, 9) // lọc ds các danh mục cha
        .map((item) => (
          <CategoryTabList
            title={item.name}
            id={item.id}
            key={item.id}
            data={categories}
          />
        ))}

      {/* End tab product by category */}
      <PartnerSlider />
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
    padding: 10.85px 12px;

    i {
      position: absolute;
      right: 10px;
      bottom: 13px;
    }
  }
`;

const ContainerMain = styled.main`
  //min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  //position: relative;
  overflow-x: hidden;
  .banner {
    margin-top: 30px;
    display: grid;
    grid-gap: 25px;
    padding: 30px 0;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    .inner-item {
      border-radius: 10px;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &:hover {
        transform: scale(1.05);
        border-color: rgb(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
          rgb(0 0 0 / 72%) 0px 30px 22px -10px;
      }
    }
  }
`;
