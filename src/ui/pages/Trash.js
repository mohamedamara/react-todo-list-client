import React, { useEffect } from "react";
import { connect } from "react-redux";
import NoteItem from "../components/NoteItem";
import Container from "../components/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";
import {
  getNotesInTrash,
  deleteNote,
  restoreNote,
} from "../../store/actions/notes_action";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import Masonry from "react-masonry-css";

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

const Trash = ({
  notes: { trash, loading },
  getNotesInTrash,
  deleteNote,
  restoreNote,
}) => {
  const classes = useStyles();
  const theme = useTheme();

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

  const breakpointCols = {
    default: 4,
    [theme.breakpoints.values.xl]: 3,
    [theme.breakpoints.values.lg]: 3,
    [theme.breakpoints.values.md]: 2,
    [theme.breakpoints.values.sm]: 1,
    [theme.breakpoints.values.xs]: 1,
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpointCols}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {trash.map((item) => (
          <div key={item._id}>
            <NoteItem
              title={item.todoTitle}
              content={item.todoContent}
              todoId={item._id}
              color={item.todoColor}
              deleteNote={deleteNote}
              restoreNote={restoreNote}
              isTrash={true}
            />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

Trash.propTypes = {
  notes: PropTypes.object.isRequired,
  getNotesInTrash: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
  restoreNote: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  notes: state.notes,
});

export default connect(mapStateToProps, {
  getNotesInTrash,
  deleteNote,
  restoreNote,
})(Trash);
