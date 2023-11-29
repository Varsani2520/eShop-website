"use client"
import React, { useState } from "react";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { contactAddress } from "@/app/service/contactAddress";
import { Router, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Toast from "./Toast";
const CheckAddress = () => {
  const router = useRouter()
  const [contact, setContact] = useState({
    name: '', contactNo: '', house: '', area: '', pin: '', city: '', state: ''
  })
  const tokens=useSelector((state)=>state.auth.authUser.data.token)
  async function handleSubmit(e) {
    e.preventDefault();
    if (!contact.name || !contact.contactNo || !contact.house || !contact.area || !contact.pin || !contact.city || !contact.state) {
      toast.error("Please fill in all the fields.");
      return;
    }
    try {
      const response = await contactAddress(tokens,contact.name, contact.contactNo, contact.house, contact.area, contact.pin, contact.city, contact.state);
      console.log(response)
      toast.success("success");
      router.push('/pages/payment')
    } catch (error) {
      toast.error("something missing");
      console.log(error);
    }
  }

  return (
    <Container>
      <Toast />
      <Typography variant="h5" gutterBottom sx={{ mt: 5 }}>
        Contact Details
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              required
              onChange={(e) =>
                setContact({
                  ...contact,
                  name: e.target.value,
                })
              }
              value={contact.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Contact Number"
              variant="outlined"
              required
              onChange={(e) =>
                setContact({
                  ...contact,
                  contactNo: e.target.value,
                })
              }
              value={contact.contactNo}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="House No."
              variant="outlined"
              required
              onChange={(e) =>
                setContact({
                  ...contact,
                  house: e.target.value,
                })
              }
              value={contact.house}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Area Colony"
              variant="outlined"
              required
              onChange={(e) =>
                setContact({
                  ...contact,
                  area: e.target.value,
                })
              }
              value={contact.area}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Pin Code"
              variant="outlined"
              required
              onChange={(e) =>
                setContact({
                  ...contact,
                  pin: e.target.value,
                })
              }
              value={contact.pin}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="City"
              variant="outlined"
              required
              onChange={(e) =>
                setContact({
                  ...contact,
                  city: e.target.value,
                })
              }
              value={contact.city}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="State"
              variant="outlined"
              required
              onChange={(e) =>
                setContact({
                  ...contact,
                  state: e.target.value,
                })
              }
              value={contact.state}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" >
              Save Address and Continue
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default CheckAddress;
