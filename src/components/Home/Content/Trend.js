import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";

function Trend(props) {
  return (
    <Wrap>
      <Tabs>
        <Title style={props.iconTitle && { backgroundColor: "#fcddef" }}>
          <img src={props.iconTitle} alt="" />
          {props.titleName}
        </Title>
        <TabList>
          <Tab>Xu hướng theo ngày</Tab>
          <Tab>Sách HOT - Giảm Sốc</Tab>
          <Tab>Bestseller Ngoại Văn</Tab>
        </TabList>

        <TabPanel>
          <ul>
            <li>
              <div className="inner-item">
                <div className="label-sale">
                  <span className="label-sale-value">35%</span>
                </div>
                <div className="img-item">
                  <a href="/#">
                    <img src="/images/products/product01.jpg" alt="" />
                  </a>
                </div>
                <div className="name-item">
                  <h2 className="product-name-seo">
                    <a href="/#">Tái Tạo Tổ Chức (Tái bản 2020)</a>
                  </h2>
                </div>
                <div className="price-product">
                  <div>
                    <span className="price">123.500đ</span>
                    <span className="discount-percent">-10%</span>
                  </div>
                  <span className="delete-price">190.000đ</span>
                </div>
                <div className="rating-container"></div>
              </div>
              <div className="inner-item">
                <div className="label-sale">
                  <span className="label-sale-value">35%</span>
                </div>
                <div className="img-item">
                  <a href="/#">
                    <img src="/images/products/product01.jpg" alt="" />
                  </a>
                </div>
                <div className="name-item">
                  <h2 className="product-name-seo">
                    <a href="/#">Tái Tạo Tổ Chức (Tái bản 2020)</a>
                  </h2>
                </div>
                <div className="price-product">
                  <div>
                    <span className="price">123.500đ</span>
                    <span className="discount-percent">-10%</span>
                  </div>
                  <span className="delete-price">190.000đ</span>
                </div>
                <div className="rating-container"></div>
              </div>
              <div className="inner-item">
                <div className="label-sale">
                  <span className="label-sale-value">35%</span>
                </div>
                <div className="img-item">
                  <a href="/#">
                    <img src="/images/products/product01.jpg" alt="" />
                  </a>
                </div>
                <div className="name-item">
                  <h2 className="product-name-seo">
                    <a href="/#">Tái Tạo Tổ Chức (Tái bản 2020)</a>
                  </h2>
                </div>
                <div className="price-product">
                  <div>
                    <span className="price">123.500đ</span>
                    <span className="discount-percent">-10%</span>
                  </div>
                  <span className="delete-price">190.000đ</span>
                </div>
                <div className="rating-container"></div>
              </div>
              <div className="inner-item">
                <div className="label-sale">
                  <span className="label-sale-value">35%</span>
                </div>
                <div className="img-item">
                  <a href="/#">
                    <img src="/images/products/product01.jpg" alt="" />
                  </a>
                </div>
                <div className="name-item">
                  <h2 className="product-name-seo">
                    <a href="/#">Tái Tạo Tổ Chức (Tái bản 2020)</a>
                  </h2>
                </div>
                <div className="price-product">
                  <div>
                    <span className="price">123.500đ</span>
                    <span className="discount-percent">-10%</span>
                  </div>
                  <span className="delete-price">190.000đ</span>
                </div>
                <div className="rating-container"></div>
              </div>
              <div className="inner-item">
                <div className="label-sale">
                  <span className="label-sale-value">35%</span>
                </div>
                <div className="img-item">
                  <a href="/#">
                    <img src="/images/products/product01.jpg" alt="" />
                  </a>
                </div>
                <div className="name-item">
                  <h2 className="product-name-seo">
                    <a href="/#">Tái Tạo Tổ Chức (Tái bản 2020)</a>
                  </h2>
                </div>
                <div className="price-product">
                  <div>
                    <span className="price">123.500đ</span>
                    <span className="discount-percent">-10%</span>
                  </div>
                  <span className="delete-price">190.000đ</span>
                </div>
                <div className="rating-container"></div>
              </div>
              <div className="inner-item">
                <div className="label-sale">
                  <span className="label-sale-value">35%</span>
                </div>
                <div className="img-item">
                  <a href="/#">
                    <img src="/images/products/product01.jpg" alt="" />
                  </a>
                </div>
                <div className="name-item">
                  <h2 className="product-name-seo">
                    <a href="/#">Tái Tạo Tổ Chức (Tái bản 2020)</a>
                  </h2>
                </div>
                <div className="price-product">
                  <div>
                    <span className="price">123.500đ</span>
                    <span className="discount-percent">-10%</span>
                  </div>
                  <span className="delete-price">190.000đ</span>
                </div>
                <div className="rating-container"></div>
              </div>
              <div className="inner-item">
                <div className="label-sale">
                  <span className="label-sale-value">35%</span>
                </div>
                <div className="img-item">
                  <a href="/#">
                    <img src="/images/products/product01.jpg" alt="" />
                  </a>
                </div>
                <div className="name-item">
                  <h2 className="product-name-seo">
                    <a href="/#">Tái Tạo Tổ Chức (Tái bản 2020)</a>
                  </h2>
                </div>
                <div className="price-product">
                  <div>
                    <span className="price">123.500đ</span>
                    <span className="discount-percent">-10%</span>
                  </div>
                  <span className="delete-price">190.000đ</span>
                </div>
                <div className="rating-container"></div>
              </div>
              <div className="inner-item">
                <div className="label-sale">
                  <span className="label-sale-value">35%</span>
                </div>
                <div className="img-item">
                  <a href="/#">
                    <img src="/images/products/product01.jpg" alt="" />
                  </a>
                </div>
                <div className="name-item">
                  <h2 className="product-name-seo">
                    <a href="/#">Tái Tạo Tổ Chức (Tái bản 2020)</a>
                  </h2>
                </div>
                <div className="price-product">
                  <div>
                    <span className="price">123.500đ</span>
                    <span className="discount-percent">-10%</span>
                  </div>
                  <span className="delete-price">190.000đ</span>
                </div>
                <div className="rating-container"></div>
              </div>
              <div className="inner-item">
                <div className="label-sale">
                  <span className="label-sale-value">35%</span>
                </div>
                <div className="img-item">
                  <a href="/#">
                    <img src="/images/products/product01.jpg" alt="" />
                  </a>
                </div>
                <div className="name-item">
                  <h2 className="product-name-seo">
                    <a href="/#">Tái Tạo Tổ Chức (Tái bản 2020)</a>
                  </h2>
                </div>
                <div className="price-product">
                  <div>
                    <span className="price">123.500đ</span>
                    <span className="discount-percent">-10%</span>
                  </div>
                  <span className="delete-price">190.000đ</span>
                </div>
                <div className="rating-container"></div>
              </div>
              <div className="inner-item">
                <div className="label-sale">
                  <span className="label-sale-value">35%</span>
                </div>
                <div className="img-item">
                  <a href="/#">
                    <img src="/images/products/product01.jpg" alt="" />
                  </a>
                </div>
                <div className="name-item">
                  <h2 className="product-name-seo">
                    <a href="/#">Tái Tạo Tổ Chức (Tái bản 2020)</a>
                  </h2>
                </div>
                <div className="price-product">
                  <div>
                    <span className="price">123.500đ</span>
                    <span className="discount-percent">-10%</span>
                  </div>
                  <span className="delete-price">190.000đ</span>
                </div>
                <div className="rating-container"></div>
              </div>
            </li>
            <div className="read-more-normal">
              <a href="/#">Xem thêm</a>
            </div>
          </ul>
        </TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
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
    border: none;
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
        padding: 0;
        overflow: hidden;
        text-align: center;
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
          a {
            overflow: hidden;
            font-size: 15px;
            text-decoration: none;
            text-align: start;
            padding-left: 10px;
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
