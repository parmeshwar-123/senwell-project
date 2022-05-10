import React from "react";
import { useParams } from "react-router-dom";
import { makeStyles, Button } from "@material-ui/core";
import { Container, Grid } from "@material-ui/core";
//import TextField from "@mui/material/TextField";
import { Contact } from "../API/ContactAPI";
import Checkbox from "@material-ui/core/Checkbox";
import { TextField } from "@material-ui/core";
import HeroBanner from "../Modules/Bannars/Contact";
import { FiArrowUpRight } from "react-icons/fi";
const useStyles = makeStyles((theme) => ({
  Container: {
    paddingTop: "7rem",
    width: "80%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    //     [theme.breakpoints.down('sm')]: {

    // }
  },
  heading: {
    margin: "1rem 0px",
    fontSize: "32px",
    lineHeight: "44px",
    color: "rgb(43, 162, 222)",
    fontWeight: "600",
  },
  subHeading: {
    fontSize: "24px",
    lineHeight: "30px",
    fontWeight: "600",
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
  Number: {
    color: "#3d8ed7",
    fontSize: "18px",
    fontWeight: "500",
  },
  DivList: {
    // margin: "20% auto 0px",
  },
  Details: {
    paddingRight: "50px",
    margin: "0px",
  },
  FormDetails: {},
  btn: {
    marginTop: "7%",
  },

  Link: {
    display: "grid",
  },
  buttonWrapper: {
    margin: "3rem 0px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    width: "12rem",
    height: "3rem",
    borderRadius: "20px",
    color: "white",
    borderRadius: "40px",
    border: "2px solid #3d8ed7",
    backgroundColor: "#3d8ed7",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#3d8ed7",
    },
  },
  links: {
    display: "block",
    textAlign: "center",
    textDecoration: "none",
    color: "#c6c6c6",
  },
  detailWrapper: {
    margin: "3rem 0px",
  },
}));

const Readytostart = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <HeroBanner />
      <Container maxWidth="lg">
        <Grid container className={classes.Container}>
          <Grid Item xs={12} sm={4} className={classes.DivList}>
            <div>
              <div className={classes.detailWrapper}>
                <span className={classes.Number}>01</span>
                <p className={classes.Details}>
                  Contact us to schedule a free consultation.
                </p>
              </div>
              <div className={classes.detailWrapper}>
                <span className={classes.Number}>02</span>
                <p className={classes.Details}>
                  A qualified engineer will answer all your questions and your
                  personal manager will outline our next steps.
                </p>
              </div>
              <div className={classes.detailWrapper}>
                <span className={classes.Number}>03</span>
                <p className={classes.Details}>
                  We will prepare a project estimate and a preliminary
                  development and testing plan for your project.
                </p>
              </div>
            </div>
          </Grid>
          <Grid Item xs={12} sm={7} className={classes.FormDetails}>
            <div>
              <h1 className={classes.heading}>Ready to start?</h1>
              <h2 className={classes.subHeading}>
                Tell us about your project!
              </h2>
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
                      <div className={classes.buttonWrapper}>
                        <Button variant="contained" className={classes.button}>
                          submit
                        </Button>
                        <div>
                          <a href="" className={classes.links}>
                            {" "}
                            info@senwellsys.com
                          </a>
                          <a href="" className={classes.links}>
                            +91 7696068917
                          </a>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Readytostart;
