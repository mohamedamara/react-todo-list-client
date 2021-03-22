import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import CustomDrawerBody from "./CustomDrawerBody";

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
          <CustomDrawerBody
            setAppBarTitle={props.setAppBarTitle}
            navigationItems={props.navigationItems}
            selectedNavigation={props.selectedNavigation}
            handleSelectedChange={props.handleSelectedChange}
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
          <CustomDrawerBody
            setAppBarTitle={props.setAppBarTitle}
            navigationItems={props.navigationItems}
            selectedNavigation={props.selectedNavigation}
            handleSelectedChange={props.handleSelectedChange}
          />
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default CustomDrawer;
