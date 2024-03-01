"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { loginservice } from "../service/loginService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import { loginUserFailure, loginUserSuccess } from "../action/action";
import Link from "next/link";
import Lottie from "lottie-react";
import loginAnimation from "../lottie-animation/loginAnimation.json";
import Toast from "./Toast";
import Cookies from "js-cookie";

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!login.username || !login.password) {
      toast.error("Please fill in all the fields");
      return;
    }

    try {
      const response = await loginservice(login.username, login.password);
      console.log(response);
      Cookies.set("user", true);
      dispatch(loginUserSuccess(response));
      toast.success("Logged in successfully");
      router.push("/");
    } catch (error) {
      toast.error("Login failed");
      Cookies.set("user", false);
      dispatch(loginUserFailure);
      console.log(error);
    }
  };

  return (
    <Container>

    
    <div style={{ marginTop: "120px", marginBottom: "50px" }}>
      <Toast />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Lottie animationData={loginAnimation} style={{height:'500px'}} />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <Paper
            sx={{
              padding: 4,
              maxWidth: 400,
              width: "100%",
              backgroundColor: "white",
              borderRadius: 8,
            }}
          > */}
            <form onSubmit={handleSubmit}>
              <Typography variant="h5" align="center" gutterBottom>
                Login
              </Typography>
              <TextField
                label="Username"
                fullWidth
                variant="outlined"
                onChange={(e) =>
                  setLogin({
                    ...login,
                    username: e.target.value,
                  })
                }
                value={login.username}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                onChange={(e) =>
                  setLogin({
                    ...login,
                    password: e.target.value,
                  })
                }
                value={login.password}
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                sx={{ mt: 2 }}
              >
                Login
              </Button>
              <Typography align="center" sx={{ mt: 2 }}>
                Don't have an account? <Link href="/pages/signup">Sign up</Link>
              </Typography>
            </form>
          {/* </Paper> */}
        </Grid>
      </Grid>
    </div>
    </Container>
  );
};

export default LoginPage;
