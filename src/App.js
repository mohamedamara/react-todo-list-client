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
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { Provider } from "react-redux";
import store from "./store/store";

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

const RegisterContainer = () => <Route path="/register" component={Register} />;
const LoginContainer = () => <Route path="/login" component={Login} />;
const DefaultContainer = () => {
  const classes = useStyles();
  return (
    <>
      <NavigationRail />
      <div className={classes.offset} />
      <div>
        <Container maxWidth="md" className={classes.container}>
          <Redirect exact from="/" to="notes" />
          <Route path="/reminders" component={Reminders} />
          <Route path="/archive" component={Archive} />
          <Route path="/trash" component={Trash} />
          <Route path="/settings" component={Settings} />
          <Route path="/about" component={About} />
          <Route path="/notes" component={Notes} />
        </Container>
      </div>
    </>
  );
};

const App = () => {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={themeLight}>
        <Router>
          <div className={classes.root}>
            <CssBaseline />
            <Switch>
              <Route exact path="/register" component={RegisterContainer} />
              <Route exact path="/login" component={LoginContainer} />
              <Route component={DefaultContainer} />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;
