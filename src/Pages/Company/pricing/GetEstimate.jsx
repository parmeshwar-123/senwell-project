import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Grid } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles({
  heading: {
    margin: "1rem 0px",
    fontSize: "32px",
    lineHeight: "44px",
  },
  subHeading: {
    fontSize: "18px",
    lineHeight: "28px",
  },
  formContainer: {
    margin: "2rem 0px 5rem",
  },
  formControl: {
    margin: "0.5rem 0px 1rem !important",
  },
  textField: {
    color: "#b8b8b8",
    fontSize: "12px !important",
  },
  tnc: {
    color: "#5a5a5a",
    fontSize: "14px",
  },
  policy: {
    margin: "0px 0.5rem",
    color: "rgb(32,142, 255)",
    "&:hover": {
      color: "#5a5a5a",
      transition: "0.3s",
    },
  },
  check: {
    color: "rgb(32,142, 255) !important",
    margin: "0",
    padding: "0",
  },
});

const GetEstimate = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Container maxWidth="lg">
      <h1 className={classes.heading}>06. Get Your Estimate</h1>
      <p className={classes.subHeading}>
        We’re ready to start crunching numbers, but if there’s more you can tell
        us — it will allow us to give you a more accurate estimate!
      </p>
      <div className={classes.formContainer}>
        <form>
          <Grid
            container
            spacing={2}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Grid item xs={12} sm={6} className={classes.formControl}>
              <TextField
                className={classes.textField}
                name="name"
                variant="standard"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.formControl}>
              <TextField
                className={classes.textField}
                name="email"
                variant="standard"
                required
                fullWidth
                id="email"
                label="Email"
                autoFocus
                size="small"
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} className={classes.formControl}>
              <TextField
                name="projectDescription"
                multiline
                minRows={4}
                variant="standard"
                required
                fullWidth
                id="projectDescription"
                label="Project Description"
                autoFocus
                size="small"
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} className={classes.formControl}>
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primery checkbox" }}
                className={classes.check}
              />

              <span className={classes.tnc}>
                I agree to the Senwell Solutions{" "}
                <a href="#cookie" className={classes.policy}>
                  Cookie Policy
                </a>{" "}
                and
                <a href="#privacy" className={classes.policy}>
                  {" "}
                  Privacy Policy
                </a>
                *
              </span>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default GetEstimate;
