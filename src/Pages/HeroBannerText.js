import React, { useState } from "react";
import { Container, Grid, Typography, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import AutoTyping, { BlinkCursor } from "react-auto-typing";
import { HomepageHeroBanner } from "../images/images";
import banner12 from "../images/Services/Testing/Arospace.jpg";
import banner from "../images/Services/Testing/itConsultant.jpg";
import "./styletest.css";
// import LogoImage from '../../../images/logo.svg';
// import CmmiImage from '../../../images/cmmi.svg';
// import Union from '../../../images/Union.png';

const useStyles = makeStyles((theme) => ({
  HeroBannerWrapper: {
    background: `url(${banner})`,
    margin: "5rem 0 0 0",
    backgroundRepeat: "no-repeat",
    padding: "6rem 2rem 9rem 2rem",
    color: "#fff",
    backgroundSize: "100% 100%",
  },
  HeroBannerTitle: {
    fontSize: "3rem",
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
    fontFamily: "'Ubuntu', sans-serif",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      textAlign: "left",
    },
  },

  HeroBannerTitleCompanyText: {
    color: "#fff",
    padding: "1rem 0rem",
    // fontFamily: "'Ubuntu', sans-serif",
  },
  HireNowButton: {
    padding: "0.8rem 3rem",
    color: "#fff",
    border: "2px solid #fff",
    // background:'transp'
    background: "transparent",
    transition: "all 0.3s ease",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow:
      "inset 2px 2px 2px 0px rgba(255,255,255,.5) 7px 7px 20px 0px rgba(0,0,0,.1),4px 4px 5px 0px rgba(0,0,0,.1)",

    // background: 'linear-gradient(90deg, hsla(200, 69%, 50%, 1) 24%, hsla(216, 62%, 39%, 1) 83%)',
    marginBottom: "2rem",
    marginTop: "2rem",
    fontFamily: "'Manrope', sans-serif",
    "&:hover": {
      background: "#0e2e5e",
      //  border:'2px solid #3D8ED7',
      transition: "all 0.3s ease",
    },
  },
  HomeSubContainerWrapper: {
    background: "#000",
    margin: "-2px",
    paddingBottom: "1rem",
  },
  ImageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0rem 0rem 0rem 5rem",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  Image: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
  },
  HomeSubContainer: {
    display: "flex",
  },
  HomeSubContainerImage: {
    marginRight: "2rem",
  },
  para: {
    fontFamily: "'Manrope', sans-serif",
  },
  wrapper: {
    // background:'#00000096',
    // background: 'linear-gradient(90deg, hsla(200, 69%, 50%, 1) 24%, hsla(216, 62%, 39%, 1) 83%)',
    //  height:'10rem',
    //      width:'100%',
    //      borderRight:'1px solid #fff',
    //     display:'flex',
    //     justifyContent:'center',
    //     alignItems:'center',
    //     textAlign:'center',
  },
  btn15: {
    background: "#b621fe",
    border: "none",
    zIndex: "1",
    "&:after": {
      position: "absolute",
      content: "",
      width: 0,
      height: "100%",
      top: 0,
      right: 0,
      zIndex: -1,
      backgroundColor: "#663dff",
      borderRadius: "5px",
      boxShadow:
        "inset 2px 2px 2px 0px rgba(255,255,255,.5) 7px 7px 20px 0px rgba(0,0,0,.1),4px 4px 5px 0px rgba(0,0,0,.1)",
      transition: "all 0.3s ease",
    },
    "&:hover": {
      color: "#fff",
    },
    "&:hover:after": {
      left: 0,
      width: "100%",
    },
    "&:active": {
      top: "2px",
    },
  },

  custombtn: {
    width: "130px",
    height: "40px",
    color: "#fff",
    borderRadius: "5px",
    padding: "10px 25px",
    fontFamily: "'Lato', sans-serif",
    fontWeight: "500",
    background: "transparent",
    cursor: "pointer",
    transition: "all 0.3s ease",
    position: "relative",
    display: "inline-block",
    boxShadow:
      "inset 2px 2px 2px 0px rgba(255,255,255,.5), 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1)",
    outline: "none",
  },
}));
const HeroBanner = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.HeroBannerWrapper} maxWidth="xxl">
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} sm={6} md={5} lg={5}>
              <Box className={classes.wrapper}>
                <div className={classes.titleWrapper}>
                  <Typography className={classes.HeroBannerTitle}>
                    {" "}
                    IT consulting and Outsourcing Service
                  </Typography>
                  {/* <p>Build up the digital image of your business with the engaging design and functional perfection of our front-end solutions.</p> */}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* <Button className={classNames(classes.custombtn,classes.btn15)}>Read More</Button> */}
                  <Button className={classes.HireNowButton}>Let's Talk</Button>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}></Grid>
          </Grid>
        </Container>
      </Container>
      {/* <Container maxWidth='xxl' className={classes.HomeSubContainerWrapper}>
        <Container maxWidth='lg' >
          <Grid item xs={12} className={classes.HomeSubContainer}>
          <Typography className={classes.HomeSubContainerImage}><img src={Union} alt='' /></Typography>
         <Typography className={classes.HomeSubContainerImage}><img src={LogoImage} alt='' /></Typography>
         <Typography className={classes.HomeSubContainerImage}><img src={CmmiImage} alt='' /></Typography>
         </Grid>
        </Container>
      </Container> */}
    </>
  );
};

export default HeroBanner;
