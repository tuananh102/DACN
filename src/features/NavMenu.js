import { useEffect, useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Slug from "./Slug";

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

function NavMenu() {
  const [listContent, setListContent] = useState([]);
  const [listCategory, setListCategory] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const list = tabs.filter((tab) => tab[0] === listCategory);
    setListContent(list);
  }, [listCategory]);
  let displayContent = open ? "list-content-container row" : "none";
  return (
    <Wrap>
      <div className="nav-container row" onMouseLeave={()=>setOpen(false)}>
        <div className="col-lg-3 list-category">
          <Button
            onMouseEnter={() => setOpen(true)}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
          >
            Danh Mục Sản Phẩm
          </Button>
          <Collapse in={open}>
            <div id="example-collapse-text">
              <ul>
                {tabs.map((tab, index) => (
                  <li key={index}>
                    <Link
                      to={`/${tab[0]}`}
                      onMouseEnter={() => setListCategory(tab[0])}
                    >
                      {tab[1]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Collapse>
        </div>
        <div className="col-lg-9 icon-nav list-content">
          <div className="icon-nav-container">
            <div className="flash-sale">
              <Link to="flashsale">
                <img src="/images/icons/ico_flashsale.png" alt="" />
                Flash Sale
              </Link>
            </div>
            <div className="mgg">
              <Link to="mgg">
                <img src="/images/icons/ico_mgg.png" alt="" />
                Mã giảm giá
              </Link>
            </div>
            <div className="trend">
              <Link to="xuhuong">
                <img src="/images/icons/ico-xuhuong.png" alt="" />
                Xu hướng
              </Link>
            </div>
            <div className="bxh">
              <Link to="bookaward">
                <img src="/images/icons/ico_bookaward.png" alt="" />
                Bảng xếp hạng
              </Link>
            </div>
            <div className="member">
              <Link to="dacquyen">
                <img src="/images/icons/ico_dacquyen.png" alt="" />
                Thành viên
              </Link>
            </div>
            <div className="recommend">
              <Link to="goiy">
                <img src="/images/icons/ico_goiy.png" alt="" />
                Gợi ý cho bạn
              </Link>
            </div>
          </div>
          <div className={displayContent}>
            {listContent.map((listParent) => (
              <div key={listParent} className="row">
                {listParent[2].map((item) => (
                  <div
                    key={item.id}
                    className={
                      listParent[0] === "dochoi" ||
                      listParent[0] === "bhol-ln" ||
                      listParent[0] === "vpp-dchs"
                        ? "col-4"
                        : "col-3"
                    }
                  >
                    <ul>
                      <span className="title">{item.title}</span>
                      {item.list.map((listChild) => (
                        <li key={listChild}>
                          <a href="/#">{listChild}</a>
                        </li>
                      ))}
                      <a href={`/${Slug(item.title)}`} className="read-more">
                        Xem thêm...
                      </a>
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrap>
  );
}

export default NavMenu;
const Wrap = styled.section`
  background-color: white;
  padding: 0 calc(3.5vw + 5px);
  .nav-container {
    .list-category {
      button {
        font-family: "Roboto", sans-serif !important;
        border: none;
        background-color: #f7941e;
        width: 100%;
        font-weight: 500;
        color: white;
        font-size: 18px;
        &:focus {
          box-shadow: none;
        }
      }
      li {
        display: block;
        width: 100%;
        &:hover {
          background-color: #fcdab0;
        }
        a {
          font-size: 15px;
          text-decoration: none;
          color: #444;
          display: block;
          padding: 10px 0 10px 10px;
          position: relative;
          &:after {
            content: url("./images/right_menu.png");
            position: absolute;
            color: #555;
            right: 10px;
            font-weight: 400;
          }
        }
      }
    }
    .icon-nav {
      display: flex;
      justify-content: space-between;
      .icon-nav-container {
        width: 100%;
        height: 40px;
        display: flex;
        div {
          min-width: 100px;
          width: 150px;
          height: 38px;
          padding: 5px 0;
          align-items: center;
          a {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: auto;
            font-size: 15px;
            position: relative;
            &:after {
              content: "";
              height: 2px;
              background-color: #f7941e;
              position: absolute;
              left: 40px;
              right: 2px;
              bottom: 0;
              transform: scaleX(0);
              transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94)  ;
            }
            &:hover {
              &:after {
                transform: scaleX(1);
              }
            }
          }
          img {
            width: 20%;
            height: 50%;
          }
        }
        @media (max-width: 1200px) {
          .member,
          .trend,
          .flash-sale,
          .mgg {
            width: 130px;
          }
        }
      }
    }
    .list-content {
      display: flex;
      flex-direction: column;
      .list-content-container {
        box-shadow: 1px 0 4px 0 rgb(0 0 0 / 20%);
        width: 100%;
        height: 100%;
        padding: 20px;
        .title {
          display: block;
          padding-bottom: 10px;
          text-transform: uppercase;
          font-weight: 500;
          font-size: 15px;
        }
        a {
          font-size: 13.5px;
          &:hover {
            color: #f7941e;
          }
        }
        .read-more {
          padding-top: 10px;
          font-size: 12px;
          color: #f7941e;
        }
      }
      .none {
        display: none;
      }
    }
  }
  @media (max-width: 992px) {
    display: none;
  }
`;
