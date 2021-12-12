import React from "react";
import styled from "styled-components";
import { Tabs, Tab } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
function SignIn() {
  return (
    <Wrap>
      <div className="sign-in-container">
        <Tabs defaultActiveKey="signIn" id="uncontrolled-tab-example">
          <Tab eventKey="signIn" title="Đăng nhập">
            <div className="sign-in-form-container">
              <form action="/account" className="sign-in-form">
                <label htmlFor="userName">Số điện thoại/Email</label>
                <input
                  type="text"
                  placeholder="Nhập số điện thoại hoặc email.."
                />
                <label htmlFor="password">Mật khẩu</label>
                <input type="password" placeholder="Nhập mật khẩu" />
                <div className="forget-password">
                  <span>Quên mật khẩu?</span>
                </div>
                <div className="submit-btn">
                  <button type="submit">Đăng nhập</button>
                </div>
                <div className="signup-fb">
                  <button>
                    <FaFacebook className="ico-fb" />
                    Đăng nhập với Facebook
                  </button>
                </div>
              </form>
            </div>
          </Tab>
          <Tab eventKey="signUp" title="Đăng ký">
            <div className="sign-up-form-container">
              <form action="/account-signup" className="sign-in-form">
                <label htmlFor="userName">Số điện thoại</label>
                <input type="text" placeholder="Nhập số điện thoại" />
                <label htmlFor="otp">Mã xác nhận OTP</label>
                <input type="text" placeholder="6 ký tự" />
                <label htmlFor="password">Mật khẩu</label>
                <input type="password" placeholder="Nhập mật khẩu" />

                <div className="submit-btn">
                  <button type="submit">Đăng ký</button>
                </div>
              </form>
            </div>
          </Tab>
        </Tabs>
        <div className="license">
          <p>
            Bằng việc đăng ký, bạn đã đồng ý với Fahasa.com về{" "}
            <Link to="/terms-of-use">Điều khoản dịch vụ</Link> &{" "}
            <Link to="/privacy-policy">Chính sách bảo mật</Link>
          </p>
        </div>
      </div>
    </Wrap>
  );
}

export default SignIn;

const Wrap = styled.div`
  width: 100%;
  .sign-in-container {
    background-color: white;
    margin: 5px 3.9%;
    padding: 30px;
    .nav-tabs {
      justify-content: center;
      outline: none;
      border: none;
      button {
        border: none;
        width: 150px;
        margin: 0 10px;
        @media (max-width: 442px) {
          width: 110px;
          margin: 0;
        }
        color: #333;
        &:hover {
          border-bottom: 2px solid #c92127;
          color: #c92127;
        }
      }
      .active {
        border-bottom: 2px solid #c92127;
        color: #c92127;
      }
    }
    .sign-in-form-container,
    .sign-up-form-container {
      display: flex;
      justify-content: center;
      .sign-in-form {
        color: #555555;
        font-size: 15px;
        margin: 30px 0;
        display: flex;
        flex-direction: column;
        label {
          align-items: flex-start;
          margin-top: 20px;
        }
        input {
          width: 350px;
          padding: 10px 15px;
          margin: 8px 0;
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 3px;
          box-sizing: border-box;
          &:focus-visible {
            outline: none;
            border: 1px solid #f7841e;
          }
        }
        .forget-password {
          text-align: end;
          color: #c92127;
        }
        .submit-btn,
        .signup-fb {
          text-align: center;
          margin: 10px 0;
          button {
            width: 250px;
            border: none;
            border-radius: 5px;
            padding: 7px;
            color: white;
            font-weight: 600;
          }
        }
        .submit-btn {
          button {
            background-color: #c92127;
          }
        }
        .signup-fb {
          display: flex;
          justify-content: center;
          button {
            background-color: #4000ff;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            .ico-fb {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
  .license {
    display: flex;
    justify-content: center;
    text-align: center;
    p {
      display: inline-block;
      width: 300px;
      font-size: 13px;
      a{
        color: blue;
      }
    }
  }
`;
