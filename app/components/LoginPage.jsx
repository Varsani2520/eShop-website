"use client";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { loginservice } from "../service/loginService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
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
  const theme = useTheme();
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
      dispatch(loginUserFailure());
      console.log(error);
    }
  };

  return (
    <Container>
      <div
        style={{
          marginTop: "100px",
          marginBottom: "180px",
          color: theme.palette.background.text,
          background: theme.palette.primary.main,
        }}
      >
        <Toast />
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Lottie animationData={loginAnimation} style={{ height: "500px" }} />
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
            <form onSubmit={handleSubmit}>
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                sx={{ color: theme.palette.background.text }}
              >
                Login
              </Typography>
              <input
                type="text"
                placeholder="Username"
                style={{
                  width: "80%",
                  padding: "10px",
                  marginBottom: "15px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  outline: "none",
                }}
                onChange={(e) =>
                  setLogin({
                    ...login,
                    username: e.target.value,
                  })
                }
                value={login.username}
              />
              <input
                type="password"
                placeholder="Password"
                style={{
                  width: "80%",
                  padding: "10px",
                  marginBottom: "15px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  outline: "none",
                }}
                onChange={(e) =>
                  setLogin({
                    ...login,
                    password: e.target.value,
                  })
                }
                value={login.password}
              />
              <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{
                  mt: 2,
                  width:"85%",
                  background: theme.palette.background.button,
                  "&:hover": { backgroundColor: "#0069d9" },
                  color: theme.palette.background.text,
                }}
              >
                Login
              </Button>
              <Typography align="center" sx={{ mt: 2, mr: 2 }}>
                Don't have an account? <Link href="/pages/signup">Sign up</Link>
              </Typography>
            </form>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default LoginPage;
