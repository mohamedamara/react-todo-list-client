import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.only("xs")]: {
      marginTop: "70px",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "80px",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "100px",
      marginLeft: "120px",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "155px",
      marginLeft: "260px",
    },
  },
}));

const Container = (props) => {
  const classes = useStyles();
  return <div className={classes.container}>{props.children}</div>;
};

export default Container;
