import React from "react";
import NumberFormat from "react-number-format";
import styled from "styled-components";
import { useState } from "react";
import { useParams } from "react-router";
import { FaStar, FaMinus, FaPlus } from "react-icons/fa";
import BtnReadMore from "../features/BtnReadMore";
import { Collapse } from "react-bootstrap";
const products = [
  {
    id: 1,
    name: "I-Learn Smart Start 1 - Sách Giáo Khoa Tiếng Anh Lớp 1",
    supplier: "Công ty TNHH Education Solutions Việt Nam",
    publishsingCompany: "NXB Đại Học Sư Phạm",
    author: "Nhiều Tác Giả",
    coverForm: "Bìa mềm",
    series: null,
    catid: 1,
    src: [
      "/images/products/1.jpg",
      "/images/products/1.1.jpg",
      "/images/products/1.2.jpg",
      "/images/products/1.3.jpg",
      "/images/products/1.4.jpg",
      "/images/products/1.5.jpg",
    ],
    price: 78000,
    delPrice: null,
    creatAt: null,
    star: 4,
    countRating: 112,
    yearPublished: 2020,
    weight: 190,
    size: [28, 20, 0.5],
    pageNumbers: 71,
    description: [
      "Bộ SGK Tiếng Anh i-Learn Smart Start là bộ giáo trình Tiếng Anh tiểu học 5 cấp độ (lớp 1-lớp 5), được thiết kế chuyên biệt dành riêng cho lớp học Việt Nam.",
      "Bộ sách được phối hợp biên soạn bởi các tác giả quốc tế, các giảng viên uy tín và hàng trăm giáo viên Tiếng Anh đang giảng dạy bộ giáo trình này tại Việt Nam. i-Learn Smart Start chính là sự kết hợp nhuần nhuyễn giữa kinh nghiệm quốc tế và nhu cầu giảng dạy thực tế của Việt Nam, đáp ứng đầy đủ khung chương trình và các tiêu chí đánh giá của Bộ Giáo Dục và Đào Tạo.",
    ],
    salientFetures: [
      "Bám sát khung chương trình giảng dạy Tiếng Anh của Bộ Giáo dục & Đào tạo",
      "Nội dung phong phú và hiện đại, mở rộng các yếu tố văn hóa, giá trị đạo đức",
      "Cấu trúc bài học rõ ràng, nhất quán: giúp học sinh dễ theo dõi; giáo viên chuẩn bị bài giảng nhanh chóng và hiệu quả",
      "Liên thông 12 cấp độ từ Tiểu học lên Trung học với bộ giáo trình i-Learn Smart World",
      "Tài liệu hấp dẫn với các bài hát vui nhộn, hình ảnh sinh động, trò chơi lôi cuốn phù hợp với lứa tuổi học sinh",
    ],
  },
  {
    id: 2,
    name: "Lãnh đạo mất thăng bằng",
    supplier: "Công ty TNHH Education Solutions Việt Nam",
    publishsingCompany: "NXB Đại Học Sư Phạm",
    author: "Nhiều Tác Giả",
    coverForm: "Bìa mềm",
    series: null,
    catid: 1,
    src: [
      "/images/products/1.jpg",
      "/images/products/1.1.jpg",
      "/images/products/1.2.jpg",
      "/images/products/1.3.jpg",
      "/images/products/1.4.jpg",
      "/images/products/1.5.jpg",
    ],
    price: 78000,
    delPrice: null,
    creatAt: null,
    star: 4,
    countRating: 112,
    yearPublished: 2020,
    weight: 190,
    size: [28, 20, 0.5],
    pageNumbers: 71,
    description: [
      "Bộ SGK Tiếng Anh i-Learn Smart Start là bộ giáo trình Tiếng Anh tiểu học 5 cấp độ (lớp 1-lớp 5), được thiết kế chuyên biệt dành riêng cho lớp học Việt Nam.",
      "Bộ sách được phối hợp biên soạn bởi các tác giả quốc tế, các giảng viên uy tín và hàng trăm giáo viên Tiếng Anh đang giảng dạy bộ giáo trình này tại Việt Nam. i-Learn Smart Start chính là sự kết hợp nhuần nhuyễn giữa kinh nghiệm quốc tế và nhu cầu giảng dạy thực tế của Việt Nam, đáp ứng đầy đủ khung chương trình và các tiêu chí đánh giá của Bộ Giáo Dục và Đào Tạo.",
    ],
    salientFetures: [
      "Bám sát khung chương trình giảng dạy Tiếng Anh của Bộ Giáo dục & Đào tạo",
      "Nội dung phong phú và hiện đại, mở rộng các yếu tố văn hóa, giá trị đạo đức",
      "Cấu trúc bài học rõ ràng, nhất quán: giúp học sinh dễ theo dõi; giáo viên chuẩn bị bài giảng nhanh chóng và hiệu quả",
      "Liên thông 12 cấp độ từ Tiểu học lên Trung học với bộ giáo trình i-Learn Smart World",
      "Tài liệu hấp dẫn với các bài hát vui nhộn, hình ảnh sinh động, trò chơi lôi cuốn phù hợp với lứa tuổi học sinh",
    ],
  },
];

