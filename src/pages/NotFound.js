import { useHistory, Link } from "react-router-dom";
// let history=useHistory();
const NotFound = () => (
  <div style={{ padding: "40px" }}>
    <h2> XIN LỖI, TRANG 404 RỒI :( ... </h2>
    <p>
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
    </p>
    <ul>
      <strong>
        Bạn có thể làm gì? Đừng lo lắng, có nhiều cách để bạn quay lại xem
        website:
      </strong>
      <li>
      {/* <button onClick={() => history.goBack()}>Go Back</button> */}
      </li>
      <li> Sử dụng chức năng tìm kiếm để tìm sản phẩm bạn cần.</li>
      <li>
        Hoặc sử dụng các liên kết sau để quay lại website. <Link to="/">Trang chủ </Link>| <Link to="/account">Tài khoản khách hàng</Link>
      </li>
    </ul>
  </div>
);

export default NotFound
