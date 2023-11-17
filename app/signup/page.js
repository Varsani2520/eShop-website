"use client"
import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/");
    }
    if (session.status === "unauthenticated") {
      router.push("/signup");
    }
  }, [session, router]);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
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
      </Box>
    </Container>
  );
};

export default LoginPage;
