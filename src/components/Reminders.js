import React from "react";
import reminder from "./assets/reminder.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: "90%",
    display: "block",
    height: "auto",
  },
}));

const Reminders = () => {
  const classes = useStyles();
  return <img src={reminder} alt="" className={classes.img} />;
};

export default Reminders;
