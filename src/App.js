import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home.js";
import Product from "./pages/Product";
import NavMenu from "./features/NavMenu";
import ProductDetail from "./pages/ProductDetail";
import SignIn from "./pages/SignIn";
import TermOfUse from "./pages/TermOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const apiUrlGetCategories = process.env.REACT_APP_API + "category";
function App() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(apiUrlGetCategories)
      .then((res) => res.json())
      .then((data) => setCategories(data));
    return () => {
      setCategories([]);
    };
  }, []);
  return (
    <Router>
      <Container fluid className="main">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home categories={categories} />
          </Route>
          <Route exact path="/all-category">
            <NavMenu />
            <Product />
          </Route>
          <Route path="/products/:id" children={<ProductDetail />}></Route>
          <Route path="/all-category/:id" children={<Product />}></Route>
          <Route path="/account">
            <SignIn />
          </Route>
          <Route path="/terms-of-use">
            <NavMenu />
            <TermOfUse />
          </Route>
          <Route path="/privacy-policy">
            <NavMenu />
            <PrivacyPolicy />
          </Route>
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;

const NotFound = () => {
  document.title = "404 - Không tìm thấy trang";
  return (
    <div style={{ padding: "calc(3.5vw + 5px)" }}>
      <h2> XIN LỖI, TRANG 404 RỒI :( ... </h2>
      <div>
        <ul>
          <strong>
            Không thể tìm thấy trang bạn yêu cầu, có thể do những lý do sau:
          </strong>
          <li>
            Nếu bạn nhập trực tiếp địa chỉ trang web, vui lòng kiểm tra lại
            chính tả.
          </li>
          <li>
            Nếu bạn click vào một liên kết, thì có thể liên kết đó đã lỗi thời.
          </li>
        </ul>
      </div>
      <ul>
        <strong>
          Bạn có thể làm gì? Đừng lo lắng, có nhiều cách để bạn quay lại xem
          website:
        </strong>
        <li>Quay lại trang trước đó.</li>
        <li> Sử dụng chức năng tìm kiếm để tìm sản phẩm bạn cần.</li>
        <li>
          Hoặc sử dụng các liên kết sau để quay lại website.{" "}
          <Link to="/">Trang chủ </Link>|{" "}
          <Link to="/account">Tài khoản khách hàng</Link>
        </li>
      </ul>
    </div>
  );
};
