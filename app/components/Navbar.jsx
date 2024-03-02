"use client"
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useState, useEffect } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Badge, Hidden } from "@mui/material";
import { styled } from "@mui/material/styles";
import { getFaviorites } from "../service/getFaviourite";
import { getCart } from "../service/getCart";
import Cookies from "js-cookie";
import eshopLogo from "../images/eshopLogo.jpg";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
const pages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/pages/about" },
  { label: "Contact", href: "/pages/contact" },
];
const settings = [
  { label: "Profile", href: "/pages/profile" },
  { label: "Logout", href: "/pages/logout" },
];

function App({ darkThemeFun, lightthemFun }) {
  const theme=useTheme()
  const [cart, setCart] = useState(0);
  const [fav, setFav] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const favItems = useSelector((state) => state.likes.favouriteItems);

  let tokens;
  const authenticated = useSelector((state) => (state.auth.message = "true"));
  const user = Cookies.get("user");
  useEffect(() => {
    if (authenticated) {
      if (cartItems) {
        setCart(cartItems.length);
      }
      if (favItems) {
        setFav(favItems.length);
      }
    } else {
      setCart(0);
      setFav(0);
    }
  }, [tokens, cartItems, favItems]);


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <Container>
      <AppBar
        position="fixed"
        sx={{
          background:theme.palette.background.body,
          // color: "black",
          zIndex: 1000,
        }}
      >
        <Container>
          <Toolbar disableGutters>
            <Hidden mdUp>
              {/* Display only on extra small devices */}
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            {/* Wrap the image inside a Link */}
            <Link href="/" passHref>
              <Box sx={{ flexGrow: 1, cursor: "pointer" }}>
                <img
                  src={eshopLogo.src}
                  style={{
                    height: 90,
                    width: 160,
                  }}
                  title="eshop"
                  alt="eshop-image"
                />
              </Box>
            </Link>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  color: theme.palette.background.text,
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.label}
                    onClick={handleCloseNavMenu}
                    style={{
                      width: 200,
                      height: 50,
                      marginTop: 20,
                       color: theme.palette.background.text,
                    }}
                  >
                    <Link href={page.href} style={{ textDecoration: "none" }}>
                      <Typography textAlign="center" sx={{color: theme.palette.background.text,}}>{page.label}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Link
                  href={page.href}
                  style={{ textDecoration: "none" }}
                  key={page.label}
                >
                  <Button
                    key={page.label}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: theme.palette.background.text, display: "block" }}
                  >
                    {page.label}
                  </Button>
                </Link>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={darkMode ? lightthemFun : darkThemeFun} sx={{ p: 0 }}>
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              {user == "true" && authenticated ? (
                <>
                  <IconButton
                    color="primary"
                    aria-label="add to shopping cart"
                    href="/pages/checkout"
                  >
                    <StyledBadge badgeContent={cart} color="secondary">
                      <AddShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>

                  <IconButton
                    color="primary"
                    aria-label="add to shopping cart"
                    href="/pages/profile/favourites"
                    sx={{ marginRight: 2 }}
                  >
                    <StyledBadge badgeContent={fav} color="secondary">
                      <FavoriteBorderOutlinedIcon />
                    </StyledBadge>
                  </IconButton>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar />
                    </IconButton>
                  </Tooltip>

                </>
              ) : (
                <>

                  <Link href="/pages/login" passHref>
                    <Button component="a" variant="contained" sx={{ mr: 4 }}>
                      Login
                    </Button>
                  </Link>
                </>
              )}

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
                    <Link
                      href={setting.href}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography textAlign="center" sx={{color: theme.palette.background.text,}}>
                        {setting.label}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Container>
  );
}

export default App;
