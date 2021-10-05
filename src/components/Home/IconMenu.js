import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

function IconMenu() {
  return (
    <Wrap className="row">
      <div className="col">
        <div>
          <a href="/#">
            <img
              src="/images/icons/ico_flashsale.png"
              alt=""
            />
          </a>
        </div>
        <div className="cms-icon-menu-item-name">Flash Sale</div>
      </div>
      <div className="col ">
        <div>
          <a href="/#">
            <img
              src="/images/icons/ico_PCSC.png"
              alt=""
            />
          </a>
        </div>
        <div className="cms-icon-menu-item-name">Phiên chợ sách cũ</div>
      </div>
      <div className="col">
        <div>
          <a href="/#">
            <img
              src="/images/icons/ico-xuhuong.png"
              alt=""
            />
          </a>
        </div>
        <div className="cms-icon-menu-item-name">Xu hướng</div>
      </div>
      <div className="col">
        <div>
          <a href="/#">
            <img
              src="/images/icons/ico_covid-2.png"
              alt=""
            />
          </a>
        </div>
        <div className="cms-icon-menu-item-name">Heath Care</div>
      </div>
      <div className="col">
        <div>
          <a href="/#">
            <img
              src="/images/icons/ico_vpp_hot.png"
              alt=""
            />
          </a>
        </div>
        <div className="cms-icon-menu-item-name">Văn phòng phẩm</div>
      </div>
      <div className="col">
        <div>
          <a href="/#">
            <img
              src="/images/icons/ico_goiy.png"
              alt=""
            />
          </a>
        </div>
        <div className="cms-icon-menu-item-name">Gợi ý cho bạn</div>
      </div>
      <div className="col">
        <div>
          <a href="/#">
            <img
              src="/images/icons/ico_game_hub.png"
              alt=""
            />
          </a>
        </div>
        <div className="cms-icon-menu-item-name">Fahasa Games</div>
      </div>
      <div className="col">
        <div>
          <a href="/#">
            <img
              src="/images/icons/ico_dochoi.png"
              alt=""
            />
          </a>
        </div>
        <div className="cms-icon-menu-item-name">Đồ chơi</div>
      </div>
      <div className="col">
        <div>
          <a href="/#">
            <img
              src="/images/icons/ico_mgg.png"
              alt=""
            />
          </a>
        </div>
        <div className="cms-icon-menu-item-name">Mã giảm giá</div>
      </div>
      <div className="col">
        <div>
          <a href="/#">
            <img
              src="/images/icons/ico_manga.png"
              alt=""
            />
          </a>
        </div>
        <div className="cms-icon-menu-item-name">Manga-Comic</div>
      </div>
     
    </Wrap>
  );
}

export default IconMenu;

const Wrap = styled.div`
  background-color: #fff;
  text-align: center;
  padding: 15px 4px !important;
  @media only screen and (max-width: 768px){
    display: grid;
    grid-gap: 10px 0;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-template-rows: 1fr 1fr;
  }
  img{
    width: 50px;
  }
  .cms-icon-menu-item-name{
    font-size:13.5px;
  }
`;
