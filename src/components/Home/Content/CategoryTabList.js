import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import NumberFormat from "react-number-format";

import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function CategoryTabList({ id, title, data }) {
  // Setting of slider
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
    <Wrap key={id}>
      <Tabs>
        <Title>{title}</Title>
        <TabList>
          {data
            .filter((category) => id === category.parentId)
            .map((item) => (
              <Tab key={item.id}>{item.name}</Tab>
            ))}
        </TabList>
        {data
          .filter((category) => id === category.parentId)
          .map((item) => (
            <TabPanel key={item.id}>
              {/* <ProductSlider id={item.id} /> */}
              <Slider {...settings}>
                {item.books.map((book) => (
                  <div key={book.id} className="inner-item" title={book.name}>
                    <div className="img-item">
                      <Link to={`/products/${book.id}`}>
                        {book.images && (
                          <img
                            src={"/images/products/" + book.images[0]}
                            alt={book.name}
                          />
                        )}
                      </Link>
                    </div>
                    <div className="name-item">
                      <h2 className="product-name-seo">
                        <Link to={`/products/${book.id}`}>{book.name}</Link>
                      </h2>
                    </div>
                    <div className="price-product">
                      <div>
                        <span className="price">
                          <NumberFormat
                            value={book.salePrice ? book.salePrice : book.price}
                            displayType="text"
                            thousandSeparator={true}
                            suffix=" đ"
                          />
                        </span>
                        {book.salePrice && (
                          <span className="discount-percent">
                            {Math.round(
                              100 - (book.salePrice / book.price) * 100
                            ) + "%"}
                          </span>
                        )}
                      </div>
                      <span
                        className="delete-price"
                        style={
                          book.salePrice
                            ? {}
                            : { visibility: "hidden", height: "15px" }
                        }
                      >
                        <NumberFormat
                          value={book.price}
                          displayType="text"
                          thousandSeparator={true}
                          suffix=" đ"
                        />
                      </span>
                    </div>
                    <div className="rating-container">
                      <div className="rating-star">
                        {[...Array(5)].map((star, index) => {
                          const ratingValue = index + 1;
                          return (
                            <FaStar
                              size="12"
                              key={index}
                              color={
                                ratingValue <= book.starRating
                                  ? "#F7941E"
                                  : "#e4e5e9"
                              }
                            />
                          );
                        })}
                        <span className="star-point">
                          &nbsp;({book.reviewNumbers || 0})
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              <div className="read-more">
                <Link to={`/all-category/${item.id}`}>Xem thêm</Link>
              </div>
            </TabPanel>
          ))}
      </Tabs>
    </Wrap>
  );
}

export default CategoryTabList;
const Wrap = styled.section`
  margin: 15px 0 0;
  .react-tabs {
    background-color: #fff;
  }
  .react-tabs__tab {
    border: 1px solid transparent;
    border-radius: 5px;
    &:hover {
      color: #f7931e;
      border-radius: 5px;
      border: 1px solid #f7941e;
    }
    &:focus {
      box-shadow: none;
      border: 1px solid #f7941e;
    }
    &:focus:after {
      display: none;
    }
  }
  .react-tabs__tab-list {
    border-bottom: none;
    padding-left: 10px;
    margin: 10px;
    li {
      margin-left: 15px;
    }
  }
  .react-tabs__tab--selected {
    color: #f7941e;
    border: 1px solid #f7941e;
    font-weight: bold;
    border-radius: 5px;
  }

  /* Content here */
  .react-tabs__tab-panel {
    border-top: 1px solid #f0f0f0;
    .inner-item {
      max-width: 220px !important;
      margin: 10px;
      border: 1px solid #f0f0f0;
      position: relative;
      padding-left: 10px;

      overflow: hidden;
      text-align: start;
      .label-sale {
        position: absolute;
        width: 44px;
        height: 44px;
        background-color: #f7941e;
        border-radius: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        right: 10px;
        top: 10px;
        z-index: 1;
        font-size: 19px;
        font-weight: bold;
        color: transparent;
        .label-sale-value {
          color: #fff;
          font-size: 0.9em;
          font-weight: 600;
        }
      }
      .img-item {
        img {
          max-width: 100%;
          max-height: 190px;
        }
      }
      .product-name-seo {
        padding-top: 3px;
        height: 2rem;
        a {
          overflow: hidden;
          font-size: 15px;
          text-decoration: none;
          text-align: start;
          color: inherit;
          font-weight: 400;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
      .price-product {
        display: flex;
        flex-direction: column;
        div {
          display: flex;
        }
        .price {
          line-height: 1.65rem;
          font-size: 1.25rem !important;
          color: #c92127;
          font-weight: 600;
        }
        .discount-percent {
          display: inline-block;
          margin-left: 6px;
          padding: 0 4px;
          color: #fff;
          font-weight: 600;
          border-radius: 3px;
          background-color: #c92127;
        }
        .delete-price {
          color: #888888;
          text-decoration: line-through;
          font-size: 13px;
        }
      }
      .rating-container {
        text-align: start;
        .star-point {
          font-size: 14px;
          color: #f7941e;
          user-select: none;
        }
      }
    }
  }

  //Button has a background
  .read-more {
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 992px) {
      a {
        width: 140px;
      }
    }
    @media screen and (min-width: 993px) {
      height: 80px;
      a {
        width: 220px;
      }
    }
    a {
      padding: 10px;
      font-size: 14px;
      font-weight: bold;
      text-align: center;
      color: #c92127;
      border: 2px solid #c92127;
      border-radius: 5px;
      box-shadow: 2px 3px 5px #ccc;
      &:hover {
        box-shadow: 0px 6px 8px #e6e6e6;
      }
    }
  }
  .slick-next {
    background: url("/images/fa-angle-right_32_8_8e8c8c_none.png") no-repeat
      100% 100% !important;
    right: -5px;
    z-index: 5 !important;
  }
  .slick-prev {
    background: url("/images/fa-angle-left_32_8_8e8c8c_none.png") no-repeat 100%
      100% !important;
    left: -5px;
    z-index: 5 !important;
  }

  .slick-next,
  .slick-prev {
    background-size: 30px 30px !important;
    //opacity: 0.8;
    width: 34px !important;
    height: 34px !important;
    border-radius: 19px;
    border: 1px solid #cccccc !important;
    background-position: 3px 1px !important;
    position: absolute;
    z-index: 10;
    &:before {
      display: none !important;
    }
  }
`;
const Title = styled.div`
  text-transform: uppercase;
  font-size: 17px;
  font-weight: 700;
  margin-left: 20px;
  padding: 20px 15px 0;
  color: #333;
  img {
    padding: 0 15px;
  }
`;
