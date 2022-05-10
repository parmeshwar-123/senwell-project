import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { MdDoubleArrow } from "react-icons/md";
import { makeStyles } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";

import { ServiceMenu } from "../MenuApi/MenuitemsApi";
import { hasChildren } from "./utils";
const useStyles = makeStyles((theme) => ({
  Menuitems: {
    fontFamily: "'Poppins', sans-serif",
    justifyContent: "space-between",

    "&:hover": {
      "& $menuItemIcon": {
        color: "#fff",
      },
    },
  },
}));

export default function App() {
  return ServiceMenu.map((item, key) => <MenuItem key={key} item={item} />);
}

const MenuItem = ({ item }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item} />;
};

const SingleLevel = ({ item }) => {
  const classes = useStyles();
  let activeStyle = {
    background:
      "linear-gradient(90deg, hsla(200, 73%, 52%, 1) 44%, hsla(220, 60%, 37%, 1) 100%)",
    color: "#fff",
    "& $menuItemIcon": {
      color: "#fff",
    },
  };

  return (
    <ListItem
      button
      className={classes.Menuitems}
      component={NavLink}
      to={item.Link}
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
    >
      {item.title}
    </ListItem>
  );
};

const MultiLevel = ({ item }) => {
  const classes = useStyles();

  const { items: children } = item;
  let activeStyle = {
    background:
      "linear-gradient(90deg, hsla(200, 73%, 52%, 1) 44%, hsla(220, 60%, 37%, 1) 100%)",
    color: "#fff",
    "& $menuItemIcon": {
      color: "#fff",
    },
  };
  return (
    <>
      <div className="subdropdown">
        <div className="subdropbtn">
          <ListItem
            button
            className={classes.Menuitems}
            component={NavLink}
            to={item.Link}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <ListItemText primary={item.title} />
            <ArrowRightIcon className={classes.menuItemIcon} />
          </ListItem>
        </div>

        <List className="subdropdown-content" component="div" disablePadding>
          {children.map((child, key) => (
            <div className="anchor">
              {" "}
              <MenuItem key={key} item={child} />
            </div>
          ))}
        </List>
      </div>
    </>
  );
};
