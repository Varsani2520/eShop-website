"use client";
import React, { useEffect, useState } from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    TextField,
    Button,
} from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import { contactuserService } from "../service/Contactuser";
import { ToastContainer, toast } from "react-toastify";
import Lottie from "lottie-react";
import contactAnimation from "../lottie-animation/contactAnimation";
import Heading from "../contact/Heading";
const ContactPage = () => {
    const [contact, setContact] = useState({
        name: "",
        email: "",
        message: "",
    });

    const toastStyle = {
        borderRadius: "8px",
        padding: "16px",
        fontSize: "16px",
    };

    async function handleSubmit(e) {
        e.preventDefault();
        if (!contact.email || !contact.name || !contact.message) {
            toast.error("Please fill in all the fields.");
            return;
        }
        try {
            const response = await contactuserService(
                contact.email,
                contact.name,
                contact.message
            );
            console.log("Raw response", response);

            toast.success("success");
        } catch (error) {
            toast.error("no");
            console.log(error);
        }
    }
    return <div>
        <ToastContainer/>
        <Heading/>
        <Box sx={{ mt: "2rem" }}>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <div>
                    <Lottie animationData={contactAnimation} height={50} width={20} />
                </div>
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
    </Box></div>;
};

export default ContactPage;
