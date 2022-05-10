import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PeopleAlt from "@material-ui/icons/PeopleAlt";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Work from "@material-ui/icons/Work";
const useStyle = makeStyles((theme) => ({
  careerMainHeading: {
    maxWidth: "665px",
    fontFamily: " 'Ubuntu', sans-serif",
    textAlign: "center",
    margin: "0 auto",
    paddingBottom: "1rem",
  },
  meetUsBlock: {
    paddingTop: "40px",
    backgroundColor: "#fafafa",
    width: "30%",
    minWidth: "312px",
    minHeight: "250px",
    boxShadow: "7px 7px 16px 0px #e1d8d8",
    margin: "20px 16px 20px 16px ",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  careerBlock: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  imgBlock: {
    textAlign: "center",
  },

  meetUsHeading: {
    marginBottom: "4px",
    fontSize: "25px",
    textAlign: "center",
    color: "#202020",
    fontFamily: " 'Ubuntu', sans-serif",
  },
  meetUsPara: {
    color: "#3f3f3f",
    textAlign: "center",
    fontFamily: " 'Lora', serif",
    fontSize: "14px",
  },
  ArrowDownward: {
    color: "#3D8ED7",
    width: "50px",

    padding: "0.5rem",
    height: "50px",
    borderRadius: "30px",
    boxShadow: "3px 8px 15px 0px #cec5c5",
    backgroundColor: " #f0efef",
    position: "relative",
    top: "3rem",
  },
  mainWrapper: {
    paddingTop: "8rem",
  },
}));

const Career = () => {
  const classes = useStyle();
  return (
    <>
      <Container maxWidth="lg" className={classes.mainWrapper}>
        <Typography variant="h4" className={classes.careerMainHeading}>
          Let’s build industry-changing projects together!
        </Typography>
        <Box className={classes.careerBlock}>
          <Box className={classes.meetUsBlock}>
            <div className={classes.imgBlock}>
              <PeopleAlt
                style={{ color: "#3D8ED7", width: "56px", height: "56px" }}
              />
            </div>
            <Typography variant="h6" className={classes.meetUsHeading}>
              Meet Us
            </Typography>
            <p className={classes.meetUsPara}>
              Learn more about Senwell Solutions
            </p>
            <div style={{ textAlign: "center" }}>
              <ArrowDownward className={classes.ArrowDownward} />
            </div>
          </Box>

          <Box className={classes.meetUsBlock}>
            <div className={classes.imgBlock}>
              <Work
                style={{ color: "#3D8ED7", width: "56px", height: "56px" }}
              />
            </div>
            <Typography variant="h6" className={classes.meetUsHeading}>
              Job openings
            </Typography>
            <p className={classes.meetUsPara}>Give your career a new twist</p>
            <div style={{ textAlign: "center" }}>
              <ArrowDownward className={classes.ArrowDownward} />
            </div>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Career;
