import React, { useEffect } from "react";
import { connect } from "react-redux";
import NoteItem from "./NoteItem";
import Container from "../Container";
import { Grid, CircularProgress } from "@material-ui/core";
import PropTypes from "prop-types";
import { getNotes } from "../../store/actions/notes_action";

const Notes = ({ notes: { notes, loading }, getNotes }) => {
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  // const classes = useStyles();
  if (notes !== null) {
    console.log(notes);
  }

  if (loading || notes === null) {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={0}
        style={{ minHeight: "80vh" }}
      >
        <CircularProgress />
      </Grid>
    );
  }
  return (
    <Container>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        xs={12}
        spacing={6}
        style={{
          margin: 0,
          width: '100%',
        }}
      >
        {notes.map((item) => (
          <NoteItem key={item.id} title={item.id} content={item.title} />
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
