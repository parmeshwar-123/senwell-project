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
    fontSize: "20px",
    fontWeight: "600",
    textDecoration: "none",
    color: "#1c1c1c",
  },
  address: {
    color: "#5a5a5a",
    fontSize: "14px",
    fontWeight: "600",
    textDecoration: "none",
    lineHeight: "20px",
    letterSpacing: "0.7px",
    marginBottom: "15px",
  },

  skype: {
    fontSize: "14px",
    marginBottom: "15px",
  },
  icon: {
    fontSize: "14px",
    padding: "1px",
  },
  socialIcon: {
    marginRight: "0.5rem",
    marginBottom: "0.5rem",
    paddingRight: "0.5rem",
  },
  LinkStyle: {
    marginBottom: "15px",
    color: "#1c1c1c",
    fontSize: "14px",
    cursor: "pointer",
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
    color: "#000",
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
    color: "#000",
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
    background: "#f1f1f1",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.mainWrapper} maxWidth="xxl">
        <Container maxWidth="lg" style={{ paddingTop: "5rem" }}>
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
                    style={{ textDecoration: "none", color: "#000  " }}
                  >
                    Business Models
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  {" "}
                  <Link
                    to="/career"
                    style={{ textDecoration: "none", color: "#000 " }}
                  >
                    Career
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/projects"
                    style={{ textDecoration: "none", color: "#000  " }}
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
                    style={{ textDecoration: "none", color: "#000  " }}
                  >
                    {" "}
                    Design
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/services/custom-software-development"
                    style={{ textDecoration: "none", color: "#000  " }}
                  >
                    {" "}
                    Custom Software Development
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/services/web-development"
                    style={{ textDecoration: "none", color: "#000  " }}
                  >
                    {" "}
                    Web Development
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/services/application-development"
                    style={{ textDecoration: "none", color: "#000  " }}
                  >
                    {" "}
                    Mobile App Development
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/services/testing-and-qa"
                    style={{ textDecoration: "none", color: "#000 " }}
                  >
                    {" "}
                    Testing & Senwell Solutions
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/services/devops"
                    style={{ textDecoration: "none", color: "#000 " }}
                  >
                    {" "}
                    DevOps
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/services/mvp-development"
                    style={{ textDecoration: "none", color: "#000  " }}
                  >
                    {" "}
                    MVP Development
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/services/custom-software-development"
                    style={{ textDecoration: "none", color: "#000 " }}
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
                    style={{ textDecoration: "none", color: "#000 " }}
                  >
                    {" "}
                    Angular
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/hire-developers/react"
                    style={{ textDecoration: "none", color: "#000 " }}
                  >
                    {" "}
                    React
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/hire-developers/nodejs"
                    style={{ textDecoration: "none", color: "#000  " }}
                  >
                    {" "}
                    Node.js
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/hire-developers/react-native"
                    style={{ textDecoration: "none", color: "#000  " }}
                  >
                    {" "}
                    Recat Native
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/hire-developers/qa"
                    style={{ textDecoration: "none", color: "#000  " }}
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
                    style={{ textDecoration: "none", color: "#000  " }}
                  >
                    {" "}
                    eCommerce
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/industries/healthcare"
                    style={{ textDecoration: "none", color: "#000  " }}
                  >
                    {" "}
                    Healthcare
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/industries/media-and-entertainment"
                    style={{ textDecoration: "none", color: "#000  " }}
                  >
                    {" "}
                    Entertainment
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/industries/banking-and-finance"
                    style={{ textDecoration: "none", color: "#000  " }}
                  >
                    {" "}
                    Finance & Banking
                  </Link>
                </Typography>
                <Typography className={classes.LinkStyle}>
                  <Link
                    to="/industries/banking-and-finance"
                    style={{ textDecoration: "none", color: "#000  " }}
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
