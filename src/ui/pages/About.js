import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "../components/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  largeIcon: {
    fontSize: "6em",
    color: "#80868b7a",
    marginBottom: "15px",
  },
  textStyle: {
    color: "#80868b",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <div
            style={{
              height: "calc(100vh - 250px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <InfoIcon className={classes.largeIcon} />
            <Typography
              className={classes.textStyle}
              variant="h6"
              align="center"
            >
              The app idea is shamelessly stolen from Google Keep, 
              <br />
              a software that I realy like
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
