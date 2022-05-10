import { Typography, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingTop: "4rem",
    paddingBottom: "4rem",
  },
  WhysenwellsTitle: {
    fontWeight: "700",
    fontSize: "1.6rem",
  },
  whysenwellswrapper: {
    paddingTop: "3rem",
    paddingRight: "1rem",
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
    fontWeight: "700",
    paddingBottom: "1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.4rem",
    },
  },
  Whysenwellspara: {
    fontWeight: "500",
    lineHeight: "1.5rem",
    color: "#5a5a5a",
    textAlign: "justify",
  },
}));

const Whysenwells = ({ WhyChooseUs }) => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="xxl">
        {WhyChooseUs.map((val) => (
          <>
            <Container maxWidth="lg" className={classes.mainContainer}>
              <Typography className={classes.WhysenwellsTitle}>
                {val.WhyChooseUsTitle}
              </Typography>
              <Grid container>
                {val.WhyChooseUs.map((value) => (
                  <>
                    <Grid xs={12} sm={6} md={3} lg={3}>
                      <div className={classes.whysenwellswrapper}>
                        <div className={classes.Whysenwellsflexbox}>
                          <Typography>{value.icon} </Typography>
                          <div>
                            <Typography
                              variant="h6"
                              className={classes.Whysenwellstitle}
                            >
                              {value.title}
                            </Typography>
                            <Typography
                              variant="p"
                              className={classes.Whysenwellspara}
                            >
                              {value.para}
                            </Typography>
                          </div>
                        </div>
                      </div>
                    </Grid>
                  </>
                ))}
              </Grid>
            </Container>
          </>
        ))}
      </Container>
    </>
  );
};

export default Whysenwells;
