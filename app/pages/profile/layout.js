"use client";
import React from "react";
import {
  Avatar,
  Button,
  Card,
  Container,
  Grid,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Toast from "@/app/components/Toast";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { deleteAccountService } from "@/app/service/signupservice";
import { logoutuser } from "@/app/action/action";

const Layout = ({children}) => {
  const dispatch=useDispatch()
  const user = useSelector((state) => state.auth.authUser.data);
  async function deleteAccount(){
    try {
      const response=await deleteAccountService(user.username)
      console.log(response)
      dispatch(logoutuser(user))
      toast.success("delete account")
    } catch (error) {
      toast.error("not delete")
      console.log(error);
    }
  }
  return (
    <Container maxWidth="xl">
      <Toast/>
      <Grid container justifyContent="center" spacing={2} sx={{ mt: "10%" }}>
        <Grid item md={4}>
          <Card
            sx={{
              backgroundColor: "#f0f0f0",
              marginTop: 4,
              position: "relative",
              padding: 3,
            }}
          >
            <Box display="flex" flexDirection="column" alignItems="center">
              {/* bugs in btn edit  */}
              {/* <Button
                variant="outlined"
                color="primary"
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  margin: 8,
                }}
              >
                Edit
              </Button> */}
              <Avatar
                src=""
                alt="User Avatar"
                sx={{ width: 120, height: 120, marginBottom: 2 }}
                type="file"
              />
              <Typography variant="h6" sx={{ fontSize: 20, color: "#333" }}>
                {user ? user.name :"guest"}
              </Typography>

              <Typography variant="body2" sx={{ fontSize: 16, color: "#666" }}>
                {user ?user.username: "guest"}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: 2, "&:hover": { backgroundColor: "#0069d9" } }}
              >
                Logout
              </Button>
            </Box>
          </Card>
          <Divider />
          <Card sx={{ background: "#f0f0f0", padding: 3 }}>
            <div style={linkStyle}>
              <Button variant="outlined" color="primary">
                <Link href="/pages/profile/bookings">Booking</Link>
              </Button>
            </div>
            <Divider />
            <div style={linkStyle}>
              <Button
                variant="outlined"
                color="primary"
                href="/pages/profile/bookmark"
              >
                Bookmark
              </Button>
            </div>
            <Divider />
            <div style={linkStyle}>
              <Button
                variant="outlined"
                color="primary"
                href="/pages/profile/favourites"
              >
                WishList
              </Button>
            </div>
            <Divider />
            <div style={linkStyle}>
              <Button
                variant="outlined"
                color="primary"
                href="/pages/profile/notifications"
              >
                Notification
              </Button>
            </div>
            <Divider />
            <div style={linkStyle}>
              <Button
                variant="outlined"
                color="secondary"
                onClick={()=>deleteAccount()}
              >
                Delete Account
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item md={8}>
          <Card
            sx={{
              backgroundColor: "#f0f0f0",
              marginTop: 4,
              padding: 3,
            }}
          >
            {children}
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

const linkStyle = {
  color: "#0069d9",
  fontSize: 16,
  cursor: "pointer",
  justifyContent: "center", // Center the button text
  margin: "8px", // Apply margin
  padding: "8px", // Apply padding
  "&:hover": {
    textDecoration: "underline",
    backgroundColor: "#f9f9f9", // Apply hover effect
  },
};

export default Layout;
