"use client"
import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Skeleton,
  Card,
  CardContent,
} from "@mui/material";
import Link from "next/link";
import { AboutService } from "../../service/AboutService";

export default function Page() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const result = await AboutService();
    console.log(result.abouts);
    setData(result.abouts);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
    document.title = "About us | eRequirements";
  }, []);

  return (
    <div>
      <Box sx={{ background: "#8dbae9" }} mt={{ md: "3%", xs: "10%" }}>
        <Container>
          <Box sx={{ pt: 5, pb: 5 }}>
            {/* Breadcrumbs */}
          </Box>
        </Container>
      </Box>
      <Box sx={{ mt: "2rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {loading ? (
              <Skeleton variant="rectangular" height={400} animation="wave" />
            ) : (
              <img
                src="https://img.freepik.com/free-vector/online-shopping-concept-landing-page_52683-11240.jpg?size=626&ext=jpg&uid=R121733695&ga=GA1.1.248855276.1696004271&semt=ais"
                alt="Customer Support"
                style={{ width: "100%",height:'400px' }}
              />
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            {loading ? (
              <Skeleton animation="wave" height={200} />
            ) : (
              data.map((response) => (
                <div key={response.id}>
                  <h1>{response.title}</h1>
                  <Typography>{response.description}</Typography>
                </div>
              ))
            )}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
