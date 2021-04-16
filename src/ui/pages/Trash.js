import React, { useEffect } from "react";
import { connect } from "react-redux";
import NoteItem from "../components/NoteItem";
import Container from "../components/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";
import { getNotesInTrash, deleteNote } from "../../store/actions/notes_action";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  largeIcon: {
    fontSize: "12em",
    color: "#80868b7a",
    marginBottom: "15px",
  },
  textStyle: {
    color: "#80868b",
  },
}));

const Trash = ({ notes: { trash, loading }, getNotesInTrash, deleteNote }) => {
  const classes = useStyles();

  useEffect(() => {
    getNotesInTrash();
    // eslint-disable-next-line
  }, []);

  if (loading || trash === null) {
    return (
      <Container>
        <div
          style={{
            height: "calc(100vh - 200px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </div>
      </Container>
    );
  }

  if (!loading && trash.length === 0 && trash !== null) {
    return (
      <Container>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <div
              style={{
                height: "calc(100vh - 250px)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <DeleteIcon className={classes.largeIcon} />
              <Typography variant="h5" className={classes.textStyle}>
                No Notes in Trash
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    );
  }

  return (
    <Container>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={6}
        style={{
          margin: 0,
          width: "100%",
        }}
      >
        {trash.map((item) => (
          <NoteItem
            key={item._id}
            title={item.todoTitle}
            content={item.todoContent}
            todoId={item._id}
            color={item.todoColor}
            deleteNote={deleteNote}
          />
        ))}
      </Grid>
    </Container>
  );
};

Trash.propTypes = {
  notes: PropTypes.object.isRequired,
  getNotesInTrash: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  notes: state.notes,
});

export default connect(mapStateToProps, { getNotesInTrash, deleteNote })(Trash);
