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
    background: "#1c1c1c",
    padding: "4rem 0rem",
    // marginTop:'6rem',
  },
  QualityfirstsectionTitleWrapper: {
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      padding: "0rem 2rem",
    },
  },
  QualityfirstsectionParaWrapper: {
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 2rem",
    },
  },
  QualityfirstsectionWrapper: {
    padding: "2rem 0rem",
    borderBottom: "1px solid #fff",
  },
  TextWrapper: {
    padding: "2rem",
    fontFamily: " 'Ubuntu', sans-serif",
  },
  QualitysecondsectionWrapper: {
    color: "#fff",
    paddingTop: "1rem",
    paddingRight: "2rem",
  },
  persetText: {
    fontFamily: " 'Ubuntu', sans-serif",
  },
  titleText: {
    fontFamily: " 'Ubuntu', sans-serif",
  },
  QualitysecondsectionParaWrapper: {
    paddingRight: "1rem",
    paddingTop: "3rem",
  },
  paraText: {
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
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  className={classes.QualityfirstsectionTitleWrapper}
                >
                  <Typography variant="h4" className={classes.TextWrapper}>
                    {val.PerformanceTitle}
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
                    <Grid xs={12} sm={4} md={4} lg={4}>
                      <div className={classes.QualitysecondsectionParaWrapper}>
                        <Typography variant="h6" className={classes.persetText}>
                          {listitem.Numbers}
                        </Typography>
                        <Typography variant="h6" className={classes.titleText}>
                          {listitem.PerformanceListTitle}
                        </Typography>
                        <Typography className={classes.paraText}>
                          {listitem.PerformanceListPara}
                        </Typography>
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
