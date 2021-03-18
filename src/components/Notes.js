import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NoteItem from "./NoteItem";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

const Notes = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      spacing={3}
    >
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
    </Grid>
  );
};

export default Notes;
