import React, { useState } from "react";
import { MdDoubleArrow } from "react-icons/md";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { makeStyles, Typography } from "@material-ui/core";
import { NavLink, Link } from "react-router-dom";
import { menu } from "../MenuApi/MenuitemsApi";
import { hasChildren } from "./utils";
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
    <>
      <div className="subdropdown">
        <div className="subdropbtn">
          <ListItem
            button
            component={NavLink}
            to={item.Link}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={classes.Menuitems}
          >
            {item.title}
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
