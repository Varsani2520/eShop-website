"use client";
import React, { useEffect, useState } from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import { contactuserService } from "../service/Contactuser";
import { ToastContainer, toast } from "react-toastify";
const page = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });
  

  const StyledBreadcrumb = styled(Chip)(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.grey[100]
        : theme.palette.grey[800],
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[800],
        0.06
      ),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[800],
        0.12
      ),
    },
  }));
  async function handleSubmit(e) {
    e.preventDefault();
    if (!contact.email || !contact.name || !contact.message) {
      toast.error("Please fill in all the fields.");
      return;
    }
    try {
      const response=await contactuserService(contact);
      console.log("Raw response",response);
      
      toast.success("success");
    } catch (error) {
      toast.error("no");
      console.log(error);
    }
  }
  return (
    <div>
      <ToastContainer />
      <Box sx={{ background: "hotpink" }}>
        <Container>
          <Box sx={{ pt: 5, pb: 5 }}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link href="/">
                <StyledBreadcrumb
                  component="a"
                  label="Home"
                  icon={<HomeIcon fontSize="large" />}
                />
              </Link>
              <StyledBreadcrumb
                component="a"
                href="/contact"
                label="Contact Us"
                icon={<ExpandMoreIcon />}
              />
            </Breadcrumbs>
            <Typography variant="h4" sx={{ mt: 4 }}>
              Contact Us
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box sx={{ mt: "2rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=626&ext=jpg&uid=R121733695&ga=GA1.1.248855276.1696004271&semt=sph"
              alt="Customer Support"
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
              <TextField
                label="Name"
                fullWidth
                margin="normal"
                onChange={(e) =>
                  setContact({
                    ...contact,
                    name: e.target.value,
                  })
                }
                value={contact.name}
              />
              <TextField
                label="Email"
                fullWidth
                margin="normal"
                onChange={(e) =>
                  setContact({
                    ...contact,
                    email: e.target.value,
                  })
                }
                value={contact.email}
              />
              <TextField
                label="Message"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                onChange={(e) =>
                  setContact({
                    ...contact,
                    message: e.target.value,
                  })
                }
                value={contact.message}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: "1rem", fontSize: "1.2rem" }}
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default page;
