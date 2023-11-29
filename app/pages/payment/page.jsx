"use client";
import Paycheck from "@/app/components/paycheck";
import { Container } from "@mui/material";
import Link from "next/link";

const Payment = () => {
  return (
    <Container sx={{mt:'10%'}}>
      Payment Method:
      <Paycheck />
      <Link href="/pages/summary" > get order summary</Link>
    </Container>
  );
};

export default Payment;
