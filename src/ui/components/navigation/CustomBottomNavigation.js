import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import grey from "@material-ui/core/colors/grey";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  bottomNavigation: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      position: "fixed",
      bottom: "0px",
      backgroundColor: theme.palette.primary.main,
      zIndex: "9999",
    },
    [theme.breakpoints.only("md")]: {
      flexDirection: "column",
      minHeight: "420px",
      width: "96px",
      position: "fixed",
      top: "0px",
      left: "0px",
      transition: "min-height 0.5s ease",
    },
  },
  divider: {
    [theme.breakpoints.only("md")]: {
      minHeight: "420px",
      width: "1px",
      position: "fixed",
      top: "0px",
      left: "96px",
    },
  },
  removeFab: {
    [theme.breakpoints.only("md")]: {
      minHeight: "300px",
      transition: "min-height 0.5s ease",
    },
  },
}));

const styles = (theme) => ({
  root: {
    [theme.breakpoints.only("md")]: {
      flex: 0,
      padding: "25px 5px 8px",
      "&$selected": {
        color: "#3f51b5",
        padding: "25px 5px 8px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      color: grey[400],
      opacity: 0.7,
      "&$selected": {
        color: "white",
        opacity: 1,
      },
    },
  },
  selected: {},
});

const CustomBottomNavigation = (props) => {
  const actionClasses = props.classes;
  const classes = useStyles();
  return (
    <Hidden lgUp implementation="css">
      <div>
        <BottomNavigation
          className={clsx(classes.bottomNavigation, {
            [classes.removeFab]: !props.showFab(),
          })}
          value={props.selectedNavigation}
          showLabels
          onChange={(event, newValue) => {
            props.handleSelectedChange(newValue);
          }}
        >
          {props.navigationItems.map(
            (content) =>
              !content.permanent && (
                <BottomNavigationAction
                  key={content.title}
                  classes={actionClasses}
                  onClick={() => props.setAppBarTitle(content.title)}
                  label={content.title}
                  component={Link}
                  to={content.title.toLowerCase()}
                  value={content.title}
                  icon={content.icon}
                />
              )
          )}
        </BottomNavigation>
        <Divider orientation="vertical" className={classes.divider} />
      </div>
    </Hidden>
  );
};

export default withStyles(styles)(CustomBottomNavigation);
