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
import { loadUser, logout } from "../../../store/actions/auth_action";
import { addNote } from "../../../store/actions/notes_action";
import AddNote from "../../components/AddNote";
import Fade from "@material-ui/core/Fade";
import { useLocation } from "react-router-dom";

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

const NavigationRail = ({
  auth: { user, loading },
  loadUser,
  logout,
  addNote,
}) => {
  const classes = useStyles();

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const capitalizeFirstLetter = (text) => {
    if (text === "") return "Notes";
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const location = useLocation();
  const currentRoute = location.pathname.substring(1);
  const currentNavigationNalue = capitalizeFirstLetter(currentRoute);

  const showFab = () => {
    return location.pathname === "/notes" || location.pathname === "/";
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [addNoteDialog, setAddNoteDialog] = useState(false);

  const [appBarTitle, setAppBarTitle] = useState(currentNavigationNalue);
  const handleDrawerToggle = () => setIsDrawerOpen(!isDrawerOpen);

  const [selectedNavigation, setSelectedNavigation] = useState(
    currentNavigationNalue
  );
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
      <Fade in={showFab()} timeout={200}>
        <Fab
          onClick={() => setAddNoteDialog(true)}
          color="secondary"
          aria-label="add"
          className={classes.fab}
        >
          <AddIcon />
        </Fab>
      </Fade>
      <CustomDrawer
        handleDrawerToggle={handleDrawerToggle}
        isDrawerOpen={isDrawerOpen}
        setAppBarTitle={setAppBarTitle}
        navigationItems={navigationItems}
        selectedNavigation={selectedNavigation}
        handleSelectedChange={handleSelectedChange}
        user={user}
        logout={logout}
      />
      <CustomBottomNavigation
        selectedNavigation={selectedNavigation}
        handleSelectedChange={handleSelectedChange}
        navigationItems={navigationItems}
        setAppBarTitle={setAppBarTitle}
        showFab={showFab}
      />
      <AddNote
        isOpen={addNoteDialog}
        close={() => setAddNoteDialog(false)}
        addNote={addNote}
      />
    </>
  );
};

NavigationRail.propTypes = {
  auth: PropTypes.object.isRequired,
  notes: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  addNote: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  notes: state.notes,
});

export default connect(mapStateToProps, { loadUser, logout, addNote })(
  NavigationRail
);
