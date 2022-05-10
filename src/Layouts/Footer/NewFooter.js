import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import CallMadeIcon from "@material-ui/icons/CallMade";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link } from "react-router-dom";

import CopyRight from "./CopyRights";
import Awards from "./Awards";
const useStyles = makeStyles((theme) => ({
  footerNavTitle: {
    textDecoration: "none",
    color: "#fff",
    fontFamily: "'Lora', serif",
  },
  address: {
    color: "#fff",
    fontSize: "14px",
    //fontWeight: "600",
    textDecoration: "none",
    lineHeight: "20px",
    letterSpacing: "0.7px",
    marginBottom: "15px",
  },

  skype: {
    fontSize: "14px",
    marginBottom: "15px",
    color: "#fff",
  },
  icon: {
    fontSize: "14px",
    padding: "1px",
    color: "#fff",
  },
  socialIcon: {
    marginRight: "0.5rem",
    marginBottom: "0.5rem",
    paddingRight: "0.5rem",
    color: "#fff",
  },
  LinkStyle: {
    marginBottom: "15px",
    color: "#fff",
    fontSize: "14px",
    cursor: "pointer",
    fontFamily: "'Lora', serif",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("lg")]: {},
  },
  LogoImg: {
    height: "5rem",
    width: "6.5rem",
    [theme.breakpoints.down("md")]: {
      height: "4rem",
      width: "5.5rem",
    },
  },
  logoTitle: {
    margin: "0",
    fontSize: "1.5rem",
    paddingTop: "6px",
    color: "#fff",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.2rem",
      marginTop: "0.9rem",
      lineHeight: "1.3rem",
    },
  },
  slogan: {
    fontSize: "0.8rem",
    marginTop: "0px",
    paddingTop: "0px",
    color: "#fff",
    lineHeight: "0.3rem",
    [theme.breakpoints.up("lg")]: {
      marginLeft: "2.9rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "0.6rem",
      marginLeft: "0.2rem",
    },
  },
  mainWrapper: {
    background:
      "linear-gradient(90deg, rgb(43, 162, 222) 44%, rgb(38, 75, 151) 100%)",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.mainWrapper} maxWidth="xxl">
        <Container maxWidth="lg">
          <Grid container style={{ justifyContent: "space-between" }}>
            <Grid
              item
              xs={12}
              sm={2}
              md={3}
              lg={2}
              spacing={5}
              style={{ margin: "1rem" }}
            >
              <div className={classes.Box}>
                <h4 className={classes.footerNavTitle}>Contact </h4>
                <p className={classes.address}>
                  Gera's Imperium Alpha,
                  <br /> Office No. 715 & 716,
                  <br />
                  7th Floor, Near Eon IT Park, Kharadi,Pune - 411014
                </p>

                <Typography className={classes.address}>
                  info@senwellsys.com +91 7696068917
                </Typography>
                <div className={classes.skype}>
                  <Typography className={classes.skype}>
                    Skype
                    <CallMadeIcon className={classes.icon} />
                  </Typography>
                </div>
                <div className={classes.Icons}>
                  <LinkedInIcon className={classes.socialIcon} />{" "}
                  <FacebookIcon className={classes.socialIcon} />{" "}
                </div>

                <div>
                  {" "}
                  <GitHubIcon className={classes.socialIcon} />
                  <TwitterIcon className={classes.socialIcon} />
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              md={2}
              lg={2}
              spacing={5}
              style={{ margin: "1rem" }}
            >
              <div className={classes.Box}>
                <h4 className={classes.footerNavTitle}>About</h4>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/outsourcing-pricing-models"
                    style={{ textDecoration: "none", color: "#fff  " }}
                  >
                    Business Models
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  {" "}
                  <Link
                    to="/career"
                    style={{ textDecoration: "none", color: "#fff " }}
                  >
                    Career
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/projects"
                    style={{ textDecoration: "none", color: "#fff  " }}
                  >
                    Portfolio
                  </Link>
                </Typography>
              </div>{" "}
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              md={2}
              lg={2}
              spacing={5}
              style={{ margin: "1rem" }}
            >
              <div className={classes.Box}>
                <h4 className={classes.footerNavTitle}>Services</h4>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="services/ui-ux-design"
                    style={{ textDecoration: "none", color: "#fff  " }}
                  >
                    {" "}
                    Design
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/services/custom-software-development"
                    style={{ textDecoration: "none", color: "#fff  " }}
                  >
                    {" "}
                    Custom Software Development
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/services/web-development"
                    style={{ textDecoration: "none", color: "#fff  " }}
                  >
                    {" "}
                    Web Development
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/services/application-development"
                    style={{ textDecoration: "none", color: "#fff  " }}
                  >
                    {" "}
                    Mobile App Development
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/services/testing-and-qa"
                    style={{ textDecoration: "none", color: "#fff " }}
                  >
                    {" "}
                    Testing & Senwell Solutions
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/services/devops"
                    style={{ textDecoration: "none", color: "#fff " }}
                  >
                    {" "}
                    DevOps
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/services/mvp-development"
                    style={{ textDecoration: "none", color: "#fff  " }}
                  >
                    {" "}
                    MVP Development
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/services/custom-software-development"
                    style={{ textDecoration: "none", color: "#fff " }}
                  >
                    {" "}
                    Dedicated Development Teams
                  </Link>
                </Typography>
              </div>{" "}
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              md={2}
              lg={2}
              spacing={5}
              style={{ margin: "1rem" }}
            >
              <div className={classes.Box}>
                <h4 className={classes.footerNavTitle}>Techonologies</h4>

                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/hire-developers/angular"
                    style={{ textDecoration: "none", color: "#fff " }}
                  >
                    {" "}
                    Angular
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/hire-developers/react"
                    style={{ textDecoration: "none", color: "#fff " }}
                  >
                    {" "}
                    React
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/hire-developers/nodejs"
                    style={{ textDecoration: "none", color: "#fff  " }}
                  >
                    {" "}
                    Node.js
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/hire-developers/react-native"
                    style={{ textDecoration: "none", color: "#fff  " }}
                  >
                    {" "}
                    Recat Native
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/hire-developers/qa"
                    style={{ textDecoration: "none", color: "#fff  " }}
                  >
                    {" "}
                    Quality Assurance
                  </Link>
                </Typography>
              </div>{" "}
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              md={2}
              lg={2}
              spacing={5}
              style={{ margin: "1rem" }}
            >
              <div className={classes.Box}>
                <h4 className={classes.footerNavTitle}>Industries</h4>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/industries/ecommerce"
                    style={{ textDecoration: "none", color: "#fff  " }}
                  >
                    {" "}
                    eCommerce
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/industries/healthcare"
                    style={{ textDecoration: "none", color: "#fff  " }}
                  >
                    {" "}
                    Healthcare
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/industries/media-and-entertainment"
                    style={{ textDecoration: "none", color: "#fff  " }}
                  >
                    {" "}
                    Entertainment
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/industries/banking-and-finance"
                    style={{ textDecoration: "none", color: "#fff  " }}
                  >
                    {" "}
                    Finance & Banking
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/industries/banking-and-finance"
                    style={{ textDecoration: "none", color: "#fff  " }}
                  >
                    {" "}
                    Startups
                  </Link>
                </Typography>
              </div>{" "}
            </Grid>
          </Grid>
        </Container>
        <CopyRight />
      </Container>
      {/* <Awards/> */}
    </>
  );
};

export default Footer;
