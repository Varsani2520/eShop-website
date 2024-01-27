import { Container } from "@mui/material";
import Link from "next/link";

export default function Payment() {
  return (
    <Container sx={{ mt: "10%" }}>
      {/* Payment Method:
      <Paycheck /> */}
      <Link href="/pages/summary"> get order summary</Link>
    </Container>
  );
}
