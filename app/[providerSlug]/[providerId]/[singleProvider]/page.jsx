"use client";
import "react-toastify/dist/ReactToastify.css";
import { ProviderService } from "@/app/service/ProviderService";
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { emphasize, styled } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const page = () => {
  
  const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === "light"
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      "&:hover, &:focus": {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      "&:active": {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    };
  });

  const [hlo, setHlo] = useState([]);
  const { providerSlug } = useParams();
  const { singleProvider } = useParams();

  async function Providers() {
    try {
      const response = await ProviderService(providerSlug);
      setHlo(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    Providers();
  }, []);

  return (
    <Box>
      <ToastContainer />
      <Box sx={{ background: "hotpink" }}>
        <Container>
          <Box sx={{ pt: 5, pb: 5 }}>
            <Breadcrumbs aria-label="breadcrumb">
              <StyledBreadcrumb
                component="a"
                href="#"
                label="Home"
                icon={<HomeIcon fontSize="small" />}
              />
              <StyledBreadcrumb component="a" href="#" label="Provider" />
              <StyledBreadcrumb
                label="Services"
                deleteIcon={<ExpandMoreIcon />}
              />
            </Breadcrumbs>
          </Box>
        </Container>
      </Box>
      <ToastContainer />
      <Container>
        <Box sx={{ mt: 10 }}>
          {hlo.map((response) => {
            if(singleProvider==response.id)
              return (
                <Box key={response.id}>
                  <Grid  container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Card sx={{ maxWidth: 500,mt:10 }}>
                        <CardMedia
                          sx={{ height: 400 }}
                          image={response.img}
                          alt={response.alt}
                        />
                      </Card>
                      <Box sx={{ mt: 5 }}>
                        <Button
                          variant="outlined"
                          
                        >
                          Add to Cart
                        </Button>
                        <Button variant="outlined">Buy Now</Button>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Card
                        sx={{
                          minWidth: 275,
                          background: "#b7bfee",
                          mt: 10,
                        }}
                      >
                        <CardContent>
                          <Typography
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom
                          >
                            {response.slug}
                          </Typography>
                          <Typography variant="h5" component="div">
                            {response.name}
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            descriptions:{response.description}
                          </Typography>
                          <Typography variant="primary">
                            Price: {response.price}
                            <br />
                            offer:{response.offer}
                          </Typography>
                          <br />
                          rating:{" "}
                          <Rating
                            value={response.rating}
                            emptyIcon={
                              <StarIcon
                                style={{ opacity: 0.55 }}
                                fontSize="inherit"
                              />
                            }
                          />
                        </CardContent>
                      </Card>
                      <Card sx={{ mt: "10%" }}>
                        <CardContent>
                          <Typography variant="h5">
                            <CardHeader sx={{background:'hotpink'}}>Reviews:</CardHeader>
                            {response.review}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Box>
              );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default page;
