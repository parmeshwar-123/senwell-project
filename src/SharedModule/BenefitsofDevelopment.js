import React from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  Details: {
    // marginTop:'3rem' ,
    padding: "1rem 2rem",
  },
  Number: {
    color: "#3D8ED7",
    fontWeight: "700",
  },
  mainWrapper: {
    padding: "5rem 1rem 1rem 1rem",
    [theme.breakpoints.down("xs")]: {
      padding: "1rem",
    },
  },
  UxTitle: {
    // fontWeight:'600',
    padding: "0.3rem 0rem",
    fontFamily: " 'Ubuntu', sans-serif",
  },
  mainWrapper: {
    padding: "4rem 1rem",
  },
  titleWrapper: {
    fontFamily: " 'Ubuntu', sans-serif",
    padding: " 1rem 1rem 1rem 1rem",
  },
  UXDesign: {
    padding: "0rem 1rem",
  },
  desc: {
    lineHeight: "1.5rem",
    textAlign: "left",
    fontFamily: " 'Lora', serif",
    fontSize: "14px",
  },
}));
const Benefits = ({ Benefits }) => {
  const classes = useStyles();
  return (
    <div className={classes.UXDesign}>
      {Benefits.map((val) => (
        <>
          <Container maxWidth="lg" className={classes.mainWrapper}>
            <div style={{ marginBottom: "2rem" }}>
              <Typography variant="h4" className={classes.titleWrapper}>
                {val.title}
              </Typography>
              <Typography variant="h4" className={classes.titleWrapper}>
                {val.Benefitstitle}
              </Typography>
            </div>

            <Grid container>
              {val.BenefitsofDevelopmentWithSenwell.map((data) => (
                <>
                  <Grid xs={12} sm={6} md={4} lg={4}>
                    <div className={classes.Details}>
                      <Typography variant="h6" className={classes.Number}>
                        {data.Number}
                      </Typography>
                      <Typography variant="h6" className={classes.UxTitle}>
                        {data.title}
                      </Typography>
                      <p className={classes.desc}>{data.description}</p>
                    </div>
                  </Grid>
                </>
              ))}
            </Grid>
          </Container>
        </>
      ))}
    </div>
  );
};

export default Benefits;
