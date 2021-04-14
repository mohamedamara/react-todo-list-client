import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";

const useStyles = makeStyles({
  root: {
    // minWidth: 275,
    borderRadius: "12px",
    border: "1px solid #e0e0e0",
    "&:hover": {
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
        onMouseOver={() => setCardElevation(2)}
        onMouseOut={() => setCardElevation(0)}
      >
        <CardHeader
          action={
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <IconButton aria-label="color" className={classes.cardButton}>
                  <ColorLensOutlinedIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  onClick={hanldeDelete}
                  aria-label="delete"
                  className={classes.cardButton}
                >
                  <DeleteOutlineIcon />
                </IconButton>
              </Grid>
            </Grid>
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
