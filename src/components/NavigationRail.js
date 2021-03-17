import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import MenuIcon from "@material-ui/icons/Menu";
import AssignmentIcon from "@material-ui/icons/Assignment";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArchiveIcon from "@material-ui/icons/Archive";
import SettingsIcon from "@material-ui/icons/Settings";
import DeleteIcon from "@material-ui/icons/Delete";
import InfoIcon from "@material-ui/icons/Info";
import { makeStyles } from "@material-ui/core/styles";
import CustomBottomNavigation from "./CustomBottomNavigation";
import { Link } from "react-router-dom";

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("lg")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerHeader: {
    height: 130,
  },
  drawerHeaderImage: {
    margin: theme.spacing(1, 0, 0, 2.5),
  },
  drawerHeaderTitle: {
    fontWeight: "bold",
    margin: theme.spacing(2, 0, 0, 2.5),
  },
  drawerHeaderSubtitle: {
    margin: theme.spacing(0, 0, 0, 2.5),
  },
  appBar: {
    [theme.breakpoints.up("lg")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  title: {
    [theme.breakpoints.up("lg")]: {
      flexGrow: 1,
      alignSelf: "flex-end",
    },
  },
  toolbar: {
    [theme.breakpoints.up("lg")]: {
      minHeight: 100,
      alignItems: "flex-start",
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
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
  drawerPaper: {
    width: drawerWidth,
  },
  bottomNavigation: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: theme.palette.primary.main,
  },
  drawerItems: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

const NavigationRail = () => {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [appBarTitle, setAppBarTitle] = useState("Notes");

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const [value, setValue] = useState("notes");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const drawercontent = [
    {
      title: "Notes",
      icon: <AssignmentIcon />,
      permanent: false,
    },
    {
      title: "Reminders",
      icon: <NotificationsIcon />,
      permanent: false,
    },
    {
      title: "Archive",
      icon: <ArchiveIcon />,
      permanent: false,
    },
    {
      title: "Trash",
      icon: <DeleteIcon />,
      permanent: false,
    },
    {
      title: "settings",
      icon: <SettingsIcon />,
      permanent: true,
    },
    {
      title: "About",
      icon: <InfoIcon />,
      permanent: true,
    },
  ];

  const drawerItems = (
    <div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        className={classes.drawerHeader}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
          className={classes.drawerHeaderImage}
        />
        <Typography
          variant="subtitle2"
          noWrap
          className={classes.drawerHeaderTitle}
        >
          John Doe
        </Typography>
        <Typography
          variant="caption"
          noWrap
          className={classes.drawerHeaderSubtitle}
        >
          johndoe@gmail.com
        </Typography>
      </Grid>
      <Divider />
      <List>
        {drawercontent.map((content) => (
          <ListItem
            className={!content.permanent ? classes.drawerItems : ""}
            button
            onClick={() => setAppBarTitle(content.title)}
            key={content.title}
            component={Link}
            to={content.title.toLowerCase()}
          >
            <ListItemIcon>{content.icon}</ListItemIcon>
            <ListItemText primary={content.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            // edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            {appBarTitle}
          </Typography>
        </Toolbar>
      </AppBar>
      <Fab color="secondary" aria-label="add" className={classes.fab}>
        <AddIcon />
      </Fab>
      <nav className={classes.drawer} aria-label="navigations">
        <Hidden lgUp implementation="css">
          <Drawer
            variant="temporary"
            open={isDrawerOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawerItems}
          </Drawer>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawerItems}
          </Drawer>
        </Hidden>
      </nav>
      <CustomBottomNavigation
        value={value}
        handleChange={handleChange}
        drawercontent={drawercontent}
        setAppBarTitle={setAppBarTitle}
      />
    </>
  );
};

export default NavigationRail;
