"use client";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { loginservice } from "../service/loginService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
const page = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();
  const session = useSession();
  async function handleSubmit(e) {
    e.preventDefault();
    if (!login.username || !login.password) {
      toast.error("please fill in all the field");
    }
    try {
      const response = await loginservice(login.username, login.password);
      console.log(response);
      toast.success(response.msg);
      router.push("/");
    } catch (error) {
      toast.error("loggedIn fail");
      console.log(error);
    }
  }
  // useEffect(() => {
  //   if (session.status === "authenticated") {
  //     router.push("/");
  //   }
  //   if (session.status === "unauthenticated") {
  //     router.push("/signup");
  //   }
  // }, [session, router]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <ToastContainer />
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
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
          style={{ marginTop: "20px" }}
        >
          Login
        </Button>
        or
        <Button
          variant="contained"
          color="primary"
          onClick={() => signIn("google")}
          sx={{ mt: 2 }}
        >
          Login with Google
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => signIn("github")}
          sx={{ mt: 2 }}
        >
          Login with Github
        </Button>
      </form>
    </div>
  );
};

export default page;
