import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import { WorkflowImage } from "../../images/images";
import projectmanagement from "../../images/Company/projectmanagement.png";
import { makeStyles } from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  ImageWrapper: {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "3rem 3rem 0rem 3rem",
  },
  Image: {
    width: "90%",
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
    // fontFamily: "'Manrope', sans-serif",
    // fontFamily: "'Alatsi', sans-serif",
    // fontFamily: "'Montserrat', sans-serif",
    // fontFamily: "'Rubik', sans-serif",
    // fontFamily: "'Poppins', sans-serif",/
    fontFamily: " 'Lora', serif",
    fontSize: "14px",
  },
  WorkflowsubPara: {
    color: "#5a5a5a",
    fontSize: "17px",
    fontWeight: 400,
    padding: "0px 5px",
    // fontFamily: "'Manrope', sans-serif",
    // fontFamily: "'Poppins', sans-serif",
    fontFamily: " 'Lora', serif",
    fontSize: "14px",
  },
  StartFastText: {
    color: "#3D8ED7",
  },
  Mainwrapper: {
    marginBottom: "5rem",
  },
}));
const Workflow = () => {
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
                <img src={projectmanagement} className={classes.Image} />
              </div>
            </Grid>
            <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className={classes.ContentWraper}>
                <Typography variant="h3" className={classes.WorkflowTitle}>
                  <span className={classes.StartFastText}> Start fast.</span>{" "}
                  Finish <br />
                  confidently.
                </Typography>
                <p className={classes.WorkflowPara}>
                  {" "}
                  We want you to be able to start working on your project
                  quickly, so we begin planning our work before our first call
                  to hit the ground running as soon as you settle on your team.
                </p>
                <p className={classes.WorkflowPara}>
                  {" "}
                  As a quality-obsessed software development outsourcing
                  company, we want to ensure your satisfaction with our work, so
                  our QA is more thorough than you can imagine.
                </p>
                <Grid container>
                  <Grid xs={4}>
                    <Typography variant="h3" className={classes.WorkflowTitle}>
                      20
                    </Typography>
                    <p className={classes.WorkflowsubPara}>Years in Business</p>
                  </Grid>
                  <Grid xs={4}>
                    <Typography variant="h3" className={classes.WorkflowTitle}>
                      250+
                    </Typography>
                    <p className={classes.WorkflowsubPara}>Qualified Experts</p>
                  </Grid>
                  <Grid xs={4}>
                    <Typography variant="h3" className={classes.WorkflowTitle}>
                      800+
                    </Typography>
                    <p className={classes.WorkflowsubPara}>Finished Projects</p>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Workflow;
