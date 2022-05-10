/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles((theme) => ({
  WebDevWrapper: {
    marginTop: "8rem",
  },
  WebDevLandingContainer: {
    display: "flex",
    alignItems: "center",
  },
  WebDevLandingHeadingContainer: {
    maxWidth: "50%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "92%",
    },
  },
  WebDevLandingParaContainer: {
    [theme.breakpoints.up("sm")]: {
      maxWidth: "85%",
    },
  },
  HireButton: {
    marginTop: "20px",
    borderRadius: "20px",
  },
  WebDevLandingImg: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  WebDevServiceContainer: {
    margin: "2rem 0 0 0",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  WebDevImpressClientContainer: {
    maxWidth: "42%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },

  impresNewClientFlowImg: {
    width: "82vw",
    maxWidth: "1028px",
  },
  Imagebox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "3rem 0rem",
  },
  WebDevServiceList: {
    margin: "1rem 0 0 0",
  },
  accordian: {
    margin: "0 0 1rem 0",
  },
  hiredHeader: {
    fontFamily: " 'Ubuntu', sans-serif",

    margin: "0 10px 0 10px",
  },
  hiredHeaderSerialNum: {
    margin: "0 10px 0 10px",
    color: "#3D8ED7",
    fontFamily: " 'Ubuntu', sans-serif",
  },
  webDevSolnContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "3rem 0 0 0",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },

  webDevSolnAccordianBlock: {
    maxWidth: "40%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  WebDevSolnList: {
    fontFamily: " 'Lora', serif",
    fontSize: "14px",
  },
  WebDevListitem: {
    fontWeight: "bold",
    padding: "0.5rem",
    cursor: "pointer",
    fontFamily: " 'Ubuntu', sans-serif",
  },
  mainContainerWrapper: {
    padding: "3rem 0rem 3rem 0rem",
    background: "#3D8ED7",
  },
  ImageWrapper: {
    display: "flex",
    padding: "0rem 7rem",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  Image: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
  },
  MobileViewContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "space-around",
    },
  },
  contentWraper: {
    color: "White",
    paddingTop: "3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      padding: "1rem 0rem",
      textAlign: "center",
    },
  },
  mainWrapper: {
    padding: "4rem 1rem",
  },
  title: {
    fontFamily: " 'Ubuntu', sans-serif",

    [theme.breakpoints.up("md")]: {
      padding: "2rem 2rem",
    },
  },
  wrapper: {
    fontFamily: " 'Ubuntu', sans-serif",
  },
  parawrappar: {
    fontFamily: " 'Lora', serif",
    fontSize: "14px",
  },
}));

const ImpressYourClient = ({
  ImpressYourClientTitle,
  ImpressYourClientPara,
  ImpressYourClientPoints,
  DevelopmentSolutionsList,
  ImpressYourClientImage,
  DevelopmentSolutionsTitle,
}) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const classes = useStyle();
  return (
    <>
      <Container maxWidth="lg" className={classes.mainWrapper}>
        <Box className={classes.WebDevServiceContainer}>
          <Box className={classes.WebDevImpressClientContainer}>
            <Typography variant="h4" className={classes.wrapper}>
              {ImpressYourClientTitle}
            </Typography>
            <p className={classes.parawrappar} style={{ margin: "1rem 0 0 0" }}>
              {ImpressYourClientPara}
            </p>
          </Box>
          <Box>
            <ul className={classes.WebDevServiceList}>
              {ImpressYourClientPoints.map((val) => (
                <>
                  <Typography className={classes.WebDevListitem}>
                    <li>{val.li}</li>
                  </Typography>
                </>
              ))}
            </ul>
          </Box>
        </Box>

        <Box className={classes.Imagebox}>
          <img
            src={ImpressYourClientImage}
            alt=""
            className={classes.impresNewClientFlowImg}
          />
        </Box>
      </Container>
      <Container maxWidth="lg" className={classes.mainWrapper}>
        <Typography variant="h4" className={classes.title}>
          {DevelopmentSolutionsTitle}
        </Typography>
        <Grid container style={{ justifyContent: "center" }}>
          {DevelopmentSolutionsList.map((value) => (
            <>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={5}
                style={{ margin: "0rem 1rem" }}
              >
                <Accordion className={classes.accordian}>
                  <AccordionSummary
                    expandIcon={<Add style={{ color: "#3D8ED7" }} />}
                    aria-controls={value.ariaControls}
                    id={value.id}
                  >
                    <Typography>
                      <div style={{ display: "flex" }}>
                        <span className={classes.hiredHeaderSerialNum}>
                          {value.Number}
                        </span>
                        <Typography
                          variant="h6"
                          className={classes.hiredHeader}
                        >
                          {value.AccordianSummary}
                        </Typography>
                      </div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.WebDevSolnList}>
                      {value.AccordianDetails}
                      <ul className={classes.WebDevServiceList}>
                        {value.List1 && (
                          // eslint-disable-next-line jsx-a11y/anchor-is-valid
                          <a
                            href="#"
                            style={{
                              textDecoration: "underline",
                              fontWeight: "bold",
                              fontFamily: " 'Lora', serif",
                              fontSize: "14px",
                            }}
                          >
                            <li style={{ fontWeight: "bold" }}>
                              {value.List1}
                            </li>
                            F
                          </a>
                        )}

                        {value.list2 && (
                          <a
                            href="#"
                            style={{
                              textDecoration: "underline",
                              fontWeight: "bold",
                              fontFamily: " 'Lora', serif",
                              fontSize: "14px",
                            }}
                          >
                            <li
                              style={{
                                fontWeight: "bold",
                                fontFamily: " 'Lora', serif",
                                fontSize: "14px",
                              }}
                            >
                              {value.List2}
                            </li>
                          </a>
                        )}

                        {value.list3 && (
                          <a
                            href="#"
                            style={{
                              textDecoration: "underline",
                              fontWeight: "bold",
                              fontFamily: " 'Lora', serif",
                              fontSize: "14px",
                            }}
                          >
                            <li
                              style={{
                                fontWeight: "bold",
                                fontFamily: " 'Lora', serif",
                                fontSize: "14px",
                              }}
                            >
                              {value.List3}
                            </li>
                          </a>
                        )}
                      </ul>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ImpressYourClient;
