import { Typography, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingTop: "4rem",
    paddingBottom: "4rem",
  },
  WhysenwellsTitle: {
    fontFamily: " 'Ubuntu', sans-serif",
    paddingLeft: "3rem",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "1.6rem",
    },
  },
  whysenwellswrapper: {
    padding: "3rem",
    //   paddingRight:'1rem',
    [theme.breakpoints.down("xs")]: {
      padding: "1.5rem",
    },
  },
  Whysenwellsicon: {
    color: "#3D8ED7",
    paddingBottom: "1rem",
    fontSize: "3.2rem",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "0rem",
      fontSize: "2rem",
    },
  },
  Whysenwellstitle: {
    fontFamily: " 'Ubuntu', sans-serif",
    //paddingBottom:'1rem',
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.4rem",
    },
  },
  Whysenwellspara: {
    fontWeight: "500",
    fontFamily: " 'Lora', serif",
    fontSize: "14px",
    textAlign: "left",
    // fontFamily: "'Poppins', sans-serif"
  },
}));

const Whysenwells = ({ Whysenwell }) => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="xxl" style={{ background: "#f1f1f1" }}>
        <Container maxWidth="lg" className={classes.mainContainer}>
          <Typography variant="h4" className={classes.WhysenwellsTitle}>
            Why Senwell Solutions
          </Typography>
          <Grid container>
            {Whysenwell.map((val) => (
              <>
                <Grid xs={12} sm={6} md={3} lg={3}>
                  <div className={classes.whysenwellswrapper}>
                    <div className={classes.Whysenwellsflexbox}>
                      <Typography>{val.icon} </Typography>
                      <div>
                        <Typography
                          variant="h6"
                          className={classes.Whysenwellstitle}
                        >
                          {val.title}
                        </Typography>
                        <p className={classes.Whysenwellspara}>{val.para}</p>
                      </div>
                    </div>
                  </div>
                </Grid>
              </>
            ))}
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default Whysenwells;
