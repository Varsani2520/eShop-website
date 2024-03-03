import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Breadcrumbs, Container, Typography } from "@mui/material";
import { emphasize, styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import { useParams } from "next/navigation";
import { ProviderService } from "../service/ProviderService";
import { HomeService } from "../service/HomeService";
import { useTheme } from '@mui/material'
const ProviderHeader = () => {
  const theme = useTheme()
  const [desc, setdesc] = useState([]);
  const { providerSlug } = useParams();

  async function Desc() {
    try {
      const response = await HomeService(providerSlug);
      setdesc(response);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    Desc();
  }, []);
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
  return (
    <div>
      <Box sx={{ background: theme.palette.background.card }} mt={{ md: "4%", xs: "25%", sm: '15%' }}>
        <Container>
          <Box sx={{ pt: 2, pb: 2 }}>
            <Breadcrumbs aria-label="breadcrumb">
              <a href="/">
                <StyledBreadcrumb
                  component="a"
                  label="Home"
                  icon={<HomeIcon fontSize="small" />}
                />
              </a>
              <StyledBreadcrumb
                component="a"

                label="Providers"
                icon={<ExpandMoreIcon />}
              />
            </Breadcrumbs>
            {desc.map((response) => {
              if (providerSlug == response.id)
                return (
                  <Typography variant="h4" sx={{ mt: 4, color: theme.palette.background.text }}>
                    {response.slug}
                  </Typography>
                );
            })}
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default ProviderHeader;
