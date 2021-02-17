/* eslint-disable */
import React, { useState } from "react";
import { Drawer, IconButton, List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  linkText: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: "black"
  },
});

const SideDrawer = ({ navLinks }) => {
  const classes = useStyles();
  const [state, setState] = useState({ left: false })

  const toggleDrawer = (anchor, open) => event => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return
    }
    setState({ [anchor]: open })
  };

  const sideDrawerList = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="nav">
        {navLinks.map(({ title, path }) => (
          <a href={path} key={title} className={classes.linkText}>
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          </a>
        ))}
      </List>
    </div>
  );

  return (
    <>
    <IconButton 
      edge="start"
      aria-label="menu"
      onClick={toggleDrawer("left", true)}>
      <MenuIcon 
        fontSize="large"
        style={{ color: "white" }}
      />
    </IconButton>

    <Drawer
      anchor="left"
      open={state.left}
      onOpen={toggleDrawer("left", true)}
      onClose={toggleDrawer("left", false)}
    >
      {sideDrawerList("left")}
    </Drawer>
    </>
  )
};

export default SideDrawer;
