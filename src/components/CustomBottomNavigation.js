import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Hidden from "@material-ui/core/Hidden";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import grey from "@material-ui/core/colors/grey";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  bottomNavigation: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      position: "fixed",
      bottom: 0,
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.only("md")]: {
      flexDirection: "column",
      minHeight: 420,
      width: 96,
      position: "fixed",
      top: 64,
      left: 0,
    },
  },
}));

const styles = (theme) => ({
  root: {
    [theme.breakpoints.only("md")]: {
      flex: 0,
      padding: "25px 5px 8px",
      "&$selected": {
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
      <BottomNavigation
        className={classes.bottomNavigation}
        value={props.value}
        showLabels
        onChange={props.handleChange}
      >
        {props.drawercontent.map(
          (content) =>
            !content.permanent && (
              <BottomNavigationAction
                key={content.title}
                classes={actionClasses}
                onClick={() => props.setAppBarTitle(content.title)}
                label={content.title}
                component={Link}
                to={content.title.toLowerCase()}
                value={content.title.toLowerCase()}
                icon={content.icon}
              />
            )
        )}
      </BottomNavigation>
    </Hidden>
  );
};

export default withStyles(styles)(CustomBottomNavigation);
