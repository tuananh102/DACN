import React from "react";
import styled from "styled-components";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import ProductSlider from "./ProductSlider";

const categoryChildData = [
  {
    id: 1,
    name: "Lớp 1",
    parentId: 1,
  },
  {
    id: 2,
    name: "Lớp 2",
    parentId: 1,
  },
  {
    id: 3,
    name: "Lớp 3",
    parentId: 1,
  },
  {
    id: 4,
    name: "Lớp 4",
    parentId: 1,
  },
  {
    id: 5,
    name: "Lớp 5",
    parentId: 1,
  },
  {
    id: 6,
    name: "Lớp 6",
    parentId: 2,
  },
  {
    id: 7,
    name: "Lớp 7",
    parentId: 2,
  },
  {
    id: 8,
    name: "Lớp 8",
    parentId: 2,
  },
  {
    id: 9,
    name: "Lớp 9",
    parentId: 3,
  },
  {
    id: 10,
    name: "Lớp  10",
    parentId: 3,
  },
  {
    id: 11,
    name: "Lớp 11",
    parentId: 3,
  },
  {
    id: 12,
    name: "Lớp 12",
    parentId: 3,
  },
  {
    id: 13,
    name: "Khẩu trang",
    parentId: 4,
  },
  {
    id: 14,
    name: "Nước rửa tay - Xà phòng",
    parentId: 4,
  },

];

function CategoryTabList(props) {
  const listChild = categoryChildData
  .filter((categoryChildData) => props.id === categoryChildData.parentId)
  .map((item) => {
    return <Tab key={item.id}>{item.name}</Tab>;
  });
  const listProduct = categoryChildData
  .filter((categoryChildData) => props.id === categoryChildData.parentId)
  .map(
      (item) => {
        // if ((item.parentId) === (props.id)) {
        return (
          <TabPanel key={item.id}>
            <ProductSlider id={item.id} />
            <div className="read-more">
              <a href="/#">Xem thêm</a>
            </div>
          </TabPanel>
        );
      }
      // }
    );
  return (
    <Wrap key={props.id}>
      <Tabs>
        <Title>{props.title}</Title>
        <TabList>{listChild}</TabList>
        {listChild && listProduct}
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
    z-index: 5!important;
  }
  .slick-prev {
    background: url("/images/fa-angle-left_32_8_8e8c8c_none.png") no-repeat 100%
      100% !important;
    left: -5px;
    z-index: 5!important;
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
  font-weight: 500;
  padding: 10px 15px;
  img {
    padding: 0 15px;
  }
`;
