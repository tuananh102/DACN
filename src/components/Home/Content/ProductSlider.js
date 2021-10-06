import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import NumberFormat from "react-number-format";

const products = [
  {
    id: 1,
    name: "Sách Giáo Khoa Bộ Lớp 1 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 1,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 2,
    name: "Sách Giáo Khoa Bộ Lớp 1 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 1,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 3,
    name: "Sách Giáo Khoa Bộ Lớp 1 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 1,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 4,
    name: "Sách Giáo Khoa Bộ Lớp 1 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 1,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 5,
    name: "Sách Giáo Khoa Bộ Lớp 1 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 1,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 6,
    name: "Sách Giáo Khoa Bộ Lớp 1 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 1,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 7,
    name: "Sách Giáo Khoa Bộ Lớp 1 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 1,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 8,
    name: "Sách Giáo Khoa Bộ Lớp 1 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 1,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 11,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 2,
    img: "/images/products/sgk-c2-tnxh.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 12,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 2,
    img: "/images/products/sgk-c2-tnxh.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 13,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 2,
    img: "/images/products/sgk-c2-tnxh.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 14,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 2,
    img: "/images/products/sgk-c2-tnxh.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 15,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 2,
    img: "/images/products/sgk-c2-tnxh.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 16,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 2,
    img: "/images/products/sgk-c2-tnxh.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 17,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 2,
    img: "/images/products/sgk-c2-tnxh.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 18,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 2,
    img: "/images/products/sgk-c2-tnxh.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 21,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 2,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 22,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 2,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 23,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 2,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 24,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 2,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 25,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 2,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 26,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 2,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 27,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 2,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 28,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 2,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 31,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 3,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 32,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 3,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 33,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 3,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 34,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 3,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 35,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 3,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 36,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 3,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 37,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 3,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 38,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 3,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 41,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 4,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 42,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 4,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 43,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 4,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 44,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 4,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 45,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 4,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 46,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 4,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 47,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 4,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 48,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 4,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 51,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 5,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 52,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 5,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 53,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 5,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 54,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 5,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 55,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 5,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 56,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 5,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 57,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 5,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
  {
    id: 58,
    name: "Sách Giáo Khoa Bộ Lớp 2 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
    catid: 5,
    img: "/images/products/sgk-c1-canhdieu.jpg",
    percentSale: null,
    price: 199000,
    delPrice: null,
    creatAt: null,
  },
];

function ProductSlider(props) {
  const productData = products
    .filter((propducts) => props.id === propducts.catid)
    .map((item, index) => {
      return (
        <div key={index.toString()} className="inner-item">
          {item.percentSale && (
            <div className="label-sale">
              <span className="label-sale-value">
                {item.percentSale}
                {item.percentSale && "%"}
              </span>
            </div>
          )}
          <div className="img-item">
            <a href="/#">
              <img src={item.img} alt="" />
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
                  value={item.price}
                  displayType="text"
                  thousandSeparator={true}
                  suffix=" đ"
                />
              </span>
              <span className="discount-percent">
                {item.delPrice &&
                  ((item.delPrice - item.price) * 100) / item.price + "%"}
              </span>
            </div>
            <span className="delete-price">{item.delPrice}</span>
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
