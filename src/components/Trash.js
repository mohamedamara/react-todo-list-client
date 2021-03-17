import React from "react";
import trash from "./assets/trash.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: "90%",
    display: "block",
    height: "auto",
  },
}));

const Trash = () => {
  const classes = useStyles();
  return <img src={trash} alt="" className={classes.img} />;
};

export default Trash;
