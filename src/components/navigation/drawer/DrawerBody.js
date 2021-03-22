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

const drawerWidth = 260;

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
}));

const DrawerBody = ({ setAppBarTitle, navigationItems }) => {
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
        {navigationItems.map((content) => (
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
    </>
  );
};

export default DrawerBody;
