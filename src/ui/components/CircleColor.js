import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles((theme) => ({
  circleStyle: {
    height: "30px",
    width: "30px",
    backgroundColor: (props) => props.backgroundColor,
    border: "1px solid transparent",
    borderRadius: "50%",
    borderColor: (props) =>
      props.selectedColor === props.backgroundColor
        ? "#777"
        : props.borderColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "15px",
    textAlign: "center",
    "&:hover": {
      cursor: "pointer",
      borderColor: "#777",
    },
  },
}));

const CircleColor = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.circleStyle} onClick={props.onClick}>
      {props.selectedColor === props.backgroundColor && (
        <DoneIcon style={{ color: "#777" }} />
      )}
    </div>
  );
};

export default CircleColor;
