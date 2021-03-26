import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
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

const CustomDrawerBody = (props) => {
  const classes = useStyles();
  return (
    <>
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
          {props.user.firstName + " " + props.user.lastName}
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
            key={content.title}
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
    </>
  );
};

export default CustomDrawerBody;
