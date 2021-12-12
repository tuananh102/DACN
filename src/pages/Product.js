import React, { useState, useRef, useEffect } from "react";
import { Collapse } from "react-bootstrap";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Slug from "../features/Slug";
import { FaStar } from "react-icons/fa";
import ReactPaginate from "react-paginate";

var apiUrl = "https://localhost:7030/api/book";

const tabs = [
  [
    "sachtrongnuoc",
    "Sách trong nước",
    [
      {
        id: 1,
        title: "Văn học",
        list: [
          "Tiểu thuyết",
          "Truyện ngắn - Tản văn",
          "Light Novel",
          "Ngôn tình",
        ],
      },
      {
        id: 2,
        title: "Kinh tế",
        list: [
          "Nhân vật - Bài học Kinh doanh",
          "Quản trị - Lãnh đạo",
          "Marketing - Bán hàng",
          "Phân tích Kinh tế",
        ],
      },
      {
        id: 3,
        title: "Tâm lý - Kỹ năng sống",
        list: [
          "Kỹ năng sống",
          "Rèn luyện nhân cách",
          "Tâm lý",
          "Sách cho tuổi mới lớn",
        ],
      },
      {
        id: 4,
        title: "Nuôi dạy con",
        list: [
          "Cẩm nang làm cha mẹ",
          "Phương pháp giáo dục trẻ các nước",
          "Phát triển trí tuệ cho trẻ",
          "Phát triển kỹ năng cho trẻ",
        ],
      },
      {
        id: 5,
        title: "Sách thiếu nhi",
        list: [
          "Manga - Comic",
          "Kiến thức Bách khoa",
          "Sách tranh Kỹ năng sống cho trẻ",
          "Vừa học - Vừa chơi với trẻ",
        ],
      },
      {
        id: 6,
        title: "Tiểu sử - hồi ký",
        list: [
          "Câu chuyện cuộc đời",
          "Chính trị",
          "Kinh tế",
          "Nghệ thuật - Giải trí",
        ],
      },
      {
        id: 7,
        title: "Giáo khoa - Tham khảo",
        list: [
          "Sách Giáo khoa",
          "Sách tham khảo",
          "Luyện thi ĐH, CĐ",
          "Mẫu giáo",
        ],
      },
      {
        id: 8,
        title: "Học Ngoại ngữ",
        list: ["Tiếng Anh", "Tiếng Trung", "Tiếng Nhật", "Tiếng Hàn"],
      },
    ],
  ],
  [
    "foreignbooks",
    "FOREIGN BOOKS",
    [
      {
        id: 1,
        title: "Fiction",
        list: ["Contempotary", "Romance", "Fantasy", "Classics"],
      },
      {
        id: 2,
        title: "Business & Management",
        list: ["Business & Management", "Economics", "Finance & Accounting"],
      },
      {
        id: 3,
        title: "Personal development",
        list: [
          "Popular Psychology",
          "Advice On Careers & Achieving Success",
          "Personal Fiance",
        ],
      },
      {
        id: 4,
        title: "Children's Books",
        list: [
          "Picture & Activity Books",
          "Fiction (for Kids & Teen",
          "Education",
          "Non-Fiction",
        ],
      },
      {
        id: 5,
        title: "Dictionaries & Languages",
        list: [
          "ELT: Learning Material & Coursework",
          "ELT: English for special purposes",
          "Dictionaries",
        ],
      },
      {
        id: 6,
        title: "Other Languages",
        list: ["Japanese Books", "German Books", "French Books"],
      },
      {
        id: 7,
        title: "Other categories",
        list: [
          "Biography",
          "Society & Social Sciences",
          "Science & Geography",
          "Food & Drink",
        ],
      },
    ],
  ],
  [
    "vpp-dchs",
    "VPP - Dụng cụ học sinh",
    [
      {
        id: 1,
        title: "Bút - Viết",
        list: [
          "Bút bi - Ruột bút bi",
          "Bút gel - Bút nước",
          "Bút mực - Bút máy",
          "Bút dạ quang",
          "Bút chì - ruột bút chì",
        ],
      },
      {
        id: 2,
        title: "Dụng cụ học sinh",
        list: [
          "Gôm - Tẩy",
          "Gôm bút chì",
          "Thước",
          "Bóp viết - Hộp bút",
          "Bộ dụng cụ học tập",
        ],
      },
      {
        id: 3,
        title: "Dụng cụ văn phòng",
        list: [
          "Bìa - File hồ sơ",
          "Kẹp giấy - Kẹp bướm",
          "Đồ bấm kim - Kim bấm - Gỡ kim",
          "Cắm bút - Bảng tên",
        ],
      },
      {
        id: 4,
        title: "Dụng cụ vẽ",
        list: ["Bút vẽ", "Màu vẽ", "Khay - Cọ vẽ", "Tập vẽ - Giấy vẽ"],
      },
      {
        id: 5,
        title: "Sản phẩm khác",
        list: [
          "Dao rọc giấy - Kéo",
          "Băng keo - Cắt băng keo",
          "Bút xóa nước - Xóa kéo",
          "Hồ dán",
        ],
      },
      {
        id: 6,
        title: "Sản phẩm điện tử",
        list: ["Máy tính bỏ túi"],
      },
    ],
  ],
  [
    "dochoi",
    "Đồ chơi",
    [
      {
        id: 1,
        title: "Đồ chơi nổi bật",
        list: [
          "Xếp hình - Lắp ghép",
          "Đồ chơi giáo dục",
          "Đồ chơi điều khiển",
          "Board Game",
        ],
      },
      {
        id: 2,
        title: "Phương tiện các loại",
        list: ["Ô tô", "Máy bay", "Tàu hỏa", "Tàu thủy", "Phương tiện khác"],
      },
      {
        id: 3,
        title: "Mô hình các loại",
        list: [
          "Mô hình giấy",
          "Mô hình gỗ",
          "Mô hình nhân vật",
          "Mô hình động vật",
        ],
      },
      {
        id: 4,
        title: "Đồ chơi theo phim",
        list: [
          "My little Pony",
          "Paw Patrol",
          "Super Wings",
          "Chiến thần vô cực - NADO",
        ],
      },
      {
        id: 5,
        title: "Đồ chơi khác",
        list: [
          "Bột nặn - Cát nặn",
          "Búp bê",
          "Thú bông",
          "Hướng nghiệp nhập vai",
        ],
      },
    ],
  ],
  [
    "lamdep-suckhoe",
    "Làm đẹp - Sức khỏe",
    [
      {
        id: 1,
        title: "Làm đẹp - Sức khỏe",
        list: [
          "Khẩu Trang Các Loại",
          "Nước Rửa Tay - Xà Phòng",
          "Băng Keo Cá Nhân",
          "Khăn Giấy - Giấy Ướt",
          "Chăm Sóc Cá Nhân Khác",
          "Sản Phẩm Làm Đẹp",
        ],
      },
    ],
  ],
  [
    "hanhtrangdentruong",
    "Hành trang đến trường",
    [
      {
        id: 1,
        title: "Sách giáo khoa",
        list: [
          "Lớp 1",
          "Lớp 2",
          "Lớp 3",
          "Lớp 4",
          "Lớp 5",
          "Lớp 6",
          "Lớp 7",
          "Lớp 8",
          "Lớp 9",
          "Lớp 10",
          "Lớp 11",
          "Lớp 12",
        ],
      },
      {
        id: 2,
        title: "Sách tham khảo",
        list: [
          "Mẫu giáo",
          "Lớp 1",
          "Lớp 2",
          "Lớp 3",
          "Lớp 4",
          "Lớp 5",
          "Lớp 6",
          "Lớp 7",
          "Lớp 8",
          "Lớp 9",
          "Lớp 10",
          "Lớp 11",
          "Lớp 12",
        ],
      },
      {
        id: 3,
        title: "Luyện thi THPT-QG-Lớp 12",
        list: [
          "Luyện Thi Môn Toán",
          "Luyện Thi Môn Ngữ Văn",
          "Luyện Thi Môn Tiếng Anh ",
          "Luyện Thi Môn Vật Lý",
          "Luyện Thi Môn Hóa Học",
          "Luyện Thi Môn Sinh Học",
          "Luyện Thi Môn Địa Lý",
          "Luyện Thi Môn Lịch Sử",
        ],
      },
      {
        id: 4,
        title: "Đồ nghề đến trường",
        list: [
          "Cặp , Ba Lô",
          "Máy Tính",
          "Bút Các Loại",
          "Bóp Viết - Hộp Bút",
          "Tập Vở ",
          "Bao Tập - Bao Sách",
          "Mực",
          "Gôm - Tẩy",
          "Gọt Bút Chì",
          "Compa",
          "Bảng Viết - Bông Lau Bảng",
          "Phấn - Hộp Đựng Phấn",
        ],
      },
    ],
  ],
  [
    "vpp-dchs-th",
    "VPP - DCHS theo thương hiệu",
    [
      {
        id: 1,
        title: "VPP - DCHS theo thương hiệu",
        list: [
          "Thiên Long",
          "Thương Hiệu Hàn Quốc - Morning Glory",
          "Thương Hiệu Hàn Quốc - Kyobo",
          "Thương Hiệu Nhật - Kinokuniya",
          "Thương Hiệu Nhật - Artline",
          "Thương Hiệu Nhật - Marvy",
          "Thương Hiệu Tây Ban Nha - Milan",
          "Thương Hiệu Tây Ban Nha - Apli",
          "Thương Hiệu Anh Quốc - Helix",
          "Thương Hiệu Đức - Faber-Castell",
          "Thương Hiệu Đức - Stabilo",
          "Thương Hiệu Pháp - Maped",
          "Thương Hiệu Indonesia - Bantex",
        ],
      },
    ],
  ],
  [
    "dochoi-th",
    "Đồ chơi theo thương hiệu",
    [
      {
        id: 1,
        title: "",
        list: [
          "Lego",
          "tiNiToy",
          "Lắp Ráp DUKA",
          "Lắp Ráp Sluban",
          "Lắp Ráp LaQ",
          "Mô Hình Gỗ DIY - Robotime",
          "Đồ Chơi VBCare",
          "Hot Wheels",
          "Play-Doh",
          "Barbie",
        ],
      },
    ],
  ],
  [
    "bhol-ln",
    "Bách hóa online - Lưu niệm",
    [
      {
        id: 1,
        title: "Đồ dùng cá nhân",
        list: [
          "Túi - Ví Thời Trang",
          "Đồng Hồ",
          "Phụ Kiện Du Lịch",
          "Phụ Kiện Tóc",
        ],
      },
      {
        id: 2,
        title: "Đồ điện gia dụng",
        list: ["Đèn Bàn", "Đèn Ngủ ", "Đèn Pin", "Pin & Dụng Cụ Sạc Pin"],
      },
      {
        id: 3,
        title: "Nhà cửa - đời sống",
        list: [
          "Ly, Cốc, Bình Nước",
          " Hộp Đựng Đồ Cá Nhân",
          " Trang Trí Nhà Cửa",
          " Sửa Chữa Nhà Cửa",
        ],
      },
      {
        id: 4,
        title: "Lưu niệm",
        list: [
          "Móc Khóa",
          "Gương - Lược",
          "Khung Hình",
          "Tượng",
          "Quà Tặng Trang Trí Khác",
        ],
      },
      {
        id: 5,
        title: "Sản phẩm khác",
        list: ["Thực Phẩm", "Thiết Bị Số - Phụ Kiện Số", "Quạt Các Loại"],
      },
    ],
  ],
];

