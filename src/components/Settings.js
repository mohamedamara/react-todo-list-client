import React from "react";
import settings from "./assets/settings.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: "90%",
    display: "block",
    height: "auto",
  },
}));

const Settings = () => {
  const classes = useStyles();
  return <img src={settings} alt="" className={classes.img} />;
};

export default Settings;
