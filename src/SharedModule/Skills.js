import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Breadcrumbs,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  QualitymainContainer: {
    // background: '#1c1c',
    padding: "2rem 0rem",
    // marginTop:'6rem',
  },
  QualityfirstsectionTitleWrapper: {
    color: "#000",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  gridContainer: {
    justifyContent: "center",
    width: "80%",
    margin: "auto",
  },
  QualityfirstsectionParaWrapper: {
    color: "#000",
    lineHeight: "24px",
    [theme.breakpoints.down("sm")]: {
      padding: "0rem 2rem",
      lineHeight: "20px",
    },
  },
  QualityfirstsectionWrapper: {
    padding: "3rem 0rem",
    borderBottom: "1px solid #000",
  },
  TextWrapper: {
    fontFamily: " 'Ubuntu', sans-serif",
    textAlign: "left",
    width: "70% !important",

    [theme.breakpoints.down("md")]: {
      width: "80% !important",
      fontSize: "35px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90% !important",
      fontSize: "30px",
    },
  },
  QualitysecondsectionWrapper: {
    color: "#000",
    paddingTop: "3rem",
    paddingRight: "2rem",
  },
  persetText: {
    paddingBottom: "0.5rem",
    fontWeight: "600",
  },

  QualitysecondsectionParaWrapper: {
    padding: "1rem  2rem 1rem 2rem",
  },

  titleText: {
    fontFamily: " 'Ubuntu', sans-serif",
  },
  paraText: {
    textAlign: "justify",
    // fontFamily: "'Poppins', sans-serif",
    fontFamily: " 'Lora', serif",
    fontSize: "14px",
  },
}));
const Skill = ({ Skill }) => {
  const classes = useStyles();
  return (
    <>
      {Skill.map((val) => (
        <>
          <Container className={classes.QualitymainContainer} maxWidth="full">
            <Container
              className={classes.QualityfirstsectionWrapper}
              maxWidth="lg"
            >
              <Grid container className={classes.gridContainer}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  className={classes.QualityfirstsectionTitleWrapper}
                >
                  <Typography variant="h4" className={classes.TextWrapper}>
                    {val.PerformanceTitle}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  className={classes.QualityfirstsectionParaWrapper}
                >
                  <p className={classes.paraText}>{val.PerformancePara} </p>
                </Grid>
              </Grid>
            </Container>
            <Container
              className={classes.QualitysecondsectionWrapper}
              maxWidth="lg"
            >
              <Grid container>
                {val.PerformanceList.map((listitem) => (
                  <>
                    <Grid xs={12} sm={12} md={4} lg={4}>
                      <div className={classes.QualitysecondsectionParaWrapper}>
                        <Typography variant="h6" className={classes.persetText}>
                          {listitem.Numbers}
                        </Typography>
                        <Typography variant="h6" className={classes.titleText}>
                          {listitem.PerformanceListTitle}
                        </Typography>
                        <p className={classes.paraText}>
                          {listitem.PerformanceListPara}
                        </p>
                      </div>
                    </Grid>
                  </>
                ))}
              </Grid>
            </Container>
          </Container>
        </>
      ))}
    </>
  );
};

export default Skill;
