import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddOrModifyNote from "./AddOrModifyNote";
import CustomSnackbar from "./CustomSnackbar";
import RestoreFromTrashOutlinedIcon from "@material-ui/icons/RestoreFromTrashOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import Moment from "react-moment";

const useStyles = makeStyles((theme) => ({
  root: {
    // minWidth: 275,
    borderRadius: "12px",
    border: "1px solid #e0e0e0",
    "&:hover": {
      cursor: "pointer",
      "& $cardButton": {
        visibility: "visible",
        opacity: "1",
        transition: "visibility 0.3s linear,opacity 0.3s linear",
      },
    },
  },
  cardButton: {
    visibility: "hidden",
    opacity: "0",
    transition: "visibility 0.3s linear,opacity 0.3s linear",
    [theme.breakpoints.down("sm")]: {
      visibility: "visible",
      opacity: "1",
      transition: "visibility 0.3s linear,opacity 0.3s linear",
    },
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 8,
  },
}));

const NoteItem = (props) => {
  const classes = useStyles();
  const [cardElevation, setCardElevation] = useState(0);
  const [addNoteDialog, setAddNoteDialog] = useState(false);
  const [snackPack, setSnackPack] = useState([]);

  const hanldeDelete = (event) => {
    event.stopPropagation();
    if (props.isTrash) {
      props.deleteNote(props.todoId);
    } else {
      const updatedTodo = {
        _id: props.todoId,
        todoTitle: props.title,
        todoContent: props.content,
        keepInTrash: true,
      };
      props.moveToTrash(updatedTodo);
    }
  };

  const hanldeRestore = (event) => {
    event.stopPropagation();
    const updatedTodo = {
      _id: props.todoId,
      todoTitle: props.title,
      todoContent: props.content,
      todoColor: props.color,
      keepInTrash: false,
    };
    props.restoreNote(updatedTodo);
  };

  const cardClickHandler = () => {
    if (props.isTrash) {
      showSnackbar("Can't edit in Trash");
    } else {
      setAddNoteDialog(true);
    }
  };

  const showSnackbar = (message) => {
    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
  };

  return (
    <>
      <Card
        classes={{ root: classes.root }}
        elevation={cardElevation}
        onMouseOver={() => setCardElevation(4)}
        onMouseOut={() => setCardElevation(0)}
        onClick={cardClickHandler}
        style={{ backgroundColor: props.color }}
      >
        <CardHeader
          action={
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              {props.isTrash && (
                <Grid item>
                  <Tooltip title="Restore">
                    <IconButton
                      onClick={hanldeRestore}
                      aria-label="restore"
                      className={classes.cardButton}
                    >
                      <RestoreFromTrashOutlinedIcon />
                    </IconButton>
                  </Tooltip>
                </Grid>
              )}
              <Grid item>
                <Tooltip
                  title={props.isTrash ? "Delete forever" : "Move to trash"}
                >
                  <IconButton
                    onClick={hanldeDelete}
                    aria-label="delete"
                    className={classes.cardButton}
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          }
          title={props.title}
          subheader={<Moment format="DD/MM/YYYY">{props.date}</Moment>}
        />
        <CardContent>
          <Typography variant="body1" component="p">
            {props.content}
          </Typography>
        </CardContent>
      </Card>
      <AddOrModifyNote
        isOpen={addNoteDialog}
        close={() => setAddNoteDialog(false)}
        isUpdate={true}
        todoId={props.todoId}
        title={props.title}
        content={props.content}
        updateNote={props.updateNote}
        color={props.color}
      />
      <CustomSnackbar snackPack={snackPack} setSnackPack={setSnackPack} />
    </>
  );
};

export default NoteItem;
