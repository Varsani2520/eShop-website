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
import React from "react";

const layout = ({ children }) => {
  const steps = ["Cart", "Address", "Payment", "Summary"];
  return (
    <div>
      <Box sx={{ width: "100%", mt: 5 }}>
        {" "}
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            {children}
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader>Price Details</CardHeader>
              <CardContent>
                <Typography>Total Product Price</Typography>
                <Typography>Total Discounts</Typography>
                <Typography>Order Total</Typography>
              </CardContent>
            </Card>
            <Button variant="contained" href="/checkout/address">
              Continue
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default layout;
