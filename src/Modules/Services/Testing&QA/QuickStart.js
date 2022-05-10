import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import { WorkflowImage } from "../../../images/images";
import { makeStyles } from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Quickstart from "../../../../src/images/Services/Quickstart.jpg";

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
const QuickStart = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const classes = useStyles();
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="2000">
        <Container maxWidth="lg" className={classes.Mainwrapper}>
          <Grid container>
            <Grid xs={12} sm={8} md={6} lg={6} xl={6}>
              <div className={classes.ImageWrapper}>
                <img src={Quickstart} className={classes.Image} />
              </div>
            </Grid>
            <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className={classes.ContentWraper}>
                <Typography variant="h3" className={classes.WorkflowTitle}>
                  Quick start. Quality finish.
                </Typography>
                <p className={classes.WorkflowPara}>
                  When you come to Senwell Solutions, you get a reliable tech
                  partner businesses turn to time and time again. Professional
                  software QA services that will help you optimize your SDLC
                  processes and establish full control over the code quality on
                  your project.
                </p>
                <p className={classes.WorkflowPara}>
                  {" "}
                  Over the years, we’ve matured our internal workflows and honed
                  our skills to ensure efficient performance that gives you
                  accurate product quality information. With decade-long
                  experience, CMMI-appraised processes, and a large roster of
                  ISTQB-certified testers, we help our clients create
                  high-quality software on time and within budget.
                </p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default QuickStart;
