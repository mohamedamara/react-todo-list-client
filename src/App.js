import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import NavigationRail from "./components/NavigationRail";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Trash from "./components/Trash";
import Reminders from "./components/Reminders";
import Notes from "./components/Notes";
import Archive from "./components/Archive";
import Settings from "./components/Settings";
import About from "./components/About";

const themeLight = createMuiTheme({
  palette: {
    background: {
      default: "white",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  offset: {
    height: 90,
  },
  container: {
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      marginTop: "80px",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "160px",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "100px",
      marginLeft: "120px",
    },
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={themeLight}>
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <NavigationRail />
          <div className={classes.offset} />
          <Container maxWidth="md" className={classes.container}>
            <Switch>
              <Redirect exact from="/" to="notes" />
              <Route exact path="/reminders" component={Reminders} />
              <Route exact path="/archive" component={Archive} />
              <Route exact path="/trash" component={Trash} />
              <Route exact path="/settings" component={Settings} />
              <Route exact path="/about" component={About} />
              <Route exact path="/notes" component={Notes} />
            </Switch>
          </Container>
        </div>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
