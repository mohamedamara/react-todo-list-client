import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import NavigationRail from "./ui/components/navigation/NavigationRail";
import Register from "./ui/pages/Register";
import Login from "./ui/pages/Login";
import Notes from "./ui/pages/Notes";
import Archive from "./ui/pages/Archive";
import Trash from "./ui/pages/Trash";
import Settings from "./ui/pages/Settings";
import About from "./ui/pages/About";
import NotFound from "./ui/pages/NotFound";

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