function ProductDetail() {
  const [readMore, setReadMore] = useState(false);
  const [product, setProduct] = useState(0);
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const productId = parseInt(id);
  const bigImg = (index) => {
    setProduct(index);
  };
  const decreCount = () => {
    if (count >= 2) {
      setCount(count - 1);
    }
  };
  const increCount = () => {
    setCount(count + 1);
  };
  const inputChangeHandler = (e) => {};
  return (
    <Wrap>
      {products
        .filter((proId) => proId.id === productId)
        .map((item) => {
          document.title=item.name;
          return(
          <ProductContent key={item.id}>
            <div className="row main-view">
              <div className="col-lg-5 img-container">
                <div className="big-img">
                  <img src={item.src[product]} alt="" />
                </div>
                <div className="small-img">
                  {item.src.map((itemImg, index) => (
                    <div key={index}>
                      <img src={itemImg} alt="" onClick={() => bigImg(index)} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-7 details">
                <div className="row product-title">
                  <h1>{item.name}</h1>
                </div>
                <div className="row props-details">
                  <div className="col-8">
                    {item.supplier && (
                      <div>
                        Nhà cung cấp: <strong>{item.supplier}</strong>
                      </div>
                    )}
                    <div>
                      Nhà xuất bản:
                      <strong>{item.publishsingCompany}</strong>
                    </div>
                    {item.series && (
                      <div>
                        Bộ: <a href="/#">{item.series} </a>
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
                                ratingValue <= item.star ? "#F7941E" : "#e4e5e9"
                              }
                            />
                          );
                        })}
                        <span className="star-point">
                          ({item.countRating} đánh giá)
                        </span>
                      </div>
                    </div>
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
                  {item.delPrice && (
                    <span className="discount-percent">
                      -{Math.floor(100 - (100 * item.price) / item.delPrice)}%
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
            <div className="product-details">
              <h5>Thông tin sản phẩm</h5>
              <table className="table table-borderless">
                <colgroup>
                  <col width="25%"></col>
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">Mã hàng</th>
                    <td>{item.id}</td>
                  </tr>
                  <tr>
                    <th scope="row">Cấp độ/Lớp</th>
                    <td>Lớp 1</td>
                  </tr>
                  <tr>
                    <th scope="row">Cấp học</th>
                    <td>Cấp 1</td>
                  </tr>
                  <tr>
                    <th scope="row">Nhà cung cấp</th>
                    <td>{item.supplier}</td>
                  </tr>
                  <tr>
                    <th scope="row">Tác giả</th>
                    <td>{item.author}</td>
                  </tr>
                  <tr>
                    <th scope="row">NXB</th>
                    <td>{item.publishsingCompany}</td>
                  </tr>
                  <tr>
                    <th scope="row">Năm Xuất bản</th>
                    <td>{item.yearPublished}</td>
                  </tr>
                  <tr>
                    <th scope="row">Trọng lượng (gr)</th>
                    <td>{item.weight}</td>
                  </tr>
                  <tr>
                    <th scope="row">Kích Thước Bao Bì</th>
                    <td>
                      {item.size && item.size[0] +
                        " x " +
                        item.size[1] +
                        " x " +
                        item.size[2]}
                      cm
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Số trang</th>
                    <td>{item.pageNumbers}</td>
                  </tr>
                  <tr>
                    <th scope="row">Hình thức</th>
                    <td>{item.coverForm}</td>
                  </tr>
                  <tr>
                    <th scope="row">Sản phẩm hiển thị trong</th>
                    <td>{item.catid}</td>
                  </tr>
                  <tr>
                    <th scope="row">Sản phẩm bán chạy nhất</th>
                    <td>Top 100 sản phẩm Giáo Khoa Lớp 1 bán chạy của tháng</td>
                  </tr>
                </tbody>
              </table>
              <div className="description">
                <h5>Mô tả chi tiết</h5>
                {item.description.map((descript) => (
                  <p key={descript}>{descript}</p>
                ))}
              </div>
              <div className="salient-features">
                <h5>Các điểm nổi bật</h5>
                <Collapse in={readMore}>
                  <div id="features">
                    {item.salientFetures.map((salient) => (
                      <p key={salient}>{salient}</p>
                    ))}
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
        )})}
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
        margin: 20px 0;
        width: 100%;
        height: 90px;
        display: flex;
        cursor: pointer;
        justify-content: space-around;
        div:hover {
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
        max-width: 100%;
        height: auto;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .details {
      .product-title h1 {
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
