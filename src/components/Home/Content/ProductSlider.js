import React , { useState, useEffect }from "react";
import Slider from "react-slick";
import styled from "styled-components";
import NumberFormat from "react-number-format";


function ProductSlider(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_API+"book")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => { console.log(data);
      return setProducts(data)})
  }, [])
  const productData = products
    .filter((propducts) => props.id === propducts.catId)
    .map((item, index) => {
      return (
        <div key={index.toString()} className="inner-item">
          {/* {item.price && (
            <div className="label-sale">
              <span className="label-sale-value">
                {item.price}
                {item.price && "%"}
              </span>
            </div>
          )} */}
          <div className="img-item">
            <a href="/#">
              <img src={"../images/products/" + item.img} alt="hehe" />
            </a>
          </div>
          <div className="name-item">
            <h2 className="product-name-seo">
              <a href="/#">{item.name}</a>
            </h2>
          </div>
          <div className="price-product">
            <div>
              <span className="price">
                <NumberFormat
                  value={item.salePrice}
                  displayType="text"
                  thousandSeparator={true}
                  suffix=" đ"
                />
              </span>
              <span className="discount-percent">
                {item.price &&
                  (Math.round(100-(item.salePrice/item.price)*100))+ "%"}
              </span>
            </div>
            <span className="delete-price">{item.price}</span>
          </div>
          <div className="rating-container"></div>
        </div>
      );
    });

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <Wrap>
      <Slider {...settings}>{productData}</Slider>
    </Wrap>
  );
}

export default ProductSlider;
const Wrap = styled.div``;
