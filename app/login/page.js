"use client";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { loginservice } from "../service/loginService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Box, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { loginUserFailure, loginUserSuccess } from "../action/action";
import Link from "next/link";

const page = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();
    if (!login.username || !login.password) {
      toast.error("please fill in all the field");
    }
    try {
      const response = await loginservice(login.username, login.password);
      console.log(response);

      dispatch(loginUserSuccess(response));
      toast.success(response.msg);
      router.push("/");
    } 
    catch (error) {
      toast.error("loggedIn fail");
      dispatch(loginUserFailure);
      console.log(error);
    }
  }

  return (
    <div>
      <ToastContainer />

      <Box sx={{ mt: "2rem" }}>
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
            sx={{ display: "flex", alignItems: "center" }}
          >
            <form onSubmit={handleSubmit}>
              <h2>Login</h2>
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
                sx={{ mt: "1rem", fontSize: "1.2rem" }}
              >
                Login
              </Button>
              dont have account?
              <Link href="/signup">Sign up</Link>
            </form>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default page;
