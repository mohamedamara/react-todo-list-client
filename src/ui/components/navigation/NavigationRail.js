import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Fab from "@material-ui/core/Fab";
import CircularProgress from "@material-ui/core/CircularProgress";
import CustomAppBar from "./CustomAppBar";
import AddIcon from "@material-ui/icons/Add";
import CustomBottomNavigation from "./CustomBottomNavigation";
import CustomDrawer from "./drawer/CustomDrawer";
import { makeStyles } from "@material-ui/core/styles";
import { navigationItems } from "./constants";
import PropTypes from "prop-types";
import { loadUser } from "../../../store/actions/auth_action";

const useStyles = makeStyles((theme) => ({
  fab: {
    [theme.breakpoints.down("sm")]: {
      zIndex: 1101,
      position: "fixed",
      right: 16,
      bottom: 72,
    },
    [theme.breakpoints.only("md")]: {
      zIndex: 1101,
      position: "fixed",
      left: 20,
      top: 72,
    },
    [theme.breakpoints.up("lg")]: {
      zIndex: 1101,
      position: "fixed",
      right: 50,
      top: 70,
    },
  },
}));

const NavigationRail = ({ auth: { user, loading }, loadUser }) => {
  const classes = useStyles();

  useEffect(() => {
    // setTimeout(function () {
    //   loadUser();
    // }, 5000);
    loadUser();
    // eslint-disable-next-line
  }, []);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [appBarTitle, setAppBarTitle] = useState("Notes");
  const handleDrawerToggle = () => setIsDrawerOpen(!isDrawerOpen);

  const [selectedNavigation, setSelectedNavigation] = useState("Notes");
  const handleSelectedChange = (newValue) => setSelectedNavigation(newValue);

  if (loading || user === null) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <>
      <CustomAppBar
        appBarTitle={appBarTitle}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Fab color="secondary" aria-label="add" className={classes.fab}>
        <AddIcon />
      </Fab>
      <CustomDrawer
        handleDrawerToggle={handleDrawerToggle}
        isDrawerOpen={isDrawerOpen}
        setAppBarTitle={setAppBarTitle}
        navigationItems={navigationItems}
        selectedNavigation={selectedNavigation}
        handleSelectedChange={handleSelectedChange}
        user={user}
      />
      <CustomBottomNavigation
        selectedNavigation={selectedNavigation}
        handleSelectedChange={handleSelectedChange}
        navigationItems={navigationItems}
        setAppBarTitle={setAppBarTitle}
      />
    </>
  );
};

NavigationRail.propTypes = {
  auth: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loadUser })(NavigationRail);
