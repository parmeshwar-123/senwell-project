import React from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Details: {
    marginTop: "3rem",
    padding: "2rem 2rem",
  },
  Number: {
    margin: "0 auto 2px auto",
    padding: "10px 10px",
    display: "inline-block",
    textAlign: "center",
    borderRadius: "50%",
    background:
      "linear-gradient(90deg, hsla(200, 73%, 52%, 1) 44%, hsla(220, 60%, 37%, 1) 100%)",
  },
  mainWrapper: {
    padding: "1rem 1rem 1rem 1rem",
    [theme.breakpoints.down("xs")]: {
      padding: "1rem",
    },
  },
  UxTitle: {
    padding: "0.5rem 0rem",
    fontFamily: "'Ubuntu', sans-serif",
  },
  box: {
    padding: "30px",
    position: "relative",
    overflow: "hidden",
    borderRadius: "10px",
    margin: " 0 10px 0px 10px",
    background: "#fff",
    // boxShadow: '0 10px 29px 0 rgba(68, 88, 144, 0.1)',
    transition: "all 0.3s ease-in-out",
    // textAlign:'center',
    cursor: "pointer",
    "&:hover": {
      // boxShadow: '0px 7px 14px rgb(0 0 0 / 40%)',
    },
  },
  descriptionWrapper: {
    textAlign: "left",
    fontFamily: "'Lora', serif",
    fontSize: "14px",
  },
  mainWrapper: {
    padding: "2rem 2rem 1rem 2rem",
    [theme.breakpoints.down("xs")]: {
      padding: "1rem",
    },
  },
  mainTitle: {
    padding: "4rem 2rem",
    textAlign: "center",
    fontFamily: "'Ubuntu', sans-serif",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem 0",
    },
  },
}));
const IndustriesIdealSoution = ({ idealSolution }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.UXDesign}>
        {idealSolution.map((val) => (
          <>
            <Container maxWidth="lg" className={classes.mainWrapper}>
              <Typography variant="h4" className={classes.mainTitle}>
                {val.title}
              </Typography>
              <Grid container>
                {val.idealSolutionList.map((data) => (
                  <>
                    <Grid xs={12} sm={6} md={4} lg={4}>
                      <div className={classes.box}>
                        <p className={classes.Number}>{data.Number}</p>
                        <Typography variant="h6" className={classes.UxTitle}>
                          {data.title}
                        </Typography>

                        <Typography className={classes.descriptionWrapper}>
                          {data.description}
                        </Typography>
                      </div>
                    </Grid>
                  </>
                ))}
              </Grid>
            </Container>
          </>
        ))}
      </div>
    </>
  );
};

export default IndustriesIdealSoution;
