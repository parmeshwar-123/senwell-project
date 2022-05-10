import React from "react";
import { Grid, Container, makeStyles, Typography } from "@material-ui/core";
import { SiAdobeillustrator } from "react-icons/si";

import "../App.css";
const useStyles = makeStyles((theme) => ({
  title: {
    display: "grid",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "larger",
    marginTop: "20px",

    "&:hover": {
      color: "#3D8ED7",
    },
  },
  iconWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "1rem",
    fontSize: "xx-large",
  },
  mainWrapper: {
    padding: "4rem 0rem",
    background: "#fafafa",
    // margin: "4rem 0",
  },
  paraWrapper: {
    padding: "1rem 3rem",
    textAlign: "left",
    fontFamily: " 'Lora', serif",
    fontSize: "14px",

    [theme.breakpoints.down("sm")]: {
      padding: "1rem 0rem",
    },
  },
  titleWrapper: {
    padding: "1rem 3rem",
    fontFamily: " 'Ubuntu', sans-serif",

    [theme.breakpoints.down("sm")]: {
      padding: "1rem 0rem",
    },
  },
  flexbox: {
    // display: 'flex',
    padding: "2rem 2rem",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "25",
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 0rem",
    },
  },
  TechWrapper: {
    padding: "1rem 2rem",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem 0rem",
    },
  },
  expertiseDesc: {
    background:
      "linear-gradient(90deg, hsla(200, 73%, 52%, 1) 44%, hsla(220, 60%, 37%, 1) 100%)",
    borderRadius: "20px",
    color: "white",
  },
}));

const TechnologiesExperties = ({ TechnologiesExperties, title, para }) => {
  console.log(JSON.stringify(TechnologiesExperties));
  // alert(TechnologiesExperties)
  // alert(title)
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="full" className={classes.mainWrapper}>
        <Container maxWidth="lg">
          <Grid container className={classes.TechWrapper}>
            <Grid xs={12} sm={12} md={6} lg={6} spacing={2}>
              <Typography variant="h4" className={classes.titleWrapper}>
                {title}
              </Typography>
            </Grid>
            <Grid
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className={classes.expertiseDesc}
            >
              <Typography className={classes.paraWrapper}>{para}</Typography>
            </Grid>
          </Grid>
          <Grid container className={classes.flexbox}>
            {TechnologiesExperties.map((value) => (
              <>
                <Grid
                  items
                  xs={6}
                  sm={4}
                  md={3}
                  lg={2}
                  className={classes.Container}
                  spacing={3}
                >
                  <Container className="main-wrapper" maxWidth="lg">
                    <div className="serviceBox">
                      <div className="icon-wrapper">{value.icon}</div>
                      <div className="content">
                        <Typography
                          variant="h6"
                          style={{ fontFamily: " 'Ubuntu', sans-serif" }}
                        >
                          {value.title}
                        </Typography>
                      </div>
                    </div>
                  </Container>
                </Grid>
              </>
            ))}
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default TechnologiesExperties;
