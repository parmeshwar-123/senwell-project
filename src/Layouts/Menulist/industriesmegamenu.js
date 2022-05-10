import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { IndustriesMegamenu } from "../MenuApi/MenuitemsApi";
import { hasChildren } from "./utils";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  Menuitems: {
    fontFamily: "'Poppins', sans-serif",
  },
  menuItemtext: {
    //  color: '#074da2',
    fontWeight: "600",
  },
}));
export default function App() {
  return IndustriesMegamenu.map((item, key) => (
    <MenuItem key={key} item={item} />
  ));
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
    // borderBottom:' 1px solid #ccc',
    color: "#fff",
    "& $menuItemIcon": {
      color: "#fff",
    },
    "& $MenuItemtext": {
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
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <ListItem>
        <ListItemText primary={item.title} />
        <ArrowRightIcon className={classes.menuItemIcon} />
      </ListItem>
    </>
  );
};
