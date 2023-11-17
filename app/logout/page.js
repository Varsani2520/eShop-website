"use client"
import React from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const LogoutPage = () => {
  const router = useRouter();

  const handleLogout = async () => {
    // Sign out the user
    await signOut({ redirect: false });

    // Redirect to the signup page
    router.push("/signup");
  };

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
          Log out
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogout}
          sx={{ mt: 2 }}
        >
          Log out
        </Button>
      </Box>
    </Container>
  );
};

export default LogoutPage;
