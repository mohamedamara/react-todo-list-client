import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
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
  content: {
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 3),
    },
    [theme.breakpoints.up("lg")]: {
      // padding: theme.spacing(5, 3),
    },
    [theme.breakpoints.only("md")]: {
      paddingLeft: "120px",
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
          <main className={classes.content}>
            <div className={classes.offset} />
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
              style={{ minHeight: "80vh" }}
            >
              <Grid item xs={9} md={8} lg={5}>
                <Switch>
                  <Redirect exact from="/" to="notes" />
                  <Route exact path="/reminders" component={Reminders} />
                  <Route exact path="/archive" component={Archive} />
                  <Route exact path="/trash" component={Trash} />
                  <Route exact path="/settings" component={Settings} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/notes" component={Notes} />
                </Switch>
              </Grid>
            </Grid>
          </main>
        </div>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
