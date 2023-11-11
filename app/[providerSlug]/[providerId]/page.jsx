"use client";
import React, { useEffect, useState } from "react";
import { ProviderService } from "../../service/ProviderService";
import { useParams, useRouter } from "next/navigation";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Breadcrumbs,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  Grid,
  IconButton,
  Skeleton,
  Typography,
  emphasize,
  styled,
} from "@mui/material";
import Link from "next/link";
const page = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const { providerSlug } = useParams();
  const router = useRouter();
  const { singleProvider } = useParams();
  const [desc, setdesc] = useState([]);
  const [loading, setLoading] = useState(true);
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
  async function Desc() {
    try {
      const response = await ProviderService();
      setdesc(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    Desc();
  }, []);
  ;
  return (
    <div>
      <Box sx={{ background: "hotpink" }}>
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
                href="/about"
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
      <Box sx={{ display: "flex", mt: 10 }}>
        <Container>
          <Grid container spacing={2}>
            {loading
              ? Array.from({ length: 6 }).map((_, index) => (
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
              : desc.map((response) => {
                  if (providerSlug == response.provider_id)
                    return (
                      <>
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          md={4}
                          lg={4}
                          key={response.id}
                        >
                          <Card sx={{ maxWidth: 345 }} key={response.id}>
                            <CardHeader
                              title={response.name}
                              sx={{ background: "#b7bfee" }}
                            />
                            <CardMedia
                              sx={{ cursor: "pointer" }}
                              component="img"
                              height="194"
                              image={response.img}
                              alt={response.alt}
                              onClick={(e) =>
                                router.push(
                                  `${response.provider_id}/${response.id}`
                                )
                              }
                              key={response.id}
                            />

                            <CardActions disableSpacing>
                              <IconButton aria-label="add to favorites">
                                <Checkbox
                                  {...label}
                                  icon={<FavoriteBorder />}
                                  checkedIcon={<Favorite />}
                                />
                              </IconButton>
                              <IconButton aria-label="bookmark">
                                <Checkbox
                                  {...label}
                                  icon={<BookmarkBorderIcon />}
                                  checkedIcon={<BookmarkIcon />}
                                />
                              </IconButton>
                            </CardActions>
                          </Card>
                          <br />
                        </Grid>
                      </>
                    );
                })}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default page;
