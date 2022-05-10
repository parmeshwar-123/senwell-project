import React from "react";
import { makeStyles } from "@mui/styles";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import { useFormik } from "formik";
import { Formik } from "formik";
import * as Yup from "yup";
import { Container, Grid } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import NextButton from "./NextButton";

const useStyles = makeStyles({
  heading: {
    marginBottom: "1rem",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "600",
    textAlign: "center",
  },
  subHeading: {
    textAlign: "center",
    color: "#5a5a5a",
    fontSize: "14px",
    lineHeight: "18px",
  },
  formContainer: {
    margin: "2rem 0px 5rem",
  },
  formControl: {
    margin: "0.5rem 0px 1rem !important",
  },
  check: {
    color: "rgb(43,162, 222) !important",
    margin: "0",
    padding: "0",
  },
  textField: {
    color: "#b8b8b8",
    fontSize: "12px !important",
  },
  tnc: {
    color: "#5a5a5a",
    fontSize: "14px",
    cursor: "pointer",
  },
  policy: {
    margin: "0px 0.5rem",
    color: "rgb(43,162, 222)",
    "&:hover": {
      color: "#5a5a5a",
      transition: "0.3s",
    },
  },
  closeIcon: {
    position: "absolute",
    top: "5px",
    right: "0",
    cursor: "pointer",
    color: "rgb(43,162, 222) !important",
  },
  label: {
    fontSize: "12px",
    fontWeight: "100",
    color: "#5a5a5a",
  },
  errors: {
    color: "red",
  },
});

const EstimateForm = ({ openModal, closeModal }) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const mobileStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 250,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    padding: "0px 2rem",
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    padding: "0px 2rem",
  };

  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     email: "",
  //     projectDescription: "",
  //   },
  //   validationSchema: Yup.object({
  //     name: Yup.string().required("Required"),
  //     email: Yup.string().email("Invalid email address").required("Required"),
  //     projectDescription: Yup.string()
  //       .max(20, "Must be 20 characters or less")
  //       .required("Required"),
  //   }),
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });

  const formValidation = Yup.object().shape({
    name: Yup.string().required().min(2),
    email: Yup.string().required().min(2),
    projectDescription: Yup.string().required().min(2),
  });

  return (
    <Container maxWidth="lg">
      <div className={classes.formContainer}>
        <Modal
          open={openModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={isMobile ? mobileStyle : style}>
            <h1 className={classes.heading}>Tell us about your project</h1>
            <p className={classes.subHeading}>
              The more we know, the more accurate our estimate!
            </p>
            <CloseIcon
              className={classes.closeIcon}
              onClick={() => closeModal(false)}
            />
            <Formik
              initialValues={{
                apples: 0,
                name: "",
              }}
              validationSchema={formValidation}
              onSubmit={(values) => {
                // TODO: buy apples
              }}
            >
              {({
                handleChange,
                handleBlur,
                values,
                handleSubmit,
                errors,
                touched,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Grid container>
                    <Grid item xs={12} sm={12} className={classes.formControl}>
                      <TextField
                        className={classes.textField}
                        name="name"
                        variant="standard"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        fullWidth
                        id="name"
                        label={
                          <Typography
                            variant="headline"
                            className={classes.label}
                          >
                            {" "}
                            Name{" "}
                          </Typography>
                        }
                        autoFocus
                        size="small"
                      />
                      {errors.name && touched.name ? (
                        <div className={classes.errors}>
                          {errors.name[0].toUpperCase() + errors.name.slice(1)}
                        </div>
                      ) : null}
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} sm={12} className={classes.formControl}>
                      <TextField
                        className={classes.textField}
                        name="email"
                        variant="standard"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        fullWidth
                        id="email"
                        label={
                          <Typography
                            variant="headline"
                            className={classes.label}
                          >
                            {" "}
                            Email{" "}
                          </Typography>
                        }
                        autoFocus
                        size="small"
                      />
                      {errors.email && touched.email ? (
                        <div className={classes.errors}>
                          {errors.email[0].toUpperCase() +
                            errors.email.slice(1)}
                        </div>
                      ) : null}
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid item xs={12} className={classes.formControl}>
                      <TextField
                        name="projectDescription"
                        multiline
                        minRows={4}
                        variant="standard"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.projectDescription}
                        fullWidth
                        id="projectDescription"
                        label={
                          <Typography
                            variant="headline"
                            className={classes.label}
                          >
                            {" "}
                            Project Description{" "}
                          </Typography>
                        }
                        autoFocus
                        size="small"
                      />
                      {errors.projectDescription &&
                      touched.projectDescription ? (
                        <div className={classes.errors}>
                          {errors.projectDescription[0].toUpperCase() +
                            errors.projectDescription
                              .slice(1)
                              .replace(/([A-Z])/g, " $1")
                              .trim()}
                        </div>
                      ) : null}
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} className={classes.formControl}>
                      <Checkbox
                        checked={checked}
                        inputProps={{ "aria-label": "primary checkbox" }}
                        className={classes.check}
                        onChange={handleChecked}
                        onBlur={handleBlur}
                        value={values.firstName}
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
                  <div>
                    <NextButton
                      margin="10"
                      getEstimate={true}
                      label="Get Estimate"
                      businessEmail="info@senwellsys.com"
                    />
                  </div>
                </form>
              )}
            </Formik>
          </Box>
        </Modal>
      </div>
    </Container>
  );
};

export default EstimateForm;
