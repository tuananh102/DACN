import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import ImgSlider from "../components/Home/ImgSlider";
import Viewers from "../components/Home/Viewers";
import IconMenu from "../components/Home/IconMenu";
import Trend from "../components/Home/Content/Trend";
import Listcategory from "../components/Home/ListCategory";
import CategoryTabList from "../components/Home/Content/CategoryTabList";
import PartnerSlider from "../components/Home/PartnerSlider";


const tabList = [
  {
    id: 1,
    title: "Sách giáo khoa cấp i",
  },
  {
    id: 2,
    title: "Sách giáo khoa cấp ii",
  },
  {
    id: 3,
    title: "Sách giáo khoa cấp iii",
  },
  {
    id: 4,
    title: "An toàn phòng chống dịch",
  },
  {
    id: 5,
    title: "Thiếu nhi",
  },
  {
    id: 6,
    title: "Đồ chơi",
  },
  {
    id: 7,
    title: "Văn học",
  },
  {
    id: 8,
    title: "Kinh tế",
  },
  {
    id: 9,
    title: "Tâm lý - Kỹ năng",
  },
  {
    id: 10,
    title: "Văn phòng phẩm",
  },
];
const catParents = tabList.map((item) => {
  return <CategoryTabList key={item.id} title={item.title} id={item.id} />;
});

function Home() {
  document.title="Nhà sách trực tuyến Fahasa";
  return (
    <ContainerMain>
      <Wrap className="row">
        <Listcategory className="col-lg-3 list-mobile-hidden" />
        <Col className="col-lg-9">
          <ImgSlider />
        </Col>
      </Wrap>
      <Viewers />
      <IconMenu />
      <Trend
        titleName="Xu hướng mua sắm"
        iconTitle="/images/icons/ico_dealhot.png"
      />
      {catParents}
      <PartnerSlider />
    </ContainerMain>
  );
}

export default Home;

const Wrap = styled.div`
  margin: 20px -20px 0px -20px;
  @media screen and (max-width: 992px) {
    .list-mobile-hidden {
      display: none;
    }
  }
`;

const ContainerMain = styled.main`
  //min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  //position: relative;
  overflow-x: hidden;
`;

