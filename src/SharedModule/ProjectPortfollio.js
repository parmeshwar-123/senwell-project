import React, { useState,useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import {Link} from 'react-router-dom'
import Aos from 'aos';
import "aos/dist/aos.css";

const useStyle = makeStyles((theme) => ({
    mainWrapper:{
       background:'#000',
       padding:'4rem 0rem',
    },
    header: {
    display: "flex",
    justifyContent: "space-between",
  },
  linkWithIcons: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  PastProjectBlockPara: {
      color:'#b8b8b8',
    //   paddingRight:'2rem',
    // fontFamily: "'Poppins', sans-serif",
    fontFamily: " 'Lora', serif",
      fontSize:'14px', 

    margin: '0 0 30px',
      textAlign:'left',
      lineHeight:'1.6rem',
      letterSpacing:'0.5px',
    [theme.breakpoints.between(380, 600)]: {
      maxWidth: "26rem",
    },
    [theme.breakpoints.between(320, 380)]: {
      maxWidth: "17.5rem",
    },
  },
  PastProjectBlockMainHeading: {
    fontSize: "36px",
    fontWeight: "600",
    lineHeight: "56px",
    color:'#fff',
    fontFamily: "'Poppins', sans-serif",

  },
  PastProjectBlockSubHeading: {
    fontWeight: "600",
    fontSize: "1.75rem",
    color:'#fff',
    paddingBottom:'2rem',
    fontFamily: "'Poppins', sans-serif",

  },
  BottomLinkWithIcons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  viewallLink: {
    color: "#fff",
    textDecoration: "underline",
    marginRight: "1.3rem",
    fontSize:'1rem',
    // fontFamily: "'Poppins', sans-serif",
    fontFamily: " 'Lora', serif",
    fontSize:'14px'
  },
  arrowBlock: {
    display: "flex",
  },
  DownArrowBlock: {
    marginTop: "10px",
    display: "flex",
  },
  slider: {
    display: "flex !important",
    alignItems: "center !important",
    [theme.breakpoints.down("sm")]: {
      display: "flex !important",
      flexDirection: "column-reverse !important",

      alignItems: "center !important",
    },
    [theme.breakpoints.down("xs")]: {
      display: "flex !important",
      flexDirection: "column-reverse !important",
      margin: "0 1rem",
    },
  },
  slider_imgs: {
    [theme.breakpoints.between(320, 380)]: {
      maxWidth: "17.5rem",
    },
    maxWidth: "48vw",
  },
}));

const PastProjects = ({ProjectPortfolio}) => {
  const [sliderRef, setSliderRef] = useState(null);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const classes = useStyle();
  useEffect(() => {
    Aos.init({ duration: 2000 });
}, [])
  return (
    <>
    <Container maxWidth='full' className={classes.mainWrapper} data-aos="fade-up"
                data-aos-duration="2000">
      <Container maxWidth="lg" >
        <div className={classes.header}>
          <h1 className={classes.PastProjectBlockMainHeading}>
            Our past projects
          </h1>
          <div className={classes.linkWithIcons}>
            <Link to="/projects" className={classes.viewallLink}>
              View all
            </Link>
            <span className={classes.arrowBlock}>
              <ArrowBackIcon
                style={{ color: "#3D8ED7", marginRight: "15px" }}
                onClick={sliderRef?.slickPrev}
              />
              <ArrowForwardIcon
                style={{ color: "#3D8ED7" }}
                onClick={sliderRef?.slickNext}
              />
            </span>
          </div>
        </div>
        <Slider ref={setSliderRef} {...settings} arrows={false}>
          {ProjectPortfolio.map((data)=>(<>
              <div className={classes.slider}>
              <div>
                <h3 className={classes.PastProjectBlockSubHeading}>{data.title}</h3>
                <p className={classes.PastProjectBlockPara}>
                 {data.para}
                </p>
                <a href="#" className={classes.viewallLink}>
                  Read more
                </a>
              </div>
              <div>
                <img
                  src={data.image}
                  alt="HuffPost"
                  className={classes.slider_imgs}
                />
              </div>
            </div>
            </>))}
        </Slider>
        <div>
          <div className={classes.BottomLinkWithIcons}>
            <a href="#" className={classes.viewallLink}>
              view all
            </a>
            <span className={classes.DownArrowBlock}>
              <ArrowBackIcon
                style={{ color: "#3D8ED7", marginRight: "15px" }}
                onClick={sliderRef?.slickPrev}
              />
              <ArrowForwardIcon
                style={{ color: "#3D8ED7" }}
                onClick={sliderRef?.slickNext}
              />
            </span>
          </div>
        </div>
      </Container>
      </Container>
    </>
  );
};

export default PastProjects;
