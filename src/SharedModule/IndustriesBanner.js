import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  bannerWrapper: {
    // background: 'linear-gradient(90deg, hsla(200, 69%, 50%, 1) 24%, hsla(216, 62%, 39%, 1) 83%)',S
    //   padding:'2rem',
  },
  ImageWrapper: {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "3rem 3rem 0rem 3rem",
    [theme.breakpoints.only("sm")]: {
      padding: "0rem",
    },
  },
  Image: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
    [theme.breakpoints.only("sm")]: {
      width: "400px",
      height: "400px",
    },
  },
  ContentWraper: {
    marginTop: "2rem",
    padding: "3rem 3rem 0rem 3rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0rem",
      padding: "0rem 1rem 0rem 1rem",
    },
  },
  WorkflowTitle: {
    color: "#000",
    fontSize: "36px",
    lineHeight: "56px",
    fontWeight: "600",
    margin: "0px",
    fontFamily: " 'Ubuntu', sans-serif",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
      lineHeight: "40px",
    },
  },
  WorkflowPara: {
    color: "#000",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "1.2rem",
    fontFamily: "'Lora', serif",
    textAlign: "justify",
  },
  WorkflowsubPara: {
    color: "#1c1c1c",
    fontSize: "17px",
    fontWeight: 400,
    padding: "0px 5px",
    fontFamily: "'Lora', serif",
    fontSize: "14px",
  },
  StartFastText: {
    color: "#3D8ED7",
  },
  Mainwrapper: {
    // marginBottom:'5rem',
  },
}));
const Workflow = ({ IndustriesBanner }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const classes = useStyles();
  return (
    <>
      {IndustriesBanner.map((value) => (
        <>
          <Container maxWidth="xxl" className={classes.bannerWrapper}>
            <div data-aos="fade-up" data-aos-duration="2000">
              <Container maxWidth="lg" className={classes.Mainwrapper}>
                <Grid container>
                  <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className={classes.ImageWrapper}>
                      <img src={value.image} className={classes.Image} />
                    </div>
                  </Grid>
                  <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className={classes.ContentWraper}>
                      <Typography
                        variant="h4"
                        className={classes.WorkflowTitle}
                      >
                        {value.title}
                      </Typography>
                      <p className={classes.WorkflowPara}>{value.para1} </p>
                      <p className={classes.WorkflowPara}> {value.para2}</p>
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </Container>
        </>
      ))}
    </>
  );
};

export default Workflow;
