import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <footer style={{ background: "#232F3E", padding: "20px" }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* Left Section: About */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="#fff" gutterBottom>
              Get to Know Us
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#ddd",
                fontWeight: "bold",
                padding: "5px",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Link
                href="/pages/contact"
                color="inherit"
                style={{ textDecoration: "none" }}
              >
                Contact Us
              </Link>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#ddd",
                fontWeight: "bold",
                padding: "5px",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Link
                href="/pages/about"
                color="inherit"
                style={{ textDecoration: "none" }}
              >
                About Us
              </Link>
            </Typography>
          </Grid>
          {/* center Section: Social */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="#fff" gutterBottom>
              Connect with Us
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#ddd",
                fontWeight: "bold",
                padding: "5px",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Link
                href="https://www.facebook.com"
                color="inherit"
                style={{ textDecoration: "none" }}
              >
                Facebook
              </Link>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#ddd",
                fontWeight: "bold",
                padding: "5px",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Link
                href="https://www.twitter.com"
                color="inherit"
                style={{
                  textDecoration: "none",
                }}
              >
                Twitter
              </Link>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#ddd",
                fontWeight: "bold",
                padding: "5px",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Link
                href="https://www.linkedin.com"
                color="inherit"
                style={{ textDecoration: "none" }}
              >
                Instagram
              </Link>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#ddd",
                fontWeight: "bold",
                padding: "5px",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Link
                href="https://www.linkedin.com"
                color="inherit"
                style={{ textDecoration: "none" }}
              >
                LinkedIn
              </Link>
            </Typography>
          </Grid>
          {/* right Section: Address */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="#fff" gutterBottom>
              Lets us help you
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#ddd", fontWeight: "bold", padding: "5px" }}
            >
              Bhuj, Gujarat, ABC area, 370030
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
