"use client"
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardMedia, Container, Grid, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import Skeleton from "@mui/material/Skeleton";
import { HomeService } from "../service/HomeService";

const HomeCard = () => {
  const theme = useTheme();
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Function to fetch card data
  async function fetchCards() {
    const result = await HomeService();
    setCard(result);
    setLoading(false);
  }

  // Fetch data on component mount
  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        {loading ? (
          // Show skeletons while loading
          Array.from({ length: 3 }).map((_, index) => (
            <Grid item key={index} xs={12} md={6} lg={4}>
              <Card sx={{ maxWidth: 345 }}>
                <Skeleton variant="rectangular" height={194} width={400} animation="wave" />
                <CardHeader title={<Skeleton animation="wave" />} />
              </Card>
            </Grid>
          ))
        ) : (
          // Render cards once data is loaded
          card.map((response) => (
            <Grid item key={response.id} xs={12} md={4} lg={4} sm={6}>
              <Card
                sx={{
                  maxWidth: "100%",
                  transition: "transform 0.3s ease-in-out",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
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
                    <div 
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        padding: '10px',
                        borderRadius: '5px',
                        opacity: 0,
                        transition: 'opacity 0.3s ease-in-out'
                      }}
                      className="hover-title"
                    >
                      <Typography variant="h6">{response.title}</Typography>
                    </div>
                  </div>
                </div>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
      <style jsx>{`
        .hover-title:hover {
          opacity: 1;
        }
      `}</style>
    </Container>
  );
};

export default HomeCard;
