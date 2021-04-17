import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useFormik } from "formik";
import * as yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import CircleColor from "./CircleColor";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginBottom: "10px",
  },
  colorGrid: {
    marginTop: "20px",
  },
}));

const validationSchema = yup.object({
  todoTitle: yup
    .string("Enter your todo title")
    .required("Todo title is required"),
});

const AddOrModifyNote = (props) => {
  const [selectedColor, SetSelectedColor] = useState(props.color);

  const dialogCloseAction = () => {
    SetSelectedColor(props.color);
    props.close();
  };

  const classes = useStyles();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      todoTitle: props.isUpdate ? props.title : "",
      todoContent: props.isUpdate ? props.content : "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (props.isUpdate) {
        values._id = props.todoId;
        values.todoColor = selectedColor;
        props.updateNote(values);
        handleSave();
      } else {
        values.todoColor = selectedColor;
        props.addNote(values);
        handleClose();
      }
    },
  });

  const handleClose = () => {
    props.close();
    formik.resetForm();
    SetSelectedColor(props.color);
  };
  const handleSave = () => {
    props.close();
    formik.resetForm();
  };

  return (
    <Dialog
      open={props.isOpen}
      onClose={dialogCloseAction}
      aria-labelledby="form-dialog-title"
      PaperProps={{
        style: {
          backgroundColor: selectedColor,
        },
      }}
    >
      <DialogTitle id="form-dialog-title">Add new todo</DialogTitle>
      <DialogContent>
        <DialogContentText>Text fields with * are required.</DialogContentText>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="todoTitle"
          label="Todo Title"
          name="todoTitle"
          value={formik.values.todoTitle}
          onChange={formik.handleChange}
          error={formik.touched.todoTitle && Boolean(formik.errors.todoTitle)}
          helperText={formik.touched.todoTitle && formik.errors.todoTitle}
          autoFocus
          className={classes.textField}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="todoContent"
          label="Todo Content"
          id="todoContent"
          value={formik.values.todoContent}
          onChange={formik.handleChange}
          error={
            formik.touched.todoContent && Boolean(formik.errors.todoContent)
          }
          helperText={formik.touched.todoContent && formik.errors.todoContent}
          className={classes.textField}
        />
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          className={classes.colorGrid}
        >
          <Grid item>
            <CircleColor
              backgroundColor={"#fff"}
              borderColor={"#dcd7d7"}
              onClick={() => SetSelectedColor("#fff")}
              selectedColor={selectedColor}
            />
          </Grid>
          <Grid item>
            <CircleColor
              backgroundColor={"#f28b82"}
              borderColor={"#f28b82"}
              onClick={() => SetSelectedColor("#f28b82")}
              selectedColor={selectedColor}
            />
          </Grid>
          <Grid item>
            <CircleColor
              backgroundColor={"#fff475"}
              borderColor={"#fff475"}
              onClick={() => SetSelectedColor("#fff475")}
              selectedColor={selectedColor}
            />
          </Grid>
          <Grid item>
            <CircleColor
              backgroundColor={"#ccff90"}
              borderColor={"#ccff90"}
              onClick={() => SetSelectedColor("#ccff90")}
              selectedColor={selectedColor}
            />
          </Grid>
          <Grid item>
            <CircleColor
              backgroundColor={"#a7ffeb"}
              borderColor={"#a7ffeb"}
              onClick={() => SetSelectedColor("#a7ffeb")}
              selectedColor={selectedColor}
            />
          </Grid>
          <Grid item>
            <CircleColor
              backgroundColor={"#d7aefb"}
              borderColor={"#d7aefb"}
              onClick={() => SetSelectedColor("#d7aefb")}
              selectedColor={selectedColor}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={formik.handleSubmit} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddOrModifyNote;
