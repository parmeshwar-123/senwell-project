import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  heading: {
    margin: "1rem 0px",
    fontSize: "32px",
    lineHeight: "44px",
  },
  subHeading: {
    fontSize: "18px",
    lineHeight: "28px",
  },
  switchContainer: {
    margin: "2rem 0px 4rem !important",
  },
  gridContainer: {
    margin: "1rem 0px",
    [theme.breakpoints.down("xs")]: {
      margin: "0rem 0px",
    },
  },
  gridItem: {
    display: "flex",
    alignItems: "center",
  },
  label: {
    fontSize: "20px",
    lineHeight: "28px",
    color: "#000",
  },
}));

const Services = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <h1 className={classes.heading}>02. Services</h1>
      <p className={classes.subHeading}>
        Please select which services our team will need to handle.
      </p>
      <div className={classes.switchContainer}>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} sm={6}>
            <FormGroup>
              <FormControlLabel
                control={<Switch />}
                label={
                  <Typography variant="headline" className={classes.label}>
                    {" "}
                    Development{" "}
                  </Typography>
                }
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={<Switch />}
              label={
                <Typography variant="headline" className={classes.label}>
                  {" "}
                  Design{" "}
                </Typography>
              }
            />
          </Grid>
        </Grid>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} sm={6}>
            <FormGroup>
              <FormControlLabel
                control={<Switch />}
                label={
                  <Typography variant="headline" className={classes.label}>
                    {" "}
                    Testing & QA{" "}
                  </Typography>
                }
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={<Switch />}
              label={
                <Typography variant="headline" className={classes.label}>
                  {" "}
                  Consulting{" "}
                </Typography>
              }
            />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Services;
