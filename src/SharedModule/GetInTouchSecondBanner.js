import React from "react";
import { makeStyles } from "@material-ui/core";
import { Container, Grid, Button, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  ImageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0rem 0rem 0rem 5rem",
  },
  Image: {
    width: "100%",
    height: "auto",
    borderRadius: "22px",
    objectFit: "contain",
    "&:path": {
      fill: "#3D8ED7",
    },
  },
  TextWrapper: {
    fontFamily: " 'Ubuntu', sans-serif",
    color: "#fff",
  },
  Getintouch: {
    padding: "0.7rem 3rem",
    color: "#3D8ED7",
    backgroundColor: "#fff",
    borderRadius: "25rem",
    fontWeight: "800",
    border: "2px solid #fff",
    "&:hover": {
      backgroundColor: "transparent",
      border: "2px solid #fff",
      color: "#fff",
    },
  },
  mainWrapper: {
    paddingBottom: "1rem",
    background:
      "linear-gradient(90deg, hsla(200, 69%, 50%, 1) 24%, hsla(216, 62%, 39%, 1) 83%)",
  },
  flexbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Container: {
    padding: "4rem 4rem 2rem 4rem",
    [theme.breakpoints.down("sm")]: {
      padding: "4rem 1rem 4rem 1rem",
    },
  },
  paraText: {
    color: "#fff",
    padding: "1rem 0rem",
    fontFamily: " 'Lora', serif",
    fontSize: "14px",
  },
  ImageSection: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const WantFreeConsultantation = ({ GetInTouchSecondBanner }) => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="xxl" className={classes.mainWrapper}>
        <Container className={classes.Container} maxWidth="lg">
          {GetInTouchSecondBanner.map((val) => (
            <>
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
                    {val.GetInTouchTitle}
                  </Typography>
                  <p className={classes.paraText}>{val.para}</p>
                  <div className={classes.flexbox}>
                    <Button className={classes.Getintouch}>{val.Button}</Button>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  className={classes.ImageSection}
                >
                  <div className={classes.ImageWrapper}>
                    <img
                      src={val.image}
                      alt={val.GetInTouchTitle}
                      className={classes.Image}
                    />
                  </div>
                </Grid>
              </Grid>
            </>
          ))}
        </Container>
      </Container>
    </>
  );
};

export default WantFreeConsultantation;
