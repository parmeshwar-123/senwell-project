import React, { useEffect } from "react";
import Slider from "react-slick";
import { Container } from "@material-ui/core";
import Tech from "../images/Services/Testing/tech.jpg";
import Tech1 from "../images/Services/Testing/tech1.jpg";
import Tech2 from "../images/Services/Testing/wtc1.jpg";
import SliderText from "../Modules/SliderText";
// import Tech4 from '../images/Services/Testing/wtc.jpg'
import { makeStyles } from "@material-ui/core";

import Aos from "aos";
import "aos/dist/aos.css";
import "./Styles.css";
import { CallMissedSharp } from "@material-ui/icons";
const useStyle = makeStyles({
  root: {
    "&:slick-prev:before, .slick-next:before": {
      fontSize: "62px",
    },
  },
});
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        right: "70px",
      }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        left: "50px",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}
const SliderDemo = () => {
  const classes = useStyle();
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    //autoplay: true,
    speed: 3000,
    autoplaySpeed: 7000,

    //   cssEase: "linear"
  };

  return (
    <div>
      <Slider {...settings} className={classes.root}>
        <div className="showcase">
          <img src={Tech} style={{ width: "100vw" }} />
          <div class="overlay">
            <SliderText />
          </div>
        </div>

        <div className="showcase">
          <img src={Tech2} style={{ width: "100vw" }} />
          <div class="overlay"></div>
        </div>
      </Slider>
    </div>
  );
};
export default SliderDemo;
