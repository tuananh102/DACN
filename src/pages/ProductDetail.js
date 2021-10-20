import React from "react";
import NumberFormat from "react-number-format";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";

const products = [
  {
    id: 202101,
    name: "Lãnh Đạo Mất Thăng Bằng",
    supplier: "Minh Long",
    publishsingCompany: "NXB Thanh Niên",
    author: "Hitoshi Iwaaki",
    coverForm: "Bìa mềm",
    series: null,
    catid: 1,
    src: [
      "/images/products/product01_01.jpg",
      "/images/products/product01_02.jpg",
      "/images/products/product01_03.jpg",
      "/images/products/product01_04.jpg",
      "/images/products/product01_05.jpg",
    ],
    percentSale: 20,
    price: 36000,
    delPrice: 45000,
    creatAt: null,
  },
];

function ProductDetail() {
  const [product, setProduct] = useState(0);
  const bigImg = (index) => {
    setProduct(index);
  };

  return (
    <Wrap>
      <Header />
      {products.map((item) => {
        return (
          <ProductContent key={item.id}>
            <div className="row main-view">
              <div className="col-lg-5 img-container">
                <div className="big-img">
                  <img src={item.src[product]} alt="" />
                </div>
                <div className="small-img">
                  {item.src.map((itemImg, index) => (
                    <a href="/#" key={index}>
                      <img src={itemImg} alt="" onClick={() => bigImg(index)} />
                    </a>
                  ))}
                </div>
              </div>
              <div className="col-lg-7">
                <div className="row product-title">
                  <h1>{item.name}</h1>
                </div>
                <div className="row">
                  <div className="col">
                    <div>Nhà cung cấp: {item.supplier}</div>
                    <div>
                      Nhà xuất bản: <strong>{item.publishsingCompany}</strong>
                    </div>
                    {item.series && (
                      <div>
                        Bộ: <a href="/#">{item.series} </a>
                      </div>
                    )}
                  </div>
                  <div className="col">
                    <div>
                      Tác giả: <strong>{item.author}</strong>
                    </div>
                    <div>
                      Hình thức bìa: <strong>{item.coverForm}</strong>
                    </div>
                  </div>
                </div>
                <div className="price-container">
                  <span className="price">
                    <NumberFormat
                      value={item.price}
                      displayType="text"
                      thousandSeparator={true}
                      suffix=" đ"
                    />
                  </span>
                  &nbsp;
                  <span className="delete-price">
                    <NumberFormat
                      value={item.delPrice}
                      displayType="text"
                      thousandSeparator={true}
                      suffix=" đ"
                    />
                  </span>
                  <span className="discount-percent">
                    -{Math.floor(100 - (100 * item.price) / item.delPrice)}%
                  </span>
                </div>
                <div className="shopandcart">
                  <div className="add-cart">
                    <a href="/#">
                      <i className="fas fa-cart-plus"></i>&nbsp;Thêm vào giỏ
                      hàng
                    </a>
                  </div>
                  <div className="shop-now">
                    <a href="/#"> Mua ngay</a>
                  </div>
                </div>
              </div>
            </div>
          </ProductContent>
        );
      })}

      <Footer />
    </Wrap>
  );
}

export default ProductDetail;

const Wrap = styled.section``;

const ProductContent = styled.div`
  margin: 0 calc(3.5vw + 5px);
  .main-view {
    padding: 10px;
    //max-height: 500px;
    background-color: white;
    border-radius: 10px;
    margin: 20px 0;
    .img-container {
      .small-img {
        width: 100%;
        height: 90px;
        display: flex;
        cursor: pointer;
        a:hover {
          border: 1px solid #2489f4;
          border-radius: 5px;
        }
        img {
          max-width: 100%;
          max-height: 100%;
          border-radius: inherit;
        }
      }
      .big-img {
        width: 100%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .product-title h1 {
      font-size: 1.7em;
      font-weight: 600;
      color: #333;
      line-height: 1.5em;
      overflow-wrap: break-word;
      padding-bottom: 16px;
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
`;
