import React, { useState, useRef, useEffect } from "react";
import { Collapse } from "react-bootstrap";
import NumberFormat from "react-number-format";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import NavMenu from "../features/NavMenu"

const apiUrlGetBook = process.env.REACT_APP_API + "book";
const apiUrlGetCategories = process.env.REACT_APP_API + "category";

function Product() {
  const { id } = useParams();
  const categoryId = parseInt(id);
  document.title = "Danh mục sản phẩm";
  const [initialProducts, setinitialProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryIdTheme, setCategoryIdTheme] = useState(categoryId);
  const [openGenres, setOpenGenres] = useState(false);
  const [openBrands, setOpenBrands] = useState(false);
  const [coverForm, setCoverForm] = useState(false);
  const [viewProducts, setViewProducts] = useState(12);
  const [pageNumber, setPageNumber] = useState(0);
  const refViewProducts = useRef("");
  useEffect(() => {
    fetch(apiUrlGetBook)
      .then((response) => response.json())
      .then((data) => {
        setinitialProducts(data);
      });
      return () => {
        setinitialProducts([]); // This worked for me
      };
  }, []);
  useEffect(() => {
    fetch(apiUrlGetCategories)
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);
  useEffect(() => {
    fetch(apiUrlGetCategories + "/"+ categoryId)
      .then((response) => response.json())
      .then((data) => setProducts(data.books));
      return () => {
        setProducts([]); // This worked for me
      };
  }, [categoryId]);


  const handleProduct = (i) => {
    setProducts(i.books);
    setCategoryIdTheme(i.id);
  };

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
    window.scrollTo(0, 150);
  };

  return (
    <Wrap>
      <NavMenu />
      <div className="product-container row">
        <div className="filter col-lg-3">
          <dl>
            <dt className="title">Nhóm sản phẩm</dt>
          </dl>
          <dl>
            <dt>
              <div
                onClick={() =>{ setProducts(initialProducts);
                setCategoryIdTheme(0)}}
                className={`category_name ${categoryIdTheme===0?"active":""}`}
              >
                All Category
              </div>
            </dt>
            {categories
              .filter((c) => c.parentId == null)
              .slice(0, 9)
              .map((item) => (
                <dd key={item.id}>
                  <div
                    id={item.id}
                    className={`category_name ${item.id === categoryIdTheme ? "active":""}`}
                    onClick={() => {
                      handleProduct(item);
                      setPageNumber(0);
                      window.scrollTo(0, 150);
                    }}
                  >
                    {item.name}
                  </div>
                  <ul className="category_children">
                    {categories
                      .filter((c) => c.parentId === item.id)
                      .map((i) => (
                        <li key={i.id}>
                          <div
                            
                            onClick={() => {
                              handleProduct(i);
                              setPageNumber(0);
                              window.scrollTo(0, 150);
                            }}
                            className={`category_name ${i.id === categoryIdTheme ? "active":""}`}
                          >
                            {i.name}
                          </div>
                        </li>
                      ))}
                  </ul>
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
                  title={item.name}
                >
                  {item.salePrice && (
                    <div className="label-sale">
                      <span className="label-sale-value">
                        {Math.floor(100 - (item.salePrice / item.price) * 100) +
                          "%"}
                      </span>
                    </div>
                  )}

                  <div className="img-item">
                    <Link to={`/products/${item.id}`}>
                      {item.images && (
                        <img
                          src={"/images/products/" + item.images[0]}
                          alt={item.name}
                        />
                      )}
                    </Link>
                  </div>
                  <div className="name-item">
                    <h2 className="product-name-seo">
                      <Link to={`/products/${item.id}`}>{item.name}</Link>
                    </h2>
                  </div>
                  <div className="price-product">
                    <div>
                      <span className="price">
                        <NumberFormat
                          value={item.salePrice || item.price}
                          displayType="text"
                          thousandSeparator={true}
                          suffix=" đ"
                        />
                      </span>
                    </div>
                    <span
                      className="delete-price"
                      style={
                        item.salePrice
                          ? {}
                          : { visibility: "hidden", height: "15px" }
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
                              ratingValue <= item.starRating
                                ? "#F7941E"
                                : "#e4e5e9"
                            }
                          />
                        );
                      })}
                      <span className="star-point">
                        ({item.reviewNumbers || 0})
                      </span>
                    </div>
                  </div>
                  {item.status === 1 ? (
                    <span></span>
                  ) : (
                    <div className="status-container">
                      <div
                        className="status"
                        style={
                          item.status === 0
                            ? { backgroundColor: "#FCDAB0" }
                            : {}
                        }
                      >
                        <span>{item.status === 0 ? "Sắp có hàng" : ""}</span>
                      </div>
                    </div>
                  )}
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
      .category_name {
        cursor: pointer;
        &:hover {
          color: #bf9a61;
        }
      }
      .category_name.active{
        color: #bf9a61;
      }
      .category_children {
        margin-left: 20px;
        font-size: 14px;
        li {
          padding: 2px 0px;
          cursor: pointer;
          &:hover {
            color: #bf9a61;
          }
        }
      }
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