function Product() {
  document.title = "Danh mục sản phẩm";
  const [products, setProducts] = useState([]);
  const [openGenres, setOpenGenres] = useState(false);
  const [openBrands, setOpenBrands] = useState(false);
  const [coverForm, setCoverForm] = useState(false);
  const [viewProducts, setViewProducts] = useState(12);
  const [pageNumber, setPageNumber] = useState(0);
  const refViewProducts = useRef("");

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const pageView = products.slice(
    pageNumber * viewProducts,
    pageNumber * viewProducts + viewProducts
  );
  const pageCount = Math.ceil(products.length / viewProducts);
  const handleView = () => {
    setViewProducts(refViewProducts.current.value);
  };
  const pageChange = ({ selected }) => {
    setPageNumber(selected);
    window.scrollTo(0, 100);
  };
  return (
    <Wrap>
      <div className="product-container row">
        <div className="filter col-lg-3">
          <dl>
            <dt className="title">Nhóm sản phẩm</dt>
          </dl>
          <dl>
            <dt className="title">
              <Link to="/">All Category</Link>
            </dt>
            {tabs.map((item) => (
              <dd key={item[1]}>
                <Link to={`/${Slug(item[1])}`}>{item[1]}</Link>
              </dd>
            ))}
          </dl>
          <hr />
          <dl className="cost">
            <dt className="title">Giá</dt>
            <dd>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  0đ - 150.000đ
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckunder300"
                />
                <label className="form-check-label" htmlFor="flexCheckunder300">
                  150.000đ - 300.000đ
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckunder500"
                />
                <label className="form-check-label" htmlFor="flexCheckunder500">
                  300.000đ - 500.000đ
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckunder700"
                />
                <label className="form-check-label" htmlFor="flexCheckunder700">
                  500.000đ - 700.000đ
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckover700"
                />
                <label className="form-check-label" htmlFor="flexCheckover700">
                  Trên 700.000đ
                </label>
              </div>
            </dd>
          </dl>
          <hr />
          <dl className="genres">
            <dt className="title">Thể loại</dt>
            <dd>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="Shounen"
                />
                <label className="form-check-label" htmlFor="Shounen">
                  Shounen
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="Comedy"
                />
                <label className="form-check-label" htmlFor="Comedy">
                  Comedy
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="Adventure"
                />
                <label className="form-check-label" htmlFor="Adventure">
                  Adventure
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="Drama"
                />
                <label className="form-check-label" htmlFor="Drama">
                  Drama
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="Action"
                />
                <label className="form-check-label" htmlFor="Action">
                  Action
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="School Life"
                />
                <label className="form-check-label" htmlFor="School Life">
                  School Life
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="Fantasy"
                />
                <label className="form-check-label" htmlFor="Fantasy">
                  Fantasy
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="Slice of Life"
                />
                <label className="form-check-label" htmlFor="Slice of Life">
                  Slice of Life
                </label>
              </div>
              {/* Start Collapse Genres */}
              <Collapse in={openGenres}>
                <div id="genres">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Romance"
                    />
                    <label className="form-check-label" htmlFor="Romance ">
                      Romance
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Sci Fi"
                    />
                    <label className="form-check-label" htmlFor="Sci Fi">
                      Sci Fi
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Supernatural"
                    />
                    <label className="form-check-label" htmlFor="Supernatural">
                      Supernatural
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Mystery"
                    />
                    <label className="form-check-label" htmlFor="Mystery">
                      Mystery
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Seinen"
                    />
                    <label className="form-check-label" htmlFor="Seinen">
                      Seinen
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Elemental Powers"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="Elemental Powers"
                    >
                      Elemental Powers
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Historical"
                    />
                    <label className="form-check-label" htmlFor="Historical">
                      Historical
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Non-Human Protagonists"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="Non-Human Protagonists"
                    >
                      Non-Human Protagonists
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Monsters"
                    />
                    <label className="form-check-label" htmlFor="Monsters">
                      Monsters
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Sport"
                    />
                    <label className="form-check-label" htmlFor="Sport">
                      Sport
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Harem"
                    />
                    <label className="form-check-label" htmlFor="Harem">
                      Harem
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Josei"
                    />
                    <label className="form-check-label" htmlFor="Josei">
                      Josei
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Gender Bender"
                    />
                    <label className="form-check-label" htmlFor="Gender Bender">
                      Gender Bender
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Ecchi"
                    />
                    <label className="form-check-label" htmlFor="Ecchi">
                      Ecchi
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Mature"
                    />
                    <label className="form-check-label" htmlFor="Mature">
                      Mature
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Horror"
                    />
                    <label className="form-check-label" htmlFor="Horror">
                      Horror
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Tragedy"
                    />
                    <label className="form-check-label" htmlFor="Tragedy">
                      Tragedy
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Shounen-Ai"
                    />
                    <label className="form-check-label" htmlFor="Shounen-Ai">
                      Shounen-Ai
                    </label>
                  </div>
                </div>
              </Collapse>
            </dd>

            <div
              onClick={() => setOpenGenres(!openGenres)}
              aria-controls="genres"
              aria-expanded={openGenres}
              className="read-more"
            >
              {openGenres ? "Rút gọn" : "Xem thêm"}
              &nbsp;
              <img
                src={`./images/${
                  openGenres ? "ico_rutgon_cam.png" : "ico_morong.png"
                }`}
                alt=""
              />
            </div>
          </dl>
          <hr />
          <dl className="brand">
            <dt className="title">Thương hiệu</dt>
            <dd>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="OEM"
                />
                <label className="form-check-label" htmlFor="OEM">
                  OEM
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="thien-long"
                />
                <label className="form-check-label" htmlFor="thien-long">
                  Thiên Long
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="Marvy"
                />
                <label className="form-check-label" htmlFor="Marvy">
                  Marvy
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="Stacom"
                />
                <label className="form-check-label" htmlFor="Stacom">
                  Stacom
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="Campus"
                />
                <label className="form-check-label" htmlFor="Campus">
                  Campus
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="Morning Glory"
                />
                <label className="form-check-label" htmlFor="Morning Glory">
                  Morning Glory
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="Fantasy"
                />
                <label className="form-check-label" htmlFor="Fantasy">
                  Fantasy
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="Slice of Life"
                />
                <label className="form-check-label" htmlFor="Slice of Life">
                  Slice of Life
                </label>
              </div>
              {/* Start Collapse Brands */}
              <Collapse in={openBrands}>
                <div id="example-collapse-text">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Romance"
                    />
                    <label className="form-check-label" htmlFor="Romance ">
                      Romance
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Sci Fi"
                    />
                    <label className="form-check-label" htmlFor="Sci Fi">
                      Sci Fi
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Supernatural"
                    />
                    <label className="form-check-label" htmlFor="Supernatural">
                      Supernatural
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Mystery"
                    />
                    <label className="form-check-label" htmlFor="Mystery">
                      Mystery
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Seinen"
                    />
                    <label className="form-check-label" htmlFor="Seinen">
                      Seinen
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Elemental Powers"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="Elemental Powers"
                    >
                      Elemental Powers
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Historical"
                    />
                    <label className="form-check-label" htmlFor="Historical">
                      Historical
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Non-Human Protagonists"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="Non-Human Protagonists"
                    >
                      Non-Human Protagonists
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Monsters"
                    />
                    <label className="form-check-label" htmlFor="Monsters">
                      Monsters
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Sport"
                    />
                    <label className="form-check-label" htmlFor="Sport">
                      Sport
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Harem"
                    />
                    <label className="form-check-label" htmlFor="Harem">
                      Harem
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Josei"
                    />
                    <label className="form-check-label" htmlFor="Josei">
                      Josei
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Gender Bender"
                    />
                    <label className="form-check-label" htmlFor="Gender Bender">
                      Gender Bender
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Ecchi"
                    />
                    <label className="form-check-label" htmlFor="Ecchi">
                      Ecchi
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Mature"
                    />
                    <label className="form-check-label" htmlFor="Mature">
                      Mature
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Horror"
                    />
                    <label className="form-check-label" htmlFor="Horror">
                      Horror
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Tragedy"
                    />
                    <label className="form-check-label" htmlFor="Tragedy">
                      Tragedy
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Shounen-Ai"
                    />
                    <label className="form-check-label" htmlFor="Shounen-Ai">
                      Shounen-Ai
                    </label>
                  </div>
                </div>
              </Collapse>
            </dd>

            <div
              onClick={() => setOpenBrands(!openBrands)}
              aria-controls="example-collapse-text"
              aria-expanded={openBrands}
              className="read-more"
            >
              {openBrands ? "Rút gọn" : "Xem thêm"}
              &nbsp;
              <img
                src={`./images/${
                  openBrands ? "ico_rutgon_cam.png" : "ico_morong.png"
                }`}
                alt=""
              />
            </div>
          </dl>
          <hr />
          <dl className="supplier">
            <dt className="title">Nhà cung cấp</dt>
            <dd>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="nxb-kim-dong"
                />
                <label className="form-check-label" htmlFor="nxb-kim-dong">
                  NXB Kim Đồng
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="nxb-tre"
                />
                <label className="form-check-label" htmlFor="nxb-tre">
                  NXB Trẻ
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="nxb-tong-hop-tphcm"
                />
                <label
                  className="form-check-label"
                  htmlFor="nxb-tong-hop-tphcm"
                >
                  NXB Tổng hợp TP.HCM
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="nxb-thanh-nien"
                />
                <label className="form-check-label" htmlFor="nxb-thanh-nien">
                  NXB Thanh niên
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="nxb-lao-dong"
                />
                <label className="form-check-label" htmlFor="nxb-lao-dong">
                  NXB Lao động
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="Alpha Books"
                />
                <label className="form-check-label" htmlFor="Alpha Books">
                  Alpha Books
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="nxb-giao-duc"
                />
                <label className="form-check-label" htmlFor="nxb-giao-duc">
                  NXB Giáo dục
                </label>
              </div>
            </dd>
          </dl>
          <hr />
          <dl className="origin">
            <dt className="title">Nơi gia công - sản xuất</dt>
            <dd>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="china"
                />
                <label className="form-check-label" htmlFor="china">
                  Trung Quốc
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="vietnam"
                />
                <label className="form-check-label" htmlFor="vietnam">
                  Việt Nam
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="japan"
                />
                <label className="form-check-label" htmlFor="japan">
                  Nhật Bản
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="korea"
                />
                <label className="form-check-label" htmlFor="korea">
                  Hàn Quốc
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="spain"
                />
                <label className="form-check-label" htmlFor="spain">
                  Tây Ban Nha
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="italy"
                />
                <label className="form-check-label" htmlFor="italy">
                  Ý
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="germainy"
                />
                <label className="form-check-label" htmlFor="germainy">
                  Đức
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="france"
                />
                <label className="form-check-label" htmlFor="france">
                  Pháp
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="Czech Republic"
                />
                <label className="form-check-label" htmlFor="Czech Republic">
                  Cộng Hòa Séc
                </label>
              </div>
            </dd>
          </dl>
          <hr />
          <dl className="level">
            <dt className="title">Cấp học</dt>
            <dd>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="Preschool"
                />
                <label className="form-check-label" htmlFor="Preschool">
                  Mầm non
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="level1"
                />
                <label className="form-check-label" htmlFor="level1">
                  Cấp 1
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="level2"
                />
                <label className="form-check-label" htmlFor="level2">
                  Cấp 2
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="level3"
                />
                <label className="form-check-label" htmlFor="level3">
                  Cấp 3
                </label>
              </div>
            </dd>
          </dl>
          <hr />
          <dl className="language">
            <dt className="title">Ngôn ngữ</dt>
            <dd>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="vietnamese"
                />
                <label className="form-check-label" htmlFor="vietnamese">
                  Tiếng Việt
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="chinese"
                />
                <label className="form-check-label" htmlFor="chinese">
                  Tiếng Trung
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="japanese"
                />
                <label className="form-check-label" htmlFor="japanese">
                  Tiếng Nhật Bản
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="korean"
                />
                <label className="form-check-label" htmlFor="korean">
                  Tiếng Hàn Quốc
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="spanish"
                />
                <label className="form-check-label" htmlFor="spanish">
                  Tiếng Tây Ban Nha
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="italian"
                />
                <label className="form-check-label" htmlFor="italian">
                  Tiếng Ý
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="german"
                />
                <label className="form-check-label" htmlFor="german">
                  Tiếng Đức
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="french"
                />
                <label className="form-check-label" htmlFor="french">
                  Tiếng Pháp
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="Czech"
                />
                <label className="form-check-label" htmlFor="Czech">
                  Tiếng Cộng Hòa Séc
                </label>
              </div>
            </dd>
          </dl>
          <hr />
          <dl className="cover-form">
            <dt className="title">Hình thức</dt>
            <dd>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="soft"
                />
                <label className="form-check-label" htmlFor="soft">
                  Bìa mềm
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="hard"
                />
                <label className="form-check-label" htmlFor="hard">
                  Bìa cứng
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="Board Book"
                />
                <label className="form-check-label" htmlFor="Board Book">
                  Board Book
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="box-set"
                />
                <label className="form-check-label" htmlFor="box-set">
                  Bộ Hộp
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="Mixed media products"
                />
                <label
                  className="form-check-label"
                  htmlFor="Mixed media products"
                >
                  Mixed media products
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="bookattachdisk"
                />
                <label className="form-check-label" htmlFor="bookattachdisk">
                  Sách kèm đĩa
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="puzzle"
                />
                <label className="form-check-label" htmlFor="puzzle">
                  Xếp hình
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="Cards"
                />
                <label className="form-check-label" htmlFor="Cards">
                  Cards
                </label>
              </div>
              {/* Start Collapse Genres */}
              <Collapse in={coverForm}>
                <div id="genres">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="CD/DVD"
                    />
                    <label className="form-check-label" htmlFor="CD/DVD ">
                      CD/DVD
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Postcard"
                    />
                    <label className="form-check-label" htmlFor="Postcard">
                      Postcard
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Sách không thấm nước"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="Sách không thấm nước"
                    >
                      Sách không thấm nước
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Sách vải"
                    />
                    <label className="form-check-label" htmlFor="Sách vải">
                      Sách vải
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Poster"
                    />
                    <label className="form-check-label" htmlFor="Poster">
                      Poster
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Bìa Da"
                    />
                    <label className="form-check-label" htmlFor="Bìa Da">
                      Bìa Da
                    </label>
                  </div>
                </div>
              </Collapse>
            </dd>

            <div
              onClick={() => setCoverForm(!coverForm)}
              aria-controls="genres"
              aria-expanded={coverForm}
              className="read-more"
            >
              {coverForm ? "Rút gọn" : "Xem thêm"}
              &nbsp;
              <img
                src={`./images/${
                  coverForm ? "ico_rutgon_cam.png" : "ico_morong.png"
                }`}
                alt=""
              />
            </div>
          </dl>
          <hr />
        </div>
        <div className="content col-lg-9">
          <div className="container-content">
            <div className="sortby">
              <span>Sắp xếp theo:</span>
              <select className="form-select sortby-inner">
                <option defaultValue>Bán chạy tuần</option>
                <option value="1">Bán chạy tháng</option>
                <option value="2">Bán chạy năm</option>
                <option value="3">Nổi bật tuần</option>
                <option value="4">Nổi bật tháng</option>
                <option value="5">Nổi bật năm</option>
                <option value="6">Chiết khấu</option>
                <option value="7">Giá bán</option>
                <option value="8">Mới nhất</option>
              </select>
              <select
                className="form-select view-products"
                id="select02"
                ref={refViewProducts}
                onChange={handleView}
              >
                <option value="12" defaultValue>
                  12 sản phẩm
                </option>
                <option value="24">24 sản phẩm</option>
                <option value="48">48 sản phẩm</option>
              </select>
            </div>
            <div className="products row">
              {pageView.map((item) => (
                <div
                  key={item.id}
                  className="inner-item col-lg-3 col-md-4 col-6"
                >
                  {item.price && (
                    <div className="label-sale">
                      <span className="label-sale-value">
                        {Math.floor(100 - (item.salePrice / item.price) * 100) +
                          "%"}
                      </span>
                    </div>
                  )}

                  <div className="img-item">
                    <Link to={`/products/${item.id}`}>
                      <img src={"/images/products/"+ item.img} alt={item.name} />
                    </Link>
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
                    </div>
                    <span
                      className="delete-price"
                      style={
                        item.price
                          ? {}
                          : { visibility: "visible", height: "15px" }
                      }
                    >
                      <NumberFormat
                        value={item.price}
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
                              ratingValue <= item.starRating ? "#F7941E" : "#e4e5e9"
                            }
                          />
                        );
                      })}
                      <span className="star-point">({item.countRating})</span>
                    </div>
                  </div>
                  <div className="status-container">
                    <div
                      className="status"
                      style={
                        item.status === 0 ? { backgroundColor: "#FCDAB0" } : {}
                      }
                    >
                      <span>{item.status === 0 ? "Sắp có hàng" : ""}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="list-pages">
              <ReactPaginate
                previousLabel={<img src="/images/left_orange.png" alt="" />}
                nextLabel={<img src="/images/right_orange.png" alt="" />}
                pageCount={pageCount}
                onPageChange={pageChange}
                containerClassName="paginate"
                activeClassName="active"
                previousClassName="prev"
                nextClassName="next"
              />
            </div>
          </div>
        </div>
      </div>
    </Wrap>
  );
}

