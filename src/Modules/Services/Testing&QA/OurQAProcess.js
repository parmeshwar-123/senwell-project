import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import { WorkflowImage } from "../../../images/images";
import { makeStyles } from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import QAprocessfinish1 from "../../../../src/images/Services/QAprocessfinish1.jpg";

const useStyles = makeStyles((theme) => ({
  ImageWrapper: {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "3rem 3rem 0rem 3rem",
  },
  Image: {
    width: "80%",
    height: "auto",
    objectFit: "contain",
  },
  ContentWraper: {
    marginTop: "2rem",
    padding: "3rem 3rem 0rem 3rem",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem 1rem 0rem 1rem",
    },
  },
  WorkflowTitle: {
    fontSize: "36px",
    lineHeight: "56px",
    fontWeight: "600",
    margin: "0px",
    fontFamily: " 'Ubuntu', sans-serif",
  },
  WorkflowPara: {
    padding: "1rem 0rem",
    fontSize: "17px",
    fontWeight: 400,
    textAlign: "justify",
    fontFamily: "'Manrope', sans-serif",
  },
  WorkflowsubPara: {
    color: "#5a5a5a",
    fontSize: "17px",
    fontWeight: 400,
    padding: "0px 5px",
    fontFamily: "'Manrope', sans-serif",
  },
  StartFastText: {
    color: "#3D8ED7",
  },
  Mainwrapper: {
    marginBottom: "5rem",
  },
}));
const OurQAProcess = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const classes = useStyles();
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="2000">
        <Container maxWidth="lg" className={classes.Mainwrapper}>
          <Grid container>
            <Grid xs={12} sm={6}>
              <div className={classes.ContentWraper}>
                <Typography variant="h3" className={classes.WorkflowTitle}>
                  Our QA Process
                </Typography>
                <p className={classes.WorkflowPara}>
                  We default to Agile as an industry standard development model.
                  But some software needs a unique approach, and some industries
                  require a specific validation process, so we also work with
                  Waterfall, V-Model, Spiral, and Iterative models as well.
                </p>
                <p className={classes.WorkflowPara}>
                  {" "}
                  Whatever the model, we strategize according to your business
                  needs, plan software QA services according to your project
                  requirements, and create test documentation with maximum
                  clarity.
                </p>
                <p className={classes.WorkflowPara}>
                  {" "}
                  No stalling. No vendor lock.
                </p>
              </div>
            </Grid>
            <Grid xs={12} sm={6}>
              <div className={classes.ImageWrapper}>
                <img src={QAprocessfinish1} className={classes.Image} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default OurQAProcess;
