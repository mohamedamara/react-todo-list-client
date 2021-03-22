import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import CustomAppBar from "./CustomAppBar";
import AddIcon from "@material-ui/icons/Add";
import CustomBottomNavigation from "./CustomBottomNavigation";
import CustomDrawer from "./drawer/CustomDrawer";
import { makeStyles } from "@material-ui/core/styles";
import { navigationItems } from "./constants";

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

const NavigationRail = () => {
  const classes = useStyles();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const [appBarTitle, setAppBarTitle] = useState("Notes");
  const handleDrawerToggle = () => setIsDrawerOpen(!isDrawerOpen);

  const [selectedNavigation, setSelectedNavigation] = useState("Notes");
  const handleSelectedChange = (newValue) => setSelectedNavigation(newValue);

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

export default NavigationRail;
