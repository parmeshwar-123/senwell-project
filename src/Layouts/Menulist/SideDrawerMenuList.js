import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core";
import { menu } from "../MenuApi/SideDrawerMenuApi";
import { hasChildren } from "./utils";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  Menuitems: {
    justifyContent: "space-between",
    fontFamily: "'Poppins', sans-serif",
    // color:"#2760a8",
    // fontWeight:'700',
    // textTransform:'',
  },
}));

export default function App() {
  return menu.map((item, key) => <MenuItem key={key} item={item} />);
}

const MenuItem = ({ item }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item} />;
};

const SingleLevel = ({ item }) => {
  const { items: children } = item;
  let activeStyle = {
    background:
      "linear-gradient(90deg, hsla(200, 73%, 52%, 1) 44%, hsla(220, 60%, 37%, 1) 100%)",
    color: "#fff",
    "& $listitem": {
      color: "#fff",
    },
  };
  const classes = useStyles();
  return (
    <ListItem
      button
      component={NavLink}
      to={item.Link}
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
      className={classes.Menuitems}
    >
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText primary={item.title} />
    </ListItem>
  );
};

const MultiLevel = ({ item }) => {
  const classes = useStyles();
  const { items: children } = item;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  let activeStyle = {
    background:
      "linear-gradient(90deg, hsla(200, 73%, 52%, 1) 44%, hsla(220, 60%, 37%, 1) 100%)",
    color: "#fff",
    "& $menuItemIcon": {
      color: "#fff",
    },
    "& $listitem": {
      color: "#fff",
    },
  };
  return (
    <React.Fragment>
      <ListItem
        button
        onClick={handleClick}
        component={NavLink}
        to="/company"
        // style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={classes.Menuitems}
      >
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children.map((child, key) => (
            <MenuItem key={key} item={child} to={item.Link} />
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};
