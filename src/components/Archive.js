import React from "react";
import archive from "./assets/archive.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: "80%",
    display: "block",
    height: "auto",
  },
}));

const Archive = () => {
  const classes = useStyles();
  return <img src={archive} alt="" className={classes.img} />;
};

export default Archive;
