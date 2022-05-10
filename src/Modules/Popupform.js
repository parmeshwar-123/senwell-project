import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import { collection, addDoc } from "firebase/firestore";
import * as yup from "yup";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Box, Container, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
// import app from '../Pages/Components/Firebase';
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
  TextField: {
    marginBottom: "2rem",
    "&:focus": {
      outline: "none",
    },
    "&:label": {
      fontWeight: "700",
    },
  },
  titleWrapper: {
    padding: "1rem 1rem",
    textAlign: "center",
  },
  title: {
    fontFamily: " 'Ubuntu', sans-serif",
  },
}));

const WithMaterialUI = ({ Close }) => {
  const classes = useStyles();
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
        Close();
        alert("message sent successfully");
      } catch (err) {
        alert(err);
      }
    },
  });

  const [checked, setChecked] = React.useState(false);

  return (
    <Container
      maxWidth="sm"
      style={{ background: "#fff", padding: "1rem 3rem" }}
    >
      <Typography style={{ float: "right", paddingBottom: "1rem" }}>
        <AiOutlineCloseCircle onClick={Close} style={{ fontSize: "1.3rem" }} />
      </Typography>
      <Box className={classes.titleWrapper}>
        <Typography variant="h5" className={classes.title}>
          Tell us about your project{" "}
        </Typography>
        <p>The more we know, the more accurate our estimate!</p>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
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
          fullWidth
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
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
          className={classes.TextField}
          variant="outlined"
        />
        <div className={classes.TextField}>
          {/* <Checkbox
            checked={checked}
            color="primary"
            onChange={handleChange}
            variant="outlined"

          /> */}
          <span style={{}}>I agree to the Senwell Cookie Policy*</span>
        </div>

        <Button
          color="primary"
          disabled={!(formik.isValid && formik.dirty)}
          variant="contained"
          fullWidth
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default WithMaterialUI;
