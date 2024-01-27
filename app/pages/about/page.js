"use client";
import { emphasize } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Skeleton,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import Link from "next/link";
import { AboutService } from "../../service/AboutService";
import { styled } from "@mui/material/styles";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
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
export const metadata = {
  title: "About",
  openGraph: {
    title: "About",
  },
};
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
      <Box sx={{ background: "hotpink" }} mt={{ md: "3%", xs: "10%" }}>
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
                href="/pages/about"
                label="About Us"
                icon={<ExpandMoreIcon />}
              />
            </Breadcrumbs>
            <Typography variant="h4" sx={{ mt: 4 }}>
              About Us
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box sx={{ mt: "2rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              src="https://img.freepik.com/free-vector/online-shopping-concept-landing-page_52683-11240.jpg?size=626&ext=jpg&uid=R121733695&ga=GA1.1.248855276.1696004271&semt=ais"
              alt="Customer Support"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            {loading ? (
              <Box>
                <CardContent>
                  <Skeleton animation="wave" height={40} />
                </CardContent>
                <Card sx={{ maxWidth: 345 }}>
                  <Skeleton
                    variant="rectangular"
                    height={100}
                    width={800}
                    animation="wave"
                  />
                </Card>
                <br />
              </Box>
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
