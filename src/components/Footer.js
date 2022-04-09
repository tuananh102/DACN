import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <div className="subscribe-container row">
        <div className="col-12 col-lg-4 label-subscribe">
          <i className="far fa-envelope"></i>
          <span> Đăng ký nhận bản tin</span>
        </div>
        <div className="col-12 col-lg-8">
          <div className="subscribe-content">
            <div className="input-box">
              <input type="text" placeholder="Nhập địa chỉ email của bạn" />
            </div>
            <button type="submit" className="btn-submit">
              Đăng ký
            </button>
          </div>
        </div>
      </div>
      <div className="footer-static">
        <div className="row">
          <div className="left-footer col-md-4">
            <div className="logo-footer">
              <img src="/images/logo.png" alt="" />
            </div>
            <p>Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCM </p>
            <p>Công Ty Cổ Phần Phát Hành Sách TP HCM - FAHASA</p>
            <p>60 - 62 Lê Lợi, Quận 1, TP. HCM, Việt Nam</p>
            <p>
              Fahasa.com nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ
              trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả
              Hệ Thống Fahasa trên toàn quốc.
            </p>
            <a href="/#">
              <img src="/images/logo-bo-cong-thuong-da-thong-bao.png" alt="" />
            </a>
            <div className="icon-social">
              <a
                href="https://facebook.com/tuananh6696"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.instagram.com/hnanuat102/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
              <a
                href="https://twitter.com/TunAnh26860268"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.pinterest.com/trannhutuananh96/?autologin=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-pinterest" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCX6vhJiIhC3OVjeEJ9uChsg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube" aria-hidden="true"></i>
              </a>
            </div>
            <div className="download-platform">
              <a href="/#">
                <img src="/images/chplay.png" alt="" />
              </a>
              <a href="/#">
                <img src="/images/appstore.png" alt="" />
              </a>
            </div>
          </div>
          <div className="right-footer col-md-8">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="right-footer-title">Dịch vụ</div>
                <div className="right-footer-content">
                  <ul>
                    <li>
                      <Link to="/terms-of-use">Điều khoản sử dụng</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Chính sách bảo mật</Link>
                    </li>
                    <li>
                      <a href="/#">Giới thiệu Fahasa</a>
                    </li>
                    <li>
                      <a href="/#">Hệ thống trung tâm - Nhà sách</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="right-footer-title">Hỗ trợ</div>
                <div className="right-footer-content">
                  <ul>
                    <li>
                      <a href="/#">Chính sách đổi - trả - hoàn tiền</a>
                    </li>
                    <li>
                      <a href="/#">Chính sách khách sỉ</a>
                    </li>
                    <li>
                      <a href="/#">Phương thức vận chuyển</a>
                    </li>
                    <li>
                      <a href="/#">Phương thức thanh toán và xuất HĐ</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="right-footer-title">Tài khoản của tôi</div>
                <div className="right-footer-content">
                  <ul>
                    <li>
                      <Link to="/account">Đăng nhập/Tạo mới tài khoản</Link>
                    </li>
                    <li>
                      <a href="/#">Thay đổi địa chỉ khách hàng</a>
                    </li>
                    <li>
                      <a href="/#">Chi tiết tài khoản</a>
                    </li>
                    <li>
                      <a href="/#">Lịch sử mua hàng</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="right-footer-title">Liên hệ</div>
              <div className="col-lg-4 col-md-6">
                <i className="fas fa-phone-alt"></i>
                <a href="tel:+1900636467">
                  <span>&nbsp;1900636467</span>
                </a>
              </div>
              <div className="col-lg-8 col-md-6">
                <i className="fas fa-map-marker-alt"></i>
                <a
                  href="https://g.page/fahasa6062?share"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>&nbsp;60-62 Lê Lợi, Q.1, TP. HCM</span>
                </a>
              </div>
              
            </div>
            <div className="row payment-method">
              <div className="above-item col-lg-12">
                <div><img src="/images/vnpost.png" alt="" /></div>
                <div><img src="/images/ahamove_logo.png" alt=""/></div>
                <div><img src="/images/ghn_logo.png" alt="" /></div>
                <div><img src="/images/snappy_logo.png" alt="" /></div>
              </div>
              <div className="below-item col-lg-12">
                <div>
                  <img src="/images/vnpay_logo.png" alt="" />
                </div>
                <div>
                  <img src="/images/zalopay_logo.png" alt="" />
                </div>
                <div>
                  <img src="/images/momopay_logo.png" alt="" />
                </div>
                <div>
                  <img src="/images/shopeepay_logo.png" alt="" />
                </div>
                <div>
                  <img src="/images/moca_logo.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer-certificate">
          <p>
            Giấy chứng nhận Đăng ký Kinh doanh số **0304132047** do Sở Kế hoạch
            và Đầu tư Thành phố Hồ Chí Minh cấp ngày 28/11/2012.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  margin: 0 calc(3.5vw + 5px);
  background-color: #f0f0f0;
  .subscribe-container {
    border-radius: 10px 10px 0 0;
    padding: 25px;
    background-color: #9fa7ab;
    .label-subscribe {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      font-weight: 500;
      color: white;
      text-transform: uppercase;
      span {
        padding-left: 8px;
      }
    }
    .subscribe-content {
      position: relative;
      width: 100%;
      align-self: center;
      .input-box {
        width: 100%;
        input {
          padding-left: 15px;
          height: 45px;
          width: inherit;
          border-radius: 4px;
          border: none;
          &:focus-visible {
            outline: none;
          }
          &::placeholder {
            font-size: 13px;
            font-weight: 400;
            opacity: 0.6;
          }
        }
      }
      .btn-submit {
        background-color: #f7941e;
        border: none;
        border-radius: 4px;
        height: 40px;
        padding: 0 20px;
        color: white;
        font-weight: bold;
        position: absolute;
        right: 2px;
        top: 2px;
        bottom: 2px;
        transition: all 0.3s;
        &:hover {
          background-color: #cc0000;
        }
      }
    }
  }
  .footer-static {
    background-color: white;
    .left-footer {
      margin: 20px 0;
      padding: 10px;
      border-right: 1px solid #cecece;
      p {
        margin: 0;
        font-size: 13px;
        color: #333;
      }
      p:last-child {
        padding-top: 5px;
      }
      .logo-footer {
        padding: 10px 0;
        img {
          width: 80%;
        }
      }
      a img {
        display: block;
        padding: 10px 0;
        width: 100px;
      }
      .icon-social {
        font-size: 30px;
        display: grid;
        width: 70%;
        grid-template-columns: repeat(5, 1fr);
        a:hover {
          color: #f7941e;
        }
      }
      .download-platform {
        display: grid;
        grid-template-columns: repeat(2, 0.3fr);
        img {
          width: 90%;
        }
      }
    }
    .right-footer {
      padding: 30px 0 0 30px;
      line-height: 35px;
      .right-footer-title {
        text-transform: uppercase;
        font-size: 17px;
        font-weight: 700;
      }
      a {
        color: black;
      }
      a:hover {
        padding-left: 10px;
        color: #ea7696;
        transition: 200ms all ease-out;
      }
      .right-footer-content {
        font-size: 14px;
      }
      .above-item {
        div{
          max-width: 100px;
          display: flex;
          align-self: center;
          img{
            width: 100%;
          }
        }
        display: grid;
        height: 80px;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 25px;
      }
      .below-item {
        div {
          overflow: hidden;
          max-width:100px;
          display: flex;
          align-self: center;
          img {
            width: 100%;
          }
        }
        display: grid;
        height: 100px;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 25px;
      }
    }
    .footer-certificate {
      padding: 10px 0;
      font-size: 13px;
      text-align: center;
      color: #adadad;
    }
  }
`;
