import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import NavigationRail from "./components/navigation/NavigationRail";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
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
      {locationPath !== "/register" &&
        locationPath !== "/login" &&
        locationPath !== "/404" && <NavigationRail />}
      <Switch>
        <Redirect exact from="/" to="notes" />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
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
