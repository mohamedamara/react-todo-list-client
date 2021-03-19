import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import NoteItem from "./NoteItem";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import { getNotes } from "../store/actions/notes_action";

const useStyles = makeStyles((theme) => ({}));

const Notes = ({ notes: { notes }, getNotes }) => {
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  // const classes = useStyles();
  if (notes !== null) {
    console.log(notes);
  }
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      spacing={3}
    >
      {notes !== null &&
        notes.map((item) => (
          <NoteItem key={item.id} title={item.id} content={item.title} />
        ))}
    </Grid>
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
