import React from "react";
import { FaStar } from "react-icons/fa";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";

function Trend({ data }) {
  return (
    <Wrap>
      <Tabs>
        <Title style={{ backgroundColor: "#fcddef" }}>
          <img src="/images/icons/ico_dealhot.png" alt="" />
          {data.slice(0, 1).map((item) => item.name)}
        </Title>
        <TabList>
          {data
            .filter((c) => c.parentId === 62)
            .map((category) => (
              <Tab key={category.id}>{category.name}</Tab>
            ))}
        </TabList>
        {data
          .filter((c) => c.parentId === 62)
          .map((category) => (
            <TabPanel key={category.id}>
              <ul>
                <li>
                  {category.books &&
                    category.books.slice(0,10).map((book) => (
                      <div
                        className="inner-item"
                        key={book.id}
                        title={book.name}
                      >
                        {book.salePrice && (
                          <div className="label-sale">
                            <span className="label-sale-value">
                              {Math.round(
                                100 - (book.salePrice / book.price) * 100
                              ) + "%"}
                            </span>
                          </div>
                        )}
                        <div className="img-item">
                          <Link to={`/products/${book.id}`}>
                            <img
                              src={`./images/products/${
                                book.images && book.images[0]
                              }`}
                              alt={book.name}
                            />
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
                                value={
                                  book.salePrice ? book.salePrice : book.price
                                }
                                displayType="text"
                                thousandSeparator={true}
                                suffix=" đ"
                              />
                            </span>
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
                              ({book.reviewNumbers || 0})
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                </li>
                <div className="read-more-normal">
                  <Link to={`/all-category/${category.id}`}>Xem thêm</Link>
                </div>
              </ul>
            </TabPanel>
          ))}
      </Tabs>
    </Wrap>
  );
}

export default Trend;

const Wrap = styled.section`
  margin: 15px 0 0;
  .react-tabs {
    background-color: #fff;
  }
  .react-tabs__tab {
    border: 1px solid transparent;
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
      margin-left: 10px;
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
    padding: 10px 0;
    li {
      display: grid;
      @media only screen and (max-width: 3840px) {
        grid-template-columns: repeat(5, 1fr);
      }
      @media only screen and (max-width: 992px) and (min-width: 769px) {
        grid-template-columns: repeat(4, 1fr);
      }
      @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
      }

      grid-gap: 8px;
      padding: 20px 0;
      .inner-item {
        //border: 1px solid #f0f0f0;
        position: relative;
        padding: 1px;
        overflow: hidden;
        text-align: start;
        padding-left: 15px;
        &:hover {
          box-shadow: 0px 0px 4px 2px rgb(0 0 0 / 10%);
        }
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
          height: 2rem;
          padding-top: 3px;
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
          .price {
            line-height: 1.65rem;
            font-size: 1.25rem !important;
            color: #c92127;
            font-weight: 600;
          }
          .discount-percent {
            display: inline-block;
            //width: 50px;
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
    .read-more-normal {
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
        color: #fff;
        background-image: linear-gradient(to right, #ff9800, #f7695d);
        border-radius: 50px;
        box-shadow: 2px 3px 5px #ccc;
        &:hover {
          box-shadow: 0px 6px 8px #e6e6e6;
        }
      }
    }
  }
`;
const Title = styled.div`
  text-transform: uppercase;
  font-size: 17px;
  font-weight: 500;
  padding: 10px 0;
  img {
    padding: 0 15px;
  }
`;
