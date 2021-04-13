import React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginBottom: "10px",
  },
}));

const validationSchema = yup.object({
  todoTitle: yup
    .string("Enter your todo title")
    .required("Todo title is required"),
  todoContent: yup
    .string("Enter your todo content")
    .required("Todo content is required"),
});

const AddNote = (props) => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      todoTitle: "",
      todoContent: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      props.addNote(values);
      handleClose();
    },
  });

  const handleClose = () => {
    props.close();
    formik.resetForm();
  };

  return (
    <Dialog
      open={props.isOpen}
      onClose={props.close}
      aria-labelledby="form-dialog-title"
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
          required
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

export default AddNote;
