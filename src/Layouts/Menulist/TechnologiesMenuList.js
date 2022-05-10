import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {MdDoubleArrow} from 'react-icons/md'

import ListItemText from "@material-ui/core/ListItemText";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { makeStyles } from "@material-ui/core";
import { Link,NavLink } from "react-router-dom";
import '../styles.css'
import { Techmenu } from "../MenuApi/MenuitemsApi";
import { hasChildren } from "./utils";
const useStyles =makeStyles((theme)=>({
  Menuitems:{
    justifyContent: 'space-between',
    fontFamily: "'Poppins', sans-serif",  

  '&:hover':{
    background: 'linear-gradient(90deg, hsla(200, 73%, 52%, 1) 44%, hsla(220, 60%, 37%, 1) 100%)',
    color:'#fff',
    '& $menuItemIcon':{
      color:'#fff',
    }
    
  },
  },
  Menuitemtext:{
    color: '#074da2',
    fontWeight:'600',
     }
     
  
 }))

 export default function App() {
  return Techmenu.map((item, key) => <MenuItem key={key} item={item} />);
}

const MenuItem = ({ item }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item} />;
};

const SingleLevel = ({ item }) => {
  let activeStyle ={
    background: 'linear-gradient(90deg, hsla(200, 73%, 52%, 1) 44%, hsla(220, 60%, 37%, 1) 100%)',
    color:'#fff',
    '& $menuItemIcon':{
      color:'#fff',
    }
   }
  const classes= useStyles();

  return (
    <ListItem button className={classes.Menuitems}  component={NavLink} to={item.Link} style={({ isActive }) =>
    isActive ? activeStyle : undefined }>
    {item.title} 
    </ListItem>
  );
};

const MultiLevel = ({ item }) => {
  const classes= useStyles();
  const { items: children } = item;
  let activeStyle ={
    background: 'linear-gradient(90deg, hsla(200, 73%, 52%, 1) 44%, hsla(220, 60%, 37%, 1) 100%)',
    color:'#fff',
    '& $menuItemIcon':{
      color:'#fff',
    }
   }
  return (
    <>
     <div className="subdropdown">
     <div className="subdropbtn">
        <ListItem button className={classes.Menuitems} component={NavLink} to={item.Link}  style={({ isActive }) =>
    isActive ? activeStyle : undefined } >
        {item.title}
        <ArrowRightIcon  className={classes.menuItemIcon}/>
      </ListItem>
      </div>
      
        <List className='subdropdown-content' component="div" disablePadding>
          {children.map((child, key) => (
          <div  className='anchor'>  <MenuItem  key={key} item={child} />
                              

          </div>
          ))}
        </List>
      
        </div>
      
    </>
  );
};