export default Product;
const Wrap = styled.section`
  background-color: #f0f0f0;
  .product-container {
    padding: 30px calc(3.5vw + 5px);
    display: flex;
    justify-content: space-around;
    .filter {
      padding: 10px;
      background-color: #fff;
      box-shadow: 0px 0px 2px 1px rgb(0 0 0 / 10%);
      .form-check {
        padding-left: 32px;
        font-size: 14px;
        .form-check-input:checked {
          background-color: #f7941e;
          border-color: #f7941e;
        }
        input:focus {
          box-shadow: none;
          border-color: #bf9a61;
        }
        label {
          user-select: none;
          cursor: pointer;
          padding-top: 1px;
          &:hover {
            color: #bf9a61;
          }
        }
      }
      .read-more {
        text-align: center;
        cursor: pointer;
        color: #f7941e;
        font-size: 14px;
        font-weight: 600;
      }
      a {
        font-size: 14px;
        &:hover {
          color: #bf9a61;
        }
      }
      .title {
        text-transform: uppercase;
        font-weight: 500;
      }
      .cost {
        span {
          padding-left: 10px;
          font-size: 14px;
        }
      }
    }
    .content {
      justify-content: flex-end;
      display: flex;
      .container-content {
        background-color: #fff;
        width: 98%;
        box-shadow: 0px 0px 2px 1px rgb(0 0 0 / 10%);
        .sortby {
          margin: 0 10px;
          display: flex;
          padding: 20px;
          align-items: center;
          border-bottom: 1px solid #f0f0f0;
          .form-select {
            width: 160px;
            margin: 0 10px;
            &:focus {
              box-shadow: none;
            }
          }
        }
        .products {
          justify-content: center;
          .inner-item {
            max-width: 220px !important;
            position: relative;
            padding: 10px;
            overflow: hidden;
            text-align: center;
            &:hover {
              box-shadow: 0px 0px 2px 2px rgb(0 0 0 / 10%);
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
              text-align: start;
              padding-left: 10px;
              .price {
                line-height: 1.65rem;
                font-size: 1rem !important;
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
              padding-left: 10px;
              .star-point {
                font-size: 14px;
                color: #f7941e;
                user-select: none;
              }
            }
            .status-container {
              .status {
                height: 22px;
                margin-left: 10px;
                width: 50%;
                font-size: 15px;
                font-weight: 500;
                color: #f7941e;
                user-select: none;
              }
            }
          }
        }
        .list-pages {
          margin-top: 20px;
          .paginate {
            display: flex;
            justify-content: center;
            li {
              text-align: center;
              margin: 2px;
              cursor: pointer;
              border-radius: 4px;
              a {
                display: flex;
                width: 40px;
                height: 40px;
                align-items: center;
                justify-content: center;
              }
              &:hover {
                background: #fcdab0;
              }
            }
            li.active {
              background: #c92127;
              a {
                color: white;
              }
            }
            .disabled {
              display: none;
            }
          }
        }
      }
    }
  }
`;
