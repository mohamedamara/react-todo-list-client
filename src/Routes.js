import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import NavigationRail from "./components/NavigationRail";
import Signup from "./components/auth/Signup";
import Signin from "./components/auth/Signin";
import Notes from "./components/Notes";
import Reminders from "./components/Reminders";
import Archive from "./components/Archive";
import Trash from "./components/Trash";
import Settings from "./components/Settings";
import About from "./components/About";

const Routes = ({ location }) => {
  const locationPath = location.pathname;
  return (
    <div>
      {locationPath !== "/signin" && locationPath !== "/signup" && (
        <NavigationRail />
      )}
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/reminders" component={Reminders} />
        <Route path="/archive" component={Archive} />
        <Route path="/trash" component={Trash} />
        <Route path="/settings" component={Settings} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
};

export default withRouter(Routes);
