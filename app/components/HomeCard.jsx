"use client"
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardMedia, Container, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import Skeleton from "@mui/material/Skeleton";
import { HomeService } from "../service/HomeService";

const HomeCard = () => {
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  async function fetchCards() {
    const result = await HomeService();
    setCard(result);
    setLoading(false);
  }

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        {loading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <Grid item key={index} xs={12} md={6} lg={4}>
              <Card sx={{ maxWidth: 345 }}>
                <Skeleton variant="rectangular" height={194} width={400} animation="wave" />
                <CardHeader title={<Skeleton animation="wave" />} />
              </Card>
            </Grid>
          ))
        ) : (
          card.map((response) => (
            <Grid item key={response.id} xs={12} md={4} lg={4} sm={6}>
              <Card
                sx={{
                  maxWidth: "100%",
                  transition: "transform 0.3s ease-in-out",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",

                }}
              >
                <CardHeader
                  title={response.title}
                  sx={{
                    background: "#a4c8eb", fontWeight: "bold", transition: "transform 0.3s ease-in-out", cursor: 'pointer', "&:hover": {
                      color: '#1976d2'
                    }
                  }}
                />
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    transition: "transform 0.3s ease-in-out"
                  }}
                  onClick={() => router.push(`${response.id}/${response.slug}`)}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <div style={{ position: 'relative', width: '100%', height: 0, paddingBottom: '56.25%' }}>
                    <CardMedia
                      component="img"
                      image={response.image}
                      alt={response.alt}
                      sx={{
                        cursor: "pointer",
                        objectFit: "cover",
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                      }}
                    />
                  </div>
                </div>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default HomeCard;
