import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "./Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    lineHeight: 1.6,
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Container>
      <Typography className={classes.text} variant="h6" align="center">
        The project idea is shamelessly stolen from Google Keep, a software that
        I realy like
      </Typography>
    </Container>
  );
};

export default About;
