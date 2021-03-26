import React, { useState, useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const CustomSnackbar = ({ snackPack, setSnackPack }) => {
  const [open, setOpen] = useState(false);
  const [messageInfo, setMessageInfo] = useState(undefined);

  useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, setSnackPack, messageInfo, open]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  return (
    <Snackbar
      key={messageInfo ? messageInfo.key : undefined}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
      onExited={handleExited}
    >
      <Alert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity="error"
      >
        {messageInfo ? messageInfo.message : undefined}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
