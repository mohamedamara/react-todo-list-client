import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import NavigationRail from "./components/navigation/NavigationRail";
import Signup from "./components/auth/Signup";
import Signin from "./components/auth/Signin";
import Notes from "./components/notes/Notes";
import Archive from "./components/Archive";
import Trash from "./components/Trash";
import Settings from "./components/Settings";
import About from "./components/About";
import NotFound from "./components/NotFound";

const Routes = ({ location }) => {
  const locationPath = location.pathname;
  return (
    <div>
      {locationPath !== "/signin" &&
        locationPath !== "/signup" &&
        locationPath !== "/404" && <NavigationRail />}
      <Switch>
        <Redirect exact from="/" to="notes" />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/notes" component={Notes} />
        <Route path="/archive" component={Archive} />
        <Route path="/trash" component={Trash} />
        <Route path="/settings" component={Settings} />
        <Route path="/about" component={About} />
        <Route path="/404" component={NotFound} />
        <Redirect to="404" />
      </Switch>
    </div>
  );
};

export default withRouter(Routes);
