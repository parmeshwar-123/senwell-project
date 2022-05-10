import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import best_mobile_app_award from "../../images/footer/best_mobile_app_award.jpg";
import clutch_ukraine_award from "../../images/footer/clutch_ukraine_award.jpg";
// import clutch_2020_award from "../../images/footer/clutch-2020-award.png";
import DesignRush_Software_Dev_award from "../../images/footer/DesignRush_Software_Development_award.png";
import DevOpsAwards_2018 from "../../images/footer/DevOpsAwards_2018.jpg";

import EBA_National_Winner_award from "../../images/footer/EBA_National_Winner_award.jpg";
import european_soft_testing_award from "../../images/footer/european_software_testing_awards.png";
import golden_bridge_award from "../../images/footer/golden_bridge_award.jpg";
import IAOP_Global_Award from "../../images/footer/IAOP_Global_Award.jpg";
import ibm_award from "../../images/footer/ibm_award.png";

import mobile_developer_award from "../../images/footer/mobile_developer_award.png";
import nodejs_developers_award from "../../images/footer/nodejs_developers_award.png";
import quality_assurance_award from "../../images/footer/quality_assurance_award.jpg";
import red_herring_award from "../../images/footer/red_herring_award.png";
import The_100_SUB_LISTS from "../../images/footer/The_100_SUB_LISTS.png";

import top_rated_webdesign_award from "../../images/footer/top_rated_webdesign_award.jpg";
import zend_certified_award from "../../images/footer/zend_certified_award.png";

const useStyle = makeStyles((theme) => ({}));

const Home = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,

    autoplaySpeed: 3000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 2500,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 745,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const classes = useStyle();

  return (
    <>
      <Container maxWidth="lg" style={{borderTop:'1px solid #ccc',borderBottom:'1px solid #ccc',padding:'2rem 0rem'}}>
        <Slider {...settings}>
          <div>
            <img
              src={best_mobile_app_award}
              alt=""
              style={{ width: "150px", margin: "auto" }}
            />
          </div>
          <div>
            <img
              src={clutch_ukraine_award}
              alt=""
              style={{ width: "90px", margin: "1.5rem  auto 0 auto" }}
            />
          </div>

          <div>
            <img
              src={DesignRush_Software_Dev_award}
              alt=""
              style={{ width: "55px", margin: "1.5rem  auto 0 auto" }}
            />
          </div>
          <div>
            <img
              src={DevOpsAwards_2018}
              alt=""
              style={{ width: "80px", margin: "2rem  auto 0 auto" }}
            />
          </div>

          <div>
            <img
              src={EBA_National_Winner_award}
              alt=""
              style={{ width: "170px", margin: "3rem  auto 0 auto" }}
            />
          </div>
          <div>
            <img
              src={european_soft_testing_award}
              alt=""
              style={{ width: "70px", margin: "2rem  auto 0 auto" }}
            />
          </div>
          <div>
            <img
              src={golden_bridge_award}
              alt=""
              style={{ width: "70px", margin: "2rem  auto 0 auto" }}
            />
          </div>
          <div>
            <img
              src={IAOP_Global_Award}
              alt=""
              style={{ width: "100px", margin: "3rem  auto 0 auto" }}
            />
          </div>
          <div>
            <img
              src={ibm_award}
              alt=""
              style={{ width: "80px", margin: "2rem  auto 0 auto" }}
            />
          </div>

          <div>
            <img
              src={mobile_developer_award}
              alt=""
              style={{ width: "80px", margin: "2rem  auto 0 auto" }}
            />
          </div>
          <div>
            <img
              src={nodejs_developers_award}
              alt=""
              style={{ width: "90px" ,margin: "2rem  auto 0 auto" }}
            />
          </div>
          <div>
            <img
              src={quality_assurance_award}
              alt=""
              style={{ width: "150px" }}
            />
          </div>
          <div>
            <img
              src={red_herring_award}
              alt=""
              style={{ width: "65px", marginTop: "3rem" }}
            />
          </div>
          <div>
            <img
              src={The_100_SUB_LISTS}
              alt=""
              style={{ width: "100px", marginTop: "3rem" }}
            />
          </div>

          <div>
            <img
              src={top_rated_webdesign_award}
              alt=""
              style={{ width: "97px", marginTop: "2rem" }}
            />
          </div>
          <div>
            <img
              src={zend_certified_award}
              alt=""
              style={{ width: "75px", marginTop: "3rem" }}
            />
          </div>
        </Slider>
      </Container>
    </>
  );
};

export default Home;
