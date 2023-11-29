"use client";
import Paycheck from "@/app/components/paycheck";
import { Container } from "@mui/material";

const Payment = () => {
  return (
    <Container>
      Payment Method:
      <Paycheck />
    </Container>
  );
};

export default Payment;
