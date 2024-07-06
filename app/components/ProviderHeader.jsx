'use client'
import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Breadcrumbs,
  Container,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { emphasize } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import { useParams } from "next/navigation";
import { HomeService } from "../service/HomeService";
import { useTheme } from "@mui/material";

const ProviderHeader = ({
  setFilteredData,
  sortByNameAZ,
  sortByNameZA,
  sortByPriceLowHigh,
  sortByPriceHighLow,
  title,
}) => {
  const theme = useTheme();
  const { providerSlug } = useParams();
  const [anchorEl, setAnchorEl] = useState(null);

  async function Desc() {
    try {
      const response = await HomeService(providerSlug);
      setFilteredData(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    Desc();
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSortByNameAZ = () => {
    sortByNameAZ();
    handleMenuClose();
  };

  const handleSortByNameZA = () => {
    sortByNameZA();
    handleMenuClose();
  };

  const handleSortByPriceLowHigh = () => {
    sortByPriceLowHigh();
    handleMenuClose();
  };

  const handleSortByPriceHighLow = () => {
    sortByPriceHighLow();
    handleMenuClose();
  };

  return (
    <div>
      <Box
        sx={{ background: theme.palette.background.card }}
        mt={{ md: "4%", xs: "25%", sm: "15%" }}
      >
        <Container>
          <Box sx={{ pt: 2, pb: 2 }}>
            <Breadcrumbs aria-label="breadcrumb">
              <a href="/">
                <Chip
                  component="a"
                  label="Home"
                  icon={<HomeIcon fontSize="small" />}
                  sx={{
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
                  }}
                />
              </a>
              <Chip
                component="a"
                label="Providers"
                icon={<ExpandMoreIcon />}
                sx={{
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
                }}
              />
            </Breadcrumbs>
            <Box 
              sx={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center",
                mt: 4 
              }}
            >
              <Typography
                variant="h4"
                sx={{ color: theme.palette.background.text }}
              >
                {title}
              </Typography>

              {/* Sorting Menu */}
              <Box>
                <Button
                  id="sort-menu"
                  aria-controls="sort-menu"
                  aria-haspopup="true"
                  onClick={handleMenuOpen}
                  variant="contained"
                >
                  Sort By
                </Button>
                <Menu
                  id="sort-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleSortByNameAZ}>Sort A-Z</MenuItem>
                  <MenuItem onClick={handleSortByNameZA}>Sort Z-A</MenuItem>
                  <MenuItem onClick={handleSortByPriceLowHigh}>
                    Sort Price Low to High
                  </MenuItem>
                  <MenuItem onClick={handleSortByPriceHighLow}>
                    Sort Price High to Low
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default ProviderHeader;
