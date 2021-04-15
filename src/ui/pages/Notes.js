import React, { useEffect } from "react";
import { connect } from "react-redux";
import NoteItem from "../components/NoteItem";
import Container from "../components/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";
import { getNotes, moveToTrash } from "../../store/actions/notes_action";
import { makeStyles } from "@material-ui/core/styles";
import AssignmentIcon from "@material-ui/icons/Assignment";

const useStyles = makeStyles((theme) => ({
  largeIcon: {
    fontSize: "12em",
    color: "#80868b7a",
    marginBottom: "15px"
  },
  textStyle: {
    color: "#80868b",
  },
}));

const Notes = ({ notes: { notes, loading }, getNotes, moveToTrash }) => {
  const classes = useStyles();

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  if (loading || notes === null) {
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

  if (!loading && notes.length === 0 && notes !== null) {
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
              <AssignmentIcon className={classes.largeIcon} />
              <Typography variant="h5" className={classes.textStyle}>
                No Notes found
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
        {notes.map((item) => (
          <NoteItem
            key={item._id}
            title={item.todoTitle}
            content={item.todoContent}
            todoId={item._id}
            moveToTrash={moveToTrash}
          />
        ))}
      </Grid>
    </Container>
  );
};

Notes.propTypes = {
  notes: PropTypes.object.isRequired,
  getNotes: PropTypes.func.isRequired,
  moveToTrash: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  notes: state.notes,
});

export default connect(mapStateToProps, { getNotes, moveToTrash })(Notes);
