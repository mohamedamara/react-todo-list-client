import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import DrawerBody from "./DrawerBody";

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("lg")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

const CustomDrawer = (props) => {
  const classes = useStyles();
  return (
    <nav className={classes.drawer} aria-label="navigations">
      <Hidden lgUp implementation="css">
        <Drawer
          variant="temporary"
          open={props.isDrawerOpen}
          onClose={props.handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <DrawerBody
            setAppBarTitle={props.setAppBarTitle}
            navigationItems={props.navigationItems}
          />
        </Drawer>
      </Hidden>
      <Hidden mdDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <DrawerBody
            setAppBarTitle={props.setAppBarTitle}
            navigationItems={props.navigationItems}
          />
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default CustomDrawer;
