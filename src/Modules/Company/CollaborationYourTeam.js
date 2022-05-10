import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { HeroBannerSubsection } from "../../API/BusinessModelsApi";
const useStyles = makeStyles((theme) => ({
  QualitymainContainer: {
    padding: "0rem 0rem 4rem 0rem",
  },
  QualityfirstsectionTitleWrapper: {
    color: "#000",
    padding: "2rem 2rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0rem 2rem",
    },
  },
  QualityfirstsectionParaWrapper: {
    color: "#1c1c1c",
    lineHeight: "1.5rem",
    padding: "2rem 2rem",
  },
  QualityfirstsectionWrapper: {
    padding: "1rem 0rem",
    borderBottom: "1px solid #fff",
  },
  TextWrapper: {
    color: "#1c1c1c",
    fontWeight: "600",
    fontFamily: " 'Ubuntu', sans-serif",

    [theme.breakpoints.up("md")]: {
      padding: "1rem 3rem",
    },
  },
  QualitysecondsectionWrapper: {
    color: "#1c1c1c",
    paddingRight: "2rem",
  },

  titleText: {
    padding: "1rem 0rem",
    fontWeight: "700",
    fontFamily: "'Poppins', sans-serif",
  },
  QualitysecondsectionParaWrapper: {
    padding: "3rem",
    background: "#fafafa",
    margin: "1rem",
  },
  paraText: {
    color: "#1c1c1c",
    fontWeight: "500",
    lineHeight: "1.5rem",
    fontFamily: "'Lora', serif",
  },
  Paracontainer: {
    padding: "1rem 0rem",
    color: "#000",
    borderBottom: "1px solid #000",
  },
  Paracontainertext: {
    lineHeight: "1.6rem",
    textAlign: "justify",
    fontFamily: "'Lora', serif",
    fontSize: "14px",
  },
  listwrapper: {
    margin: 0,
    padding: "1rem",
  },
  list: {
    color: "#000",
    fontSize: "1rem",
    fontWeight: "500",
    padding: "0.4rem 0rem",
    lineHeight: "1.6rem",
    fontFamily: "'Lora', serif",
    fontSize: "14px",
  },
  mainWrapper: {
    paddingTop: "2rem",
  },
}));
const HeroBanner = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.mainWrapper}>
        <Container className={classes.QualityfirstsectionWrapper} maxWidth="lg">
          <Grid container style={{ borderBottom: "1px solid #ccc" }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className={classes.QualityfirstsectionTitleWrapper}
            >
              <Typography variant="h4" className={classes.TextWrapper}>
                Collaboration on <br />
                Your Terms
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className={classes.QualityfirstsectionParaWrapper}
            >
              <p style={{ fontFamily: "'Poppins', sans-serif" }}>
                We offer three types of convenient, flexible engagement models.
                Tell us your business objectives and project requirements, and
                we will help you pick the best-suited one.
              </p>
            </Grid>
          </Grid>
        </Container>
        <Container className={classes.QualitymainContainer} maxWidth="full">
          <Container
            className={classes.QualitysecondsectionWrapper}
            maxWidth="lg"
          >
            <Grid container>
              {HeroBannerSubsection.map((data) => (
                <>
                  <Grid xs={12} sm={12} md={4} lg={4}>
                    <div className={classes.QualitysecondsectionParaWrapper}>
                      <div
                        style={{
                          borderBottom: "1px solid #5a5a5a",
                          paddingBottom: "1.5rem",
                        }}
                      >
                        <Typography>{data.icon}</Typography>
                        <Typography variant="h6" className={classes.titleText}>
                          {data.title}
                        </Typography>
                        <p className={classes.paraText}>{data.subtitle}</p>
                      </div>
                      <div className={classes.Paracontainer}>
                        <Typography className={classes.Paracontainertext}>
                          {data.para}
                        </Typography>
                      </div>
                      <div>
                        <ul className={classes.listwrapper}>
                          <li className={classes.list}>{data.list1}</li>
                          <li className={classes.list}>{data.list2}</li>
                          <li className={classes.list}>{data.list3}</li>
                          <li className={classes.list}>{data.list4}</li>
                        </ul>
                      </div>
                    </div>
                  </Grid>
                </>
              ))}
            </Grid>
          </Container>
        </Container>
      </div>
    </>
  );
};

export default HeroBanner;
