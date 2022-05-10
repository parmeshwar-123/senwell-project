import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Container,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Logo from "../images/logo/logo.png";
import { Link, NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SideDrawer from "./SideDrawer";
import Drawer from "@material-ui/core/Drawer";
import MenuItems from "./Menulist/CompanyMenuList";
import Industriesmegamenu from "./Menulist/industriesmegamenu";
import TechMenuItems from "./Menulist/TechnologiesMenuList";
import ServiceMenuItems from "./Menulist/ServicesMenuList";
import IndustriesMenuItems from "./Menulist/IndustriesMenuList";
import { useParams, useLocation } from "react-router-dom";
import "./style.css";
// import './Navbar.css'
const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "block",
    color: "#000",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  logo: {
    display: "flex",
    [theme.breakpoints.up("lg")]: {},
  },
  LogoImg: {
    width: "3.5rem",
    height: "2.7rem",
    margin: "1.3rem 0rem 0.7rem 0rem",
    [theme.breakpoints.down("md")]: {
      width: "3.5rem",
      height: "2.7rem",
    },
  },
  logoTitle: {
    margin: "0",
    fontSize: "1.5rem",
    marginTop: "1.5rem",
    paddingTop: "0px",
    color: "#000",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.2rem",
      marginTop: "1.5rem",
      lineHeight: "1.3rem",
    },
  },
  slogan: {
    fontSize: "0.7rem",
    fontStyle: "italic",
    marginTop: "4px",
    paddingTop: "0px",
    color: "#000",
    lineHeight: "0.3rem",
    marginLeft: "62px",
    [theme.breakpoints.down("md")]: {
      marginTop: "8px",
      fontSize: "0.6rem",
      marginLeft: "44px",
    },
  },
  mainContainer: {
    background: "#fff",
    boxShadow: "  0 2px 2px -2px rgba(0,0,0,.2)",
    "& .MuiPaper-elevation4": {
      boxShadow:
        "0px 2px 2px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
    },
  },
  MenuItem: {
    padding: "1rem 5rem 1rem 2rem",
    "&:hover": {
      backgroundColor: "rgb(7, 177, 77, 0.42)",
    },
  },
  ButtonStyle: {
    [theme.breakpoints.up("lg")]: {
      // padding: '0.5rem 0.7rem',
      padding: "16px 8px",

      fontSize: "0.9rem",
    },
    padding: "10px 16px !important",
    borderRadius: "60px",
    fontSize: "0.7rem",
    fontWeight: "600",
    boxSize: "border-box",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    transition: "transform .3s linear",
    color: "#074da2",
  },
  drawerPaper: {
    width: drawerWidth,
    flexShrink: 0,
  },
  Menu: {
    marginTop: "4rem",
  },

  ContactButton: {
    padding: "0.2rem 1.8rem",
    margin: "0 1rem",
    color: "#000",
    borderRadius: "25rem",
    fontSize: "0.5rem",
    border: "0.1rem solid #3D8ED7",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "700",
    transition: "width 2s",
    transitionTimingFunction: "linear",

    "&:hover": {
      padding: "0.2rem 1.8rem",
      border: "0.1rem solid #3D8ED7",
      color: "#fff",
      background:
        "linear-gradient(90deg, hsla(200, 73%, 52%, 1) 44%, hsla(220, 60%, 37%, 1) 100%)",
    },
    [theme.breakpoints.up("lg")]: {
      marginRight: "2.5rem",
      fontSize: "1rem",
    },
  },
  Menuitems: {
    position: "relative",
    zIndex: "2",
    display: "block",
    letterSpacing: "0.01rem",
    padding: "1rem 1rem",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "1.25rem",
    transition: "0.2s",
  },
}));
const Navbar = ({ slug }) => {
  // const{name} =useParams();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("/hire-developer/front-end");
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  let activeStyle = {
    color: "#fff",
    padding: "10px 16px !important",
    borderRadius: "60px",
    background:
      "linear-gradient(90deg, hsla(200, 73%, 52%, 1) 44%, hsla(220, 60%, 37%, 1) 100%)",
    // textDecoration: 'underline',
    // borderBottom: '1px solid blue',
  };

  const { pathname } = useLocation();
  // const match =  pathname.match('/hire-developers/front-end') ?alert("success"):alert("false")
  return (
    <>
      <AppBar position="fixed" elevation={0} className={classes.mainContainer}>
        <Container maxWidth="lg" style={{ padding: "0" }}>
          <Toolbar style={{ margin: "0", padding: "0" }}>
            <Link to="/" style={{ textDecoration: "none", flexGrow: 1 }}>
              <Typography className={classes.logo} style={{ flexGrow: 1 }}>
                <img src={Logo} className={classes.LogoImg} alt="" />
                <div>
                  <h3 className={classes.logoTitle}> Senwell Solutions </h3>
                  <p textAlign="right" className={classes.slogan}>
                    Empowered by Innovation...
                  </p>
                </div>
              </Typography>
            </Link>
            <div className={classes.sectionDesktop}>
              <div class="main-menu">
                <nav>
                  <ul>
                    <li class="has-dropdown">
                      <Button
                        className={classes.ButtonStyle}
                        component={NavLink}
                        to="/company"
                        style={({ isActive }) =>
                          pathname.match(`/outsourcing-pricing-models`) ||
                          pathname.match(`/careers`) ||
                          isActive
                            ? activeStyle
                            : undefined
                        }
                      >
                        Company
                      </Button>

                      <ul class="sub-menu">
                        <li>
                          <MenuItems />
                        </li>
                      </ul>
                    </li>
                    <li class="has-dropdown">
                      <Button
                        className={classes.ButtonStyle}
                        component={NavLink}
                        to="/services/ui-ux-design"
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                      >
                        Services
                      </Button>

                      <ul class="sub-menu">
                        <li>
                          <ServiceMenuItems />
                        </li>
                      </ul>
                    </li>
                    <li class="has-dropdown">
                      <Button
                        className={classes.ButtonStyle}
                        component={NavLink}
                        to="/hire-developers/front-end"
                        style={({ isActive }) =>
                          pathname.match(`/hire-developers/${slug}`) || isActive
                            ? activeStyle
                            : undefined
                        }
                      >
                        Technologies
                      </Button>

                      <ul class="sub-menu">
                        <li>
                          <TechMenuItems />
                        </li>
                      </ul>
                    </li>

                    <li class="has-dropdown has-megaitem">
                      <Button
                        className={classes.ButtonStyle}
                        component={NavLink}
                        to="/industries/ecommerce"
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                      >
                        Industries
                      </Button>

                      <div class="mega-menu">
                        <ul class="mega-menu-inner">
                          <li class="mega-menu-item">
                            <ul class="mega-menu-sub">
                              <li>
                                <IndustriesMenuItems />
                              </li>
                            </ul>
                          </li>

                          <li class="mega-menu-item">
                            <ul class="mega-menu-sub">
                              <li>
                                <Industriesmegamenu />
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div class="menu-banner">
                          <a href="" class="menu-banner-link"></a>
                        </div>
                      </div>
                    </li>
                    <Button
                      className={classes.ButtonStyle}
                      component={NavLink}
                      to="/portfolio"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      Portfolio
                    </Button>

                    <Button
                      className={classes.ButtonStyle}
                      component={NavLink}
                      to="/contact"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      Contact{" "}
                    </Button>
                  </ul>
                </nav>
              </div>
            </div>
            <IconButton
              className={classes.sectionMobile}
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
            >
              <HiOutlineMenuAlt3
                style={{ paddingRight: "1rem", fontSize: "2rem" }}
              />
            </IconButton>
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="right"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <SideDrawer close={handleDrawerClose} />
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
