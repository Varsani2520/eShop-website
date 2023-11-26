import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import Steppers from "../components/Steppers";


const layout = ({ children }) => {
  
  return (
    <div>
      <Box sx={{ width: "100%", mt: "10%" }}>
        <Steppers />
      </Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {children}
          </Grid>
          <Grid item xs={12} md={6}>
            
            <Button variant="contained">
              <Link href="/checkout/address">Continue</Link>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default layout;
