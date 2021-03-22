import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up("lg")]: {
      width: `calc(100% - 260px)`,
      marginLeft: "260px",
    },
  },
  toolbar: {
    [theme.breakpoints.up("lg")]: {
      minHeight: 100,
      alignItems: "flex-start",
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  title: {
    [theme.breakpoints.up("lg")]: {
      flexGrow: 1,
      alignSelf: "flex-end",
    },
  },
}));

const CustomAppBar = (props) => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          // edge="start"
          onClick={props.handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6" noWrap>
          {props.appBarTitle}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
