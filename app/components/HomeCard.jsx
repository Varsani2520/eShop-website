"use client"
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import { HomeService } from "../service/HomeService";
import { Checkbox, Container, Grid, Typography } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Skeleton from "@mui/material/Skeleton";
import { useRouter } from "next/navigation";

const HomeCard = () => {
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  async function fetchCards() {
    const result = await HomeService();
    setCard(result);
    console.log(result);
    setLoading(false);
  }

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <>
    
    <Container>
      <Box sx={{ display: "flex" }}>
        <Grid container spacing={2}>
          {loading
            ? Array.from({ length: 6 }).map((_,index) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                  <Box>
                    <Card sx={{ maxWidth: 345 }}>
                      <Skeleton
                        variant="rectangular"
                        height={194}
                        animation="wave"
                      />
                      <CardContent>
                        <Skeleton animation="wave" />
                      </CardContent>
                    </Card>
                    <br />
                  </Box>
                </Grid>
              ))
            : card.map((response) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={response.id}>
                  <Box>
                    <Card
                      sx={{ maxWidth: 345 }}
                      onClick={() =>
                        router.push(`${response.id}/${response.slug}`)
                      }
                    >
                      <CardHeader
                        title={response.title}
                        sx={{ background: "#d4d5ee" }}
                      />
                      <CardMedia
                        component="img"
                        height="194"
                        image={response.image}
                        alt={response.alt}
                        sx={{ cursor: "pointer" }}
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          {response.description}
                        </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                        <Checkbox
                          inputProps={{ "aria-label": "Favorite" }}
                          icon={<FavoriteBorder />}
                          checkedIcon={<Favorite color="secondary" />}
                        />
                        <Checkbox
                          inputProps={{ "aria-label": "Bookmark" }}
                          icon={<BookmarkBorderIcon />}
                          checkedIcon={<BookmarkIcon />}
                        />
                      </CardActions>
                    </Card>
                    <br />
                  </Box>
                </Grid>
              ))}
        </Grid>
      </Box>
    </Container>
    </>
  );
};

export default HomeCard;
