import React, { useState } from "react";
import { Container, Grid, Typography, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AutoTyping, { BlinkCursor } from "react-auto-typing";
import { HomepageHeroBanner } from "../../images/images";
// import banner from '../../images/Services/Testing/Banner.jpg'

// import LogoImage from '../../../images/logo.svg';
// import CmmiImage from '../../../images/cmmi.svg';
// import Union from '../../../images/Union.png';

const useStyles = makeStyles((theme) => ({
  HeroBannerWrapper: {
    background:
      "linear-gradient(90deg, hsla(200, 69%, 50%, 1) 24%, hsla(216, 62%, 39%, 1) 83%)",
    // background:`url(${banner})`,
    margin: "5rem 0 0 0",
    paddingTop: "6rem",
    color: "#fff",
    // backgroundSize:'contain'
  },
  HeroBannerTitle: {
    fontSize: "3.3rem",
    color: "#fff",
    fontWeight: "700",
    fontFamily: "'Ubuntu', sans-serif",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  },
  titleWrapper: {
    height: "13rem",

    [theme.breakpoints.down("md")]: {
      height: "24rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "20rem",
    },
  },
  HeroBannerTitleCompanyText: {
    color: "#fff",
    padding: "1rem 0rem",
    // fontFamily: "'Ubuntu', sans-serif",
  },
  HireNowButton: {
    padding: "0.7rem 3rem",
    color: "#fff",
    border: "2px solid #3D8ED7",
    marginBottom: "2rem",
    background: "#0e2e5e",
    borderRadius: "25rem",
    marginTop: "2rem",
    // fontFamily: "'Manrope', sans-serif",
    fontFamily: " 'Lora', serif",
    "&:hover": {
      background: "#0e2e5e",
      border: "2px solid #3D8ED7",
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
    // fontFamily: "'Manrope', sans-serif",
    fontFamily: " 'Lora', serif",
    fontSize: "14px",
  },
}));
const HeroBanner = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.HeroBannerWrapper} maxWidth="xxl">
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Box>
                <div className={classes.titleWrapper}>
                  <Typography className={classes.HeroBannerTitle}>
                    Software Development Outsourcing Company
                  </Typography>{" "}
                  <Typography>
                    <AutoTyping
                      active
                      textRef=""
                      writeSpeed={150}
                      // deleteSpeed={150}
                      delayToWrite={1000}
                      delayToDelete={10000}
                      className={classes.HeroBannerTitle}
                    />
                  </Typography>
                  {/* <BlinkCursor
      active // <boolean>
      blinkSpeed={500}
      className={classes.HeroBannerTitle}// <number>
    /> */}
                </div>
                <Typography variant="h6" className={classes.para} style={{}}>
                  We believe the beauty of an application is not only in the
                  user interface but also in the code, performance and
                  maintainability. We participate in the entire software
                  development life cycle of solutions.
                </Typography>
                <Button className={classes.HireNowButton}>Hire Now </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <div className={classes.ImageWrapper}>
                <img src={HomepageHeroBanner} className={classes.Image} />
              </div>
            </Grid>
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
