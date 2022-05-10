import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles((theme) => ({
    MainWrapper:{
padding:'4rem 0rem'
    },
    Image:{
     display:'flex',
     justifyContent:'space-around',
     alignteItems: 'flex-end',
    },
    Title:{
        paddingBottom:'4rem',
        margin:'0px',
    },
    ImageWrapper:{
        background:'#fafafa',
    }

}));

const ClientList = ({OurClients}) => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 2500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
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
   
    <Container maxWidth='full' className={classes.ImageWrapper}>
      <Container maxWidth="lg" className={classes.MainWrapper}>
          <h1 className={classes.Title}>Some of our clients</h1>
        <Slider {...settings}>
        {OurClients.map((val)=>
        <div>
            <img src={val.Image} alt="OurClients" />
         </div>
          )}
         
        </Slider>
      </Container>
      </Container>
     
    </>
  );
};

export default ClientList;
