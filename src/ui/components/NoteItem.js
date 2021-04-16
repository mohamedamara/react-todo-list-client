import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const useStyles = makeStyles({
  root: {
    // minWidth: 275,
    borderRadius: "12px",
    border: "1px solid #e0e0e0",
    "&:hover": {
      cursor: "pointer",
      "& $cardButton": {
        visibility: "visible",
        opacity: "1",
      },
    },
  },
  cardButton: {
    visibility: "hidden",
    opacity: "0",
    transition: "visibility 0.3s linear,opacity 0.3s linear",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 8,
  },
});

const NoteItem = (props) => {
  const classes = useStyles();
  const [cardElevation, setCardElevation] = useState(0);

  const hanldeDelete = () => {
    if (props.deleteNote === undefined) {
      props.moveToTrash(props.todoId);
    } else {
      props.deleteNote(props.todoId);
    }
  };

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card
        classes={{ root: classes.root }}
        elevation={cardElevation}
        onMouseOver={() => setCardElevation(4)}
        onMouseOut={() => setCardElevation(0)}
      >
        <CardHeader
          action={
            <IconButton
              onClick={hanldeDelete}
              aria-label="delete"
              className={classes.cardButton}
            >
              <DeleteOutlineIcon />
            </IconButton>
          }
          title={props.title}
          subheader="13/04/2021"
        />
        <CardContent>
          <Typography variant="body1" component="p">
            {props.content}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default NoteItem;
