"use client";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import { Grid, Paper, TextField } from "@mui/material";
import { signupservice } from "../service/signupservice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Toast from "./Toast";
const SignUp = () => {
  const router = useRouter();

  const [signup, setSignup] = useState({
    username: "",
    password: "",
    name: "",
    address: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();
    if (
      !signup.username ||
      !signup.password ||
      !signup.name ||
      !signup.address
    ) {
      toast.error("please fill in all the field");
    }
    try {
      const response = await signupservice(
        signup.username,
        signup.password,
        signup.name,
        signup.address
      );
      console.log(response);
      toast.success("Account Created Successfully");
      router.push("/pages/login");
    } catch (error) {
      toast.error("Failed to Create Account");
      console.log(error);
    }
  }
  return (
    <div style={{ marginTop: "130px", marginBottom: "50px" }}>
      <Toast />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7865.jpg?size=626&ext=jpg&ga=GA1.1.248855276.1696004271&semt=ais"
            alt="signup Image"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "30px",
          }}
        >
          <Paper
            sx={{
              padding: 4,
              maxWidth: 400,
              width: "100%",
              backgroundColor: "white",
              borderRadius: 8,
            }}
          >
            <form onSubmit={handleSubmit}>
              <Typography component="h1" variant="h4" mb={4}>
                Create Account
              </Typography>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                onChange={(e) =>
                  setSignup({
                    ...signup,
                    username: e.target.value,
                  })
                }
                value={signup.username}
                margin="normal"
              />
              <TextField
                label="Password"
                fullWidth
                type="password"
                variant="outlined"
                onChange={(e) =>
                  setSignup({
                    ...signup,
                    password: e.target.value,
                  })
                }
                value={signup.password}
                margin="normal"
              />
              <TextField
                label="name"
                fullWidth
                variant="outlined"
                onChange={(e) =>
                  setSignup({
                    ...signup,
                    name: e.target.value,
                  })
                }
                value={signup.name}
                margin="normal"
              />
              <TextField
                fullWidth
                label="address"
                variant="outlined"
                onChange={(e) =>
                  setSignup({
                    ...signup,
                    address: e.target.value,
                  })
                }
                value={signup.address}
                margin="normal"
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                sx={{ mt: 2 }}
              >
                Create Account
              </Button>
              <Typography align="center" sx={{ mt: 2 }}>
                are you already logged in?{" "}
                <Link href="/pages/login">Login</Link>
              </Typography>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUp;
