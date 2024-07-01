"use client"
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, Grid, useTheme } from "@mui/material";
import { signupservice } from "../service/signupservice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Lottie from "lottie-react";
import loginAnimation from "../lottie-animation/loginAnimation.json";

const SignUp = () => {
  const theme = useTheme();
  const [signup, setSignup] = useState({
    username: "",
    password: "",
    name: "",
    address: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate if all fields are filled
    if (!signup.username || !signup.password || !signup.name || !signup.address) {
      toast.error("Please fill in all fields");
      return;
    }

    // Validate password length
    if (signup.password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(signup.username)) {
      toast.error("Invalid email format");
      return;
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
      // Assuming `router` is properly set up with useRouter() from Next.js
      router.push("/pages/login");
    } catch (error) {
      toast.error("Failed to Create Account");
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
        <Grid container spacing={2}>
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
              paddingBottom: "30px",
            }}
          >
            <form onSubmit={handleSubmit}>
              <Typography component="h1" variant="h4" mb={4}>
                Create Account
              </Typography>
              <input
                type="text"
                placeholder="Username"
                value={signup.username}
                onChange={(e) => setSignup({ ...signup, username: e.target.value })}
                style={{
                  width: "80%",
                  padding: "10px",
                  marginBottom: "15px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  outline: "none",
                }}
              />
              <input
                type="password"
                placeholder="Password"
                value={signup.password}
                onChange={(e) => setSignup({ ...signup, password: e.target.value })}
                style={{
                  width: "80%",
                  padding: "10px",
                  marginBottom: "15px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  outline: "none",
                }}
              />
              <input
                type="text"
                placeholder="Name"
                value={signup.name}
                onChange={(e) => setSignup({ ...signup, name: e.target.value })}
                style={{
                  width: "80%",
                  padding: "10px",
                  marginBottom: "15px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  outline: "none",
                }}
              />
              <input
                type="text"
                placeholder="Address"
                value={signup.address}
                onChange={(e) => setSignup({ ...signup, address: e.target.value })}
                style={{
                  width: "80%",
                  padding: "10px",
                  marginBottom: "15px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  outline: "none",
                }}
              />
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                sx={{
                  mt: 2,
                  width: "85%",
                  background: theme.palette.background.button,
                  "&:hover": { backgroundColor: "#0069d9" },
                  color: theme.palette.background.text,
                }}
              >
                Create Account
              </Button>
              <Typography align="center" sx={{ mt: 2 }}>
                Already have an account?{" "}
                <Link href="/pages/login">Login</Link>
              </Typography>
            </form>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default SignUp;
