import React, { useEffect } from "react";
import { connect } from "react-redux";
import NoteItem from "../components/NoteItem";
import Container from "../components/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";
import Masonry from "react-masonry-css";

import {
  getNotes,
  moveToTrash,
  updateNote,
} from "../../store/actions/notes_action";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AssignmentIcon from "@material-ui/icons/Assignment";

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

const Notes = ({
  notes: { notes, loading },
  getNotes,
  moveToTrash,
  updateNote,
}) => {
  const classes = useStyles();
  const theme = useTheme();

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
        {notes.map((item) => (
          <div key={item._id}>
            <NoteItem
              title={item.todoTitle}
              content={item.todoContent}
              todoId={item._id}
              color={item.todoColor}
              moveToTrash={moveToTrash}
              updateNote={updateNote}
            />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

Notes.propTypes = {
  notes: PropTypes.object.isRequired,
  getNotes: PropTypes.func.isRequired,
  moveToTrash: PropTypes.func.isRequired,
  updateNote: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  notes: state.notes,
});

export default connect(mapStateToProps, { getNotes, moveToTrash, updateNote })(
  Notes
);
