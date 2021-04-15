import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { deepOrange } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import clsx from "clsx";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    height: 130,
  },
  drawerHeaderImage: {
    margin: theme.spacing(1, 0, 0, 2.5),
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    "&:hover": {
      cursor: "pointer",
    },
  },
  drawerHeaderTitle: {
    fontWeight: "bold",
    margin: theme.spacing(2, 0, 0, 2.5),
  },
  drawerHeaderSubtitle: {
    margin: theme.spacing(0, 0, 0, 2.5),
  },
  logoutButton: {
    margin: theme.spacing(1, 0, 0, 0),
  },
  drawerItems: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  list: {
    padding: "0px",
  },
  listItemColor: {
    backgroundColor: "#3f51b514",
    color: "#3f51b5",
  },
  listItemHoverColor: {
    "&:hover": {
      backgroundColor: "#3f51b514",
    },
  },
  listItemIconColor: {
    color: "#3f51b5",
  },
}));

const capitalizeFirstLetter = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const CustomDrawerBody = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogoutAndClose = () => {
    props.logout();
    setOpen(false);
  };

  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        className={classes.drawerHeader}
      >
        <Avatar onClick={handleClickOpen} className={classes.drawerHeaderImage}>
          {props.user.firstName.charAt(0).toUpperCase()}
        </Avatar>
        <Typography
          variant="subtitle2"
          noWrap
          className={classes.drawerHeaderTitle}
        >
          {capitalizeFirstLetter(props.user.firstName) +
            " " +
            capitalizeFirstLetter(props.user.lastName)}
        </Typography>
        <Typography
          variant="caption"
          noWrap
          className={classes.drawerHeaderSubtitle}
        >
          {props.user.email}
        </Typography>
      </Grid>
      <Divider />
      <List className={classes.list}>
        {props.navigationItems.map((content) => (
          <ListItem
            key={content.title}
            className={clsx(classes.listItemHoverColor, {
              [classes.drawerItems]: !content.permanent,
              [classes.listItemColor]:
                content.title === props.selectedNavigation,
              [classes.listItemHoverColor]:
                content.title !== props.selectedNavigation,
            })}
            button
            onClick={() => {
              props.setAppBarTitle(content.title);
              props.handleSelectedChange(content.title);
            }}
            component={Link}
            to={content.title.toLowerCase()}
          >
            <ListItemIcon
              className={clsx({
                [classes.listItemIconColor]:
                  content.title === props.selectedNavigation,
              })}
            >
              {content.icon}
            </ListItemIcon>
            <ListItemText primary={content.title} />
          </ListItem>
        ))}
      </List>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Todo list app"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to logout from the application ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={handleLogoutAndClose} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CustomDrawerBody;
