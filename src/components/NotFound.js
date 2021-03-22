import React from "react";
import Box from "@material-ui/core/Box";
import pageNotFound from "../assets/page_not_found.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  image: {
    height: "auto",
    maxWidth: "50%",
    display: "block",
  },
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <img src={pageNotFound} alt="page not found" className={classes.image} />
    </Box>
  );
};

export default NotFound;
