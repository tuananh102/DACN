import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home.js";
import Product from "./pages/Product";
import NavMenu from "./features/NavMenu";

function App() {
  return (
    <Router>
      <Container fluid className="main">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Product />
          </Route>
          <Route exact path="/nav">
            <NavMenu />
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
  document.title="404 - Không tìm thấy trang";
  return(
  <div style={{ padding: "calc(3.5vw + 5px)" }}>
    <h2> XIN LỖI, TRANG 404 RỒI :( ... </h2>
    <div>
      <ul>
        <strong>
          Không thể tìm thấy trang bạn yêu cầu, có thể do những lý do sau:
        </strong>
        <li>
          Nếu bạn nhập trực tiếp địa chỉ trang web, vui lòng kiểm tra lại chính
          tả.
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
);}
