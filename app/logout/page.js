"use client"
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logoutuser } from "../action/action";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";

const Page = () => {
  const dispatch = useDispatch();
  const router=useRouter()
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    // Direct toast
    dispatch(logoutuser());
    router.push('/')
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="50vh"
    >
      <Typography variant="h4" mb={3}>
        Welcome to Your App
      </Typography>
      <Button onClick={handleOpen} variant="contained" color="primary">
        Logout
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Are you sure to log out of your account?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Logging out will end your current session.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleLogout} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Page;

