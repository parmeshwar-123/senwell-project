import React, { useState } from "react";
import { Container, Grid, Typography, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AutoTyping, { BlinkCursor } from "react-auto-typing";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Popup from "./Popupform";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  mainContainer: {
    // background:`url(${banner})`,
    margin: "10rem 0 0 0",
    padding: "4rem 1rem 7rem 1rem",
    color: "#fff",
    // backgroundSize:'contain'
    [theme.breakpoints.down("md")]: {
      margin: "6rem 0 0 0",
    },
  },
  HeroBannerTitle: {
    fontSize: "3rem",
    color: "#fff",
    fontWeight: "700",
    fontFamily: "'Ubuntu', sans-serif",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  },
  titleWrapper: {
    height: "8rem",

    [theme.breakpoints.down("md")]: {
      height: "10 rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "9rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "14rem",
    },
  },
  HeroBannerTitleCompanyText: {
    color: "#fff",
    padding: "1rem 0rem",
    // fontFamily: "'Ubuntu', sans-serif",
  },
  HireNowButton: {
    padding: "0.7rem 4rem",
    color: "#fff",
    border: "2px solid rgb(31 142 203)",
    marginBottom: "2rem",
    // background: 'transparent',

    // background:'#0e2e5e',
    background:
      "linear-gradient(90deg, hsla(200, 69%, 50%, 1) 24%, hsla(216, 62%, 39%, 1) 83%)",

    borderRadius: "25rem",
    fontSize: "1rem",
    marginTop: "2rem",
    fontFamily: "'Manrope', sans-serif",
    "&:hover": {
      border: "2px solid #fff",
      background: "transparent",
      borderRadius: "25rem",
    },
  },
  HomeSubContainerWrapper: {
    background: "#000",
    margin: "-2px",
    paddingBottom: "1rem",
  },
  ImageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0rem 0rem 0rem 5rem",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  Image: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
  },
  HomeSubContainer: {
    display: "flex",
  },
  HomeSubContainerImage: {
    marginRight: "2rem",
  },
  para: {
    // fontFamily: "'Manrope', sans-serif",
    fontFamily: " 'Lora', serif",
    fontSize: "16px",
    // opacity:'0.8',
  },
}));
const HeroBanner = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container
        maxWidth="lg"
        className={classes.mainContainer}
        data-aos="zoom-in"
      >
        <Grid
          container
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Box>
              <div className={classes.titleWrapper}>
                <h2
                  className={classes.HeroBannerTitle}
                  style={{ padding: "0", margin: "0" }}
                >
                  Software Development Outsourcing Company
                </h2>
                <AutoTyping
                  active
                  textRef=" "
                  writeSpeed={150}
                  deleteSpeed={150}
                  delayToWrite={1000}
                  delayToDelete={2000}
                  className={classes.HeroBannerTitle}
                />
              </div>
              <Typography variant="h6" className={classes.para}>
                We believe the beauty of an application is not only in the user
                interface but also in the code, performance and maintainability.
                We participate in the entire software development life cycle of
                solutions.
              </Typography>
              <Button className={classes.HireNowButton} onClick={handleOpen}>
                Hire Now{" "}
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}></Grid>
        </Grid>
      </Container>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {/* <div className={classes.paper}> */}
          <Popup Close={handleClose} />

          {/* </div> */}
          {/* <Mail/> */}
        </Fade>
      </Modal>
    </>
  );
};

export default HeroBanner;
