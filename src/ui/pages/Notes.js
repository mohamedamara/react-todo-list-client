import React, { useEffect } from "react";
import { connect } from "react-redux";
import NoteItem from "../components/NoteItem";
import Container from "../components/Container";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";
import { getNotes } from "../../store/actions/notes_action";

const Notes = ({ notes: { notes, loading }, getNotes }) => {
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
          />
        ))}
      </Grid>
    </Container>
  );
};

Notes.propTypes = {
  notes: PropTypes.object.isRequired,
  getNotes: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  notes: state.notes,
});

export default connect(mapStateToProps, { getNotes })(Notes);
