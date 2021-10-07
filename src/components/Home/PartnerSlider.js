import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

function PartnerSlider() {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 10,
    slidesToScroll: 3,
    initialSlide: 0,
  };
  return (
    <Wrap>
      <Slider {...settings}>
        <div className="inner-item">
          <a href="/#">
            <img src="/images/cambridge.jpg" alt="" />
          </a>
        </div>
        <div className="inner-item">
          <a href="/#">
            <img src="/images/cengage.jpg" alt="" />
          </a>
        </div>
        <div className="inner-item">
          <a href="/#">
            <img src="/images/Harper-Collins.jpg" alt="" />
          </a>
        </div>
        <div className="inner-item">
          <a href="/#">
            <img src="/images/hachette.jpg" alt="" />
          </a>
        </div>
        <div className="inner-item">
          <a href="/#">
            <img src="/images/macgrawhill.jpg" alt="" />
          </a>
        </div>
        <div className="inner-item">
          <a href="/#">
            <img src="/images/macmillan.jpg" alt="" />
          </a>
        </div>
        <div className="inner-item">
          <a href="/#">
            <img src="/images/oxford.jpg" alt="" />
          </a>
        </div>
        <div className="inner-item">
          <a href="/#">
            <img src="/images/paragon.jpg" alt="" />
          </a>
        </div>
        <div className="inner-item">
          <a href="/#">
            <img src="/images/PearsonLogo_Avatar.png" alt="" />
          </a>
        </div>
        <div className="inner-item">
          <a href="/#">
            <img src="/images/penguin.jpg" alt="" />
          </a>
        </div>
        <div className="inner-item">
          <a href="/#">
            <img src="/images/usborn.jpg" alt="" />
          </a>
        </div>
        <div className="inner-item">
          <a href="/#">
            <img src="/images/Scholastic-bar-logo.png" alt="" />
          </a>
        </div>
      </Slider>
    </Wrap>
  );
}

export default PartnerSlider;

const Wrap = styled.div`
  .slick-slide {
    background-color: #ffffff;
    margin: 20px 0;
  }
  .inner-item {
    padding: 20px 0;
    max-width: 100px !important;
    img {
      box-sizing: border-box;
      max-width: 100%;
      height: auto;
    }
  }
`;
