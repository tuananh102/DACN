import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ImgSlider() {
  let settings = {
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };
  return (
    <div className="col-lg-9">
      <Carousel {...settings}>
        <Wrap>
          <img src="/images/muonkiepnhansinh.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/images/phienchodocu.png" alt="" />
        </Wrap>
        <Wrap>
          <img src="/images/DC-main.png" alt="" />
        </Wrap>
      </Carousel>
    </div>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  padding: 0;
  .slick-list {
    overflow: hidden;
  }
  .slick-prev {
    left: 15px;
  }
  .slick-next {
    right: 15px;
  }
  button {
    width: 34px;
    height: 34px;
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }
`;
