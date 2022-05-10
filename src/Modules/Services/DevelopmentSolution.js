import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Container,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles((theme) => ({
  WebDevServiceList: {
    margin: "1rem 0 0 0",
  },
  accordian: {
    margin: "0 0 1rem 0",
  },
  hiredHeader: {
    fontWeight: "bold",
    fontSize: "1rem",
    margin: "0 10px 0 10px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.4337rem",
    },
  },
  hiredHeaderSerialNum: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    margin: "0 10px 0 10px",
    color: "#3D8ED7",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
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
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7rem !important",
    },
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
  GetInTouch: {
    padding: "0.7rem 3rem",
    color: "#3D8ED7",
    backgroundColor: "#fff",
    borderRadius: "25rem",
    border: "2px solid #fff",
    marginTop: "2rem",
    "&:hover": {
      backgroundColor: "transparent",
      border: "2px solid #fff",
      color: "#fff",
    },
  },
  GetInTouchButtonwrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "4rem",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "0.5rem",
    },
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
}));
const DevelopmentSolution = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
      const classes = useStyle();
    
  return (
<>
<Container maxWidth='lg'>
<Container>
         
          <Box className={classes.webDevSolnContainer}>
            <Box className={classes.webDevSolnAccordianBlock}>
              <Accordion className={classes.accordian}>
                <AccordionSummary
                  expandIcon={<Add style={{ color: "#3D8ED7" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <div>
                      <span className={classes.hiredHeaderSerialNum}>01</span>
                      <span className={classes.hiredHeader}>
                        Websites & Web Apps
                      </span>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={classes.WebDevSolnList}>
                    Build your online image with engaging looks, intuitive
                    layouts, and compelling user experience.
                    <ul className={classes.WebDevServiceList}>
                      <a
                        href="#"
                        style={{
                          textDecoration: "underline",
                          fontWeight: "bold",
                        }}
                      >
                        <li style={{ fontWeight: "bold" }}>
                          corporate websites
                        </li>
                      </a>
                      <a
                        href="#"
                        style={{
                          textDecoration: "underline",
                          fontWeight: "bold",
                        }}
                      >
                        <li style={{ fontWeight: "bold" }}>Landing Pages</li>
                      </a>
                      <li style={{ fontWeight: "bold" }}>
                        Progressive Web Apps
                      </li>
                      <li style={{ fontWeight: "bold" }}>
                        Single-page Applications
                      </li>
                      <li style={{ fontWeight: "bold" }}>Microservices</li>
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className={classes.accordian}>
                <AccordionSummary
                  expandIcon={<Add style={{ color: "#3D8ED7" }} />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    {" "}
                    <div>
                      <span className={classes.hiredHeaderSerialNum}>02</span>
                      <span className={classes.hiredHeader}>
                        API & Backend Development
                      </span>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={classes.WebDevSolnList}>
                    Complete your website or web application with seamless
                    performance and efficient data processing.
                    <ul className={classes.WebDevServiceList}>
                      <li style={{ fontWeight: "bold" }}>
                        Web services API (REST/SOAP)
                      </li>

                      <li style={{ fontWeight: "bold" }}>Library based API</li>

                      <li style={{ fontWeight: "bold" }}>
                        Socket/Web Socket API
                      </li>
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className={classes.accordian}>
                <AccordionSummary
                  expandIcon={<Add style={{ color: "#3D8ED7" }} />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    <div>
                      <span className={classes.hiredHeaderSerialNum}>03</span>
                      <span className={classes.hiredHeader}>
                        CRM/CMS/ERP customization
                      </span>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={classes.WebDevSolnList}>
                    Custom-tailored management tools to fulfil your unique
                    business needs and optimize processes.
                    <ul className={classes.WebDevServiceList}>
                      <li style={{ fontWeight: "bold" }}>
                        Custom CMS for Your Website
                      </li>

                      <li style={{ fontWeight: "bold" }}>
                        ERP and CRM Systems Using Odoo
                      </li>

                      <li style={{ fontWeight: "bold" }}>
                        Third-party Integrations to Existing Systems
                      </li>
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box className={classes.webDevSolnAccordianBlock}>
              <Accordion className={classes.accordian}>
                <AccordionSummary
                  expandIcon={<Add style={{ color: "#3D8ED7" }} />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    <div>
                      <span className={classes.hiredHeaderSerialNum}>04</span>
                      <span className={classes.hiredHeader}>
                        SaaS & Cloud Services
                      </span>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={classes.WebDevSolnList}>
                    Our experts can help you build, set up, or effectively move
                    your services and operations to the cloud.
                    <ul className={classes.WebDevServiceList}>
                      <li style={{ fontWeight: "bold" }}>ATS</li>

                      <li style={{ fontWeight: "bold" }}>Betting service</li>

                      <li style={{ fontWeight: "bold" }}>Financial services</li>
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className={classes.accordian}>
                <AccordionSummary
                  expandIcon={<Add style={{ color: "#3D8ED7" }} />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    <div>
                      <span className={classes.hiredHeaderSerialNum}>05</span>
                      <span className={classes.hiredHeader}>eCommerce</span>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={classes.WebDevSolnList}>
                    Start an online store quickly and easily or upgrade an
                    existing one to your customers’ expectations.
                    <ul className={classes.WebDevServiceList}>
                      <li style={{ fontWeight: "bold" }}>Marketplace</li>

                      <li style={{ fontWeight: "bold" }}>
                        Shopify, Magento, WooCommerce, nopCommerce
                      </li>

                      <li style={{ fontWeight: "bold" }}>Payment Gateways</li>
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className={classes.accordian}>
                <AccordionSummary
                  expandIcon={<Add style={{ color: "#3D8ED7" }} />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    <div>
                      <span className={classes.hiredHeaderSerialNum}>06</span>
                      <span className={classes.hiredHeader}>
                        API Integration
                      </span>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.WebDevSolnList}>
                  <Typography>
                    We can help you quickly and seamlessly integrate third-party
                    APIs and optimize their performance.
                    <ul className={classes.WebDevServiceList}>
                      <li style={{ fontWeight: "bold" }}>
                        Social Network API Integration
                      </li>
                      <li style={{ fontWeight: "bold" }}>Payment Gateways</li>
                      <li style={{ fontWeight: "bold" }}>
                        Authentication APIs
                      </li>
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        </Container>

</Container>

</>  )
}

export default DevelopmentSolution