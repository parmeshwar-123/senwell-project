import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import { collection, addDoc } from "firebase/firestore";
import * as yup from "yup";
import { makeStyles, Typography, Box } from "@material-ui/core";
import { Container, Grid, TextField, Button } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import { useTheme, useMediaQuery } from "@material-ui/core";
import enquiry from "../images/form/enquiry2.png";
import { db } from "../Pages/Components/Firebase";
const validationSchema = yup.object({
  name: yup.string("Enter your name").required("name is required"),

  description: yup
    .string("Enter your description")

    .required("description is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
});
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    // display: "flex",
    maxWidth: "1080px",
    marginTop: "50px",
  },

  Text: {
    marginRight: "20px",
    marginBottom: "30px",
    width: "45%",
  },

  projectD: {
    display: "grid",
  },
  Btn: {
    width: "25px",
    width: "10rem",
    height: "42px",
    borderRadius: "40px",
    display: "inline-block",
    // float:'right',
  },
  Button: {
    marginTop: "2rem",
    //justifyContent: 'space-between',
    // display: 'flex'
  },
  checkbox: {
    marginTop: "43px",
    marginBottom: "48px",
  },

  [theme.breakpoints.up("md")]: {
    width: "100%",
  },
  Image: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  Number: {
    display: "inline-block",
    float: "right",
    paddingRright: "10vh",
    marginTop: "-4px",

    // text-decoration: none;
    // background-color: transparent;
    // color: #c6c6c6!important;
  },
  ENumber: {
    color: "#c6c6c6!important",
  },
  mainwrapper: {
    padding: "4rem 1rem",
  },
  title: {
    fontFamily: " 'Ubuntu', sans-serif",
    fontWeight: "600",
    marginBottom: "1rem",
  },
  TextField: {
    marginBottom: "2rem",
    marginRight: "20px",
    width: "45%",
    "&:focus": {
      outline: "none",
    },
    "&:label": {
      fontWeight: "700",
    },
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
  TextFielddesc: {
    marginBottom: "2rem",
    marginRight: "20px",
    width: "95%",
    "&:focus": {
      outline: "none",
    },
    "&:label": {
      fontWeight: "700",
    },
  },
}));

const Form = ({ Form }) => {
  const classes = useStyles();
  const theme = useTheme();
  const showText = useMediaQuery(theme.breakpoints.up("md"));

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      // alert(values.name);
      try {
        addDoc(collection(db, "tasks"), {
          name: values.name,
          email: values.email,
          description: values.description,
        });
        resetForm();
        alert("message sent successfully");
      } catch (err) {
        alert(err);
      }
    },
  });

  return (
    <Container maxWidth="lg" className={classes.mainwrapper}>
      {Form.map((val) => (
        <>
          <Grid container>
            <Grid xs={12} sm={12} md={7} className={classes.Image}>
              <div className={classes.img}>
                {showText && (
                  <img src={enquiry} alt="img" style={{ height: "25rem" }} />
                )}
              </div>
            </Grid>
            <Grid xs={12} sm={12} md={5}>
              <Box className={classes.titleWrapper}>
                <Typography
                  variant="h4"
                  className={classes.title}
                  style={{ color: "#3D8ED7" }}
                >
                  {val.formTitle}
                </Typography>
                <Typography variant="h5" className={classes.title}>
                  {val.formSubtitle}
                </Typography>
              </Box>
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  inputProps={{
                    style: {
                      padding: 14,
                    },
                  }}
                  id="name"
                  name="name"
                  label=" Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  className={classes.TextField}
                  variant="outlined"
                />

                <TextField
                  inputProps={{
                    style: {
                      padding: 14,
                    },
                  }}
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  className={classes.TextField}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  maxRows={4}
                  id="description"
                  name="description"
                  label="Project Description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.description &&
                    Boolean(formik.errors.description)
                  }
                  helperText={
                    formik.touched.description && formik.errors.description
                  }
                  className={classes.TextFielddesc}
                  variant="outlined"
                />

                {/* <Checkbox
              checked={checked}
              color="primary"
              onChange={handleChange}
              variant="outlined"

            /> */}

                <Button
                  disabled={!(formik.isValid && formik.dirty)}
                  variant="contained"
                  color="primary"
                  className={classes.Btn}
                >
                  Submit
                </Button>
              </form>
            </Grid>
          </Grid>
        </>
      ))}
    </Container>
  );
};

export default Form;
