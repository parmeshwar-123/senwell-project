import React from "react";
import { Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  cookieContaier: {
    display: "flex",
    justifyContent: "space-around",
  },
  privatePolicy: {
    fontSize: "14px",
    color: "#fff",
    fontWeight: 300,
    [theme.breakpoints.between(320, 452)]: {
      fontSize: "12px",
    },

    marginRight: "3rem",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  CookiePolicy: {
    fontSize: "14px",
    color: "#fff",
    fontWeight: 300,
    [theme.breakpoints.between(320, 452)]: {
      fontSize: "12px",
    },

    "&:hover": {
      textDecoration: "underline",
    },
  },
  copyright: {
    fontSize: "14px",
    color: "#fff",
    fontWeight: 300,
    [theme.breakpoints.between(320, 452)]: {
      fontSize: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  mainWrapper: {
    borderTop: "1px solid #fff",
  },
}));
const CopyRights = () => {
  const classes = useStyle();
  return (
    <>
      <Container maxWidth="full" className={classes.mainWrapper}>
        <Container className={classes.container}>
          <Box>
            <h1 className={classes.copyright}>
              © 2022 Senwell. All Rights Reserved
            </h1>
          </Box>

          <Box className={classes.cookieContaier}>
            <h2 className={classes.privatePolicy}>Privacy Policy</h2>
            <h2 className={classes.CookiePolicy}>Cookie Policy</h2>
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default CopyRights;
