import React from "react";
import notes from "./assets/notes.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: "90%",
    display: "block",
    height: "auto",
  },
}));

const Notes = () => {
  const classes = useStyles();
  return <img src={notes} alt="" className={classes.img} />;
};

export default Notes;
