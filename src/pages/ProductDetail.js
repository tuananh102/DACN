import React from "react";
import NumberFormat from "react-number-format";
import NavMenu from "../features/NavMenu";

import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { FaStar, FaMinus, FaPlus } from "react-icons/fa";
import BtnReadMore from "../features/BtnReadMore";
import { Collapse } from "react-bootstrap";

const apiBookUrl = process.env.REACT_APP_API + "book/";

function ProductDetail() {
  const [product, setProduct] = useState([]);
  const [readMore, setReadMore] = useState(false);
  const [thumbnail, setThumbnail] = useState(0);
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const productId = parseInt(id);
  window.scrollTo(0,0);
  useEffect(() => {
    fetch(apiBookUrl + productId)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, [productId]); 
  const decreCount = () => {
    if (count >= 2) {
      setCount(count - 1);
    }
  };
  const increCount = () => {
    setCount(count + 1);
  };
  const inputChangeHandler = (e) => {};
  if (product) {
    document.title = product.name;
  }
  return (
    <Wrap>
      <NavMenu />
      {
        <ProductContent>
          <div className="row main-view">
            <div className="col-lg-5 img-container">
              <div className="row">
                <div className="small-img col-md-2">
                  {product.images &&
                    product.images.map((item, index) => (
                      <div key={index}>
                        <img
                          src={"/images/products/" + item}
                          alt=""
                          onClick={() => setThumbnail(index)}
                        />
                      </div>
                    ))}
                </div>
                <div className="big-img col-md-10 col-sm-12">
                  {product.images && (
                    <img
                      src={"/images/products/" + product.images[thumbnail]}
                      alt={product.name}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-7 details">
              <div className="row product-title">
                <h1>{product.name}</h1>
              </div>
              <p>{product.shortDescription}</p>

              <div className="row props-details">
                <div className="col-8">
                  {product.supplier && (
                    <div>
                      Nhà cung cấp: <strong>{product.supplier}</strong>
                    </div>
                  )}
                  <div>
                    Nhà xuất bản:
                    <strong>{product.publisher}</strong>
                  </div>
                  {product.series && (
                    <div>
                      Bộ: <a href="/#">{product.series} </a>
                    </div>
                  )}
                  <div className="rating-container">
                    <div
                      className="rating-star"
                      onClick={() => window.scrollTo(0, 1000)}
                    >
                      {[...Array(5)].map((star, index) => {
                        const ratingValue = index + 1;
                        return (
                          <FaStar
                            size="12"
                            key={index}
                            color={
                              ratingValue <= product.starRating
                                ? "#F7941E"
                                : "#e4e5e9"
                            }
                          />
                        );
                      })}
                      <span className="star-point">
                        ({product.reviewNumbers || 0} đánh giá)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div>
                    Tác giả: <strong>{product.author}</strong>
                  </div>
                  <div>
                    Hình thức bìa: <strong>{product.coverForm}</strong>
                  </div>
                </div>
                <div
                  className="fb-like"
                  data-href="https://developers.facebook.com/docs/plugins/"
                  data-width=""
                  data-layout="standard"
                  data-action="like"
                  data-size="small"
                  data-share="true"
                ></div>
              </div>
              <div className="price-container">
                <span className="price">
                  <NumberFormat
                    value={product.salePrice ? product.salePrice : product.price}
                    displayType="text"
                    thousandSeparator={true}
                    suffix=" đ"
                  />
                </span>
                &nbsp;
                {
                  product.salePrice && <span className="delete-price">
                  <NumberFormat
                    value={product.price}
                    displayType="text"
                    thousandSeparator={true}
                    suffix=" đ"
                  />
                </span>
                }
                {product.salePrice && (
                  <span className="discount-percent">
                    -
                    {Math.floor(100 - (100 * product.salePrice) / product.price)}
                    %
                  </span>
                )}
              </div>

              <div className="quantity">
                <span>Số lượng: </span>
                <div className="add-minus-quantity">
                  <FaMinus onClick={decreCount} color="gray" size="13px" />
                  <input
                    type="text"
                    value={`${count}`}
                    onChange={(e) => inputChangeHandler(e)}
                    name="quantity"
                  />
                  <FaPlus onClick={increCount} color="gray" size="13px" />
                </div>
              </div>
              <div className="shopandcart">
                <div className="add-cart">
                  <a href="/#">
                    <i className="fas fa-cart-plus"></i>&nbsp;Thêm vào giỏ hàng
                  </a>
                </div>
                <div className="shop-now">
                  <a href="/#"> Mua ngay</a>
                </div>
              </div>
            </div>
          </div>
          <div className="product-details">
            <h5>Thông tin sản phẩm</h5>
            <table className="table table-borderless">
              <colgroup>
                <col width="25%"></col>
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row">Mã hàng</th>
                  <td>{product.id}</td>
                </tr>
               
                <tr>
                  <th scope="row">Nhà cung cấp</th>
                  <td>{product.supplier}</td>
                </tr>
                <tr>
                  <th scope="row">Tác giả</th>
                  <td>{product.author}</td>
                </tr>
                <tr>
                  <th scope="row">NXB</th>
                  <td>{product.publisher}</td>
                </tr>
                <tr>
                  <th scope="row">Năm Xuất bản</th>
                  <td>{product.yearPublished}</td>
                </tr>
                <tr>
                  <th scope="row">Trọng lượng (gr)</th>
                  <td>{product.weight}</td>
                </tr>
                <tr>
                  <th scope="row">Kích Thước Bao Bì</th>
                  <td>{product.size} cm</td>
                </tr>
                <tr>
                  <th scope="row">Số trang</th>
                  <td>{product.pageNumbers}</td>
                </tr>
                <tr>
                  <th scope="row">Hình thức</th>
                  <td>{product.coverForm}</td>
                </tr>
                <tr>
                  <th scope="row">Sản phẩm hiển thị trong</th>
                  <td>
                  {product.categoryNames &&
                    product.categoryNames.map((item, index) => (
                      <p key={index}>
                        {item}
                      </p>
                    ))}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Sản phẩm bán chạy nhất</th>
                  <td>Top 100 sản phẩm {product.categoryNames && product.categoryNames[0]} bán chạy của tháng</td>
                </tr>
              </tbody>
            </table>
            <div className="description">
              <h5>Mô tả chi tiết</h5>
              <Collapse in={readMore}>
                <div id="features">
                  <p>{product.fullDescription}</p>
                </div>
              </Collapse>
              <BtnReadMore
                title={readMore ? "Rút gọn" : "Xem thêm"}
                onClick={() => setReadMore(!readMore)}
                aria-controls="features"
                aria-expanded={readMore}
              />
            </div>
          </div>
        </ProductContent>
      }
    </Wrap>
  );
}

export default ProductDetail;

const Wrap = styled.section``;

const ProductContent = styled.div`
  margin: 0 calc(3.5vw + 5px);
  .main-view {
    .fb-like {
      width: 50%;
    }
    padding: 10px;
    //max-height: 500px;
    background-color: white;
    border-radius: 10px;
    margin: 20px 0;
    .img-container {
      .small-img {
        width: 80px;
        padding: 20px 0 0 10px;
        height: auto;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        justify-content: flex-start;

        img {
          max-width: 100%;
          margin: 10px 0;
          &:hover {
            border: 1px solid blue;
            border-radius: 5px;
          }
        }
        @media (max-width: 740px) {
          display: none;
        }
      }
      .big-img {
        max-width: 100%;
        height: auto;
        overflow: hidden;
        padding: 20px;
        img {
          max-width: 100%;
          height: auto;
        }
      }
    }
    .details {
      .product-title h1 {
        padding-top: 20px;
        font-size: 1.5em;

        font-weight: 600;
        color: #333;
        line-height: 1.5em;
        overflow-wrap: break-word;
        padding-bottom: 16px;
      }
      .props-details {
        .rating-container {
          margin: 10px 0;
          .rating-star {
            display: inline-block;
            cursor: pointer;
          }
          .star-point {
            margin-left: 5px;
            color: #f6a500;
            font-size: 14px;
            font-weight: 500;
          }
        }
      }
      .price-container {
        padding: 20px 0;
        .price {
          font-size: 32px;
          line-height: 32px;
          color: #c92127 !important;
          font-family: "Roboto", sans-serif !important;
          font-weight: 700;
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
          font-size: 20px;
        }
      }
      .quantity {
        user-select: none;
        .add-minus-quantity {
          display: inline-block;
          border-radius: 3px;
          border: 1px solid gray;
          padding: 0 10px;
          cursor: pointer;
          input {
            width: 50px;
            padding-left: 15px;
            outline: none;
            border: none;
            font-weight: 500;
          }
        }
      }
      .shopandcart {
        padding: 20px 0;
        max-width: 500px;
        display: flex;
        flex-wrap: nowrap;
        .shop-now,
        .add-cart {
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: center;

          a {
            width: 200px;
            padding: 10px 0;
            user-select: none;
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
            i {
              font-size: 17px;
            }
          }
        }
        .shop-now {
          a {
            color: #fff;
            background-color: #c92127;
          }
        }
      }
    }
  }
  .product-details {
    padding: 10px;
    //max-height: 500px;
    background-color: white;
    border-radius: 10px;
    margin: 20px 0;
    .table {
      border-bottom: 1px solid #c1c1c1;
      th {
        font-weight: normal !important;
        color: #777;
      }
    }
    .description {
    }
    .salient-features {
      a {
        color: #c92127;
      }
    }
  }
`;
