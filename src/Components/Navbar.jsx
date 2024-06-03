import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ userName, isDarkMode, setIsDarkMode, logout }) => {
  const navigate = useNavigate();
  const toHome = () => navigate("/");
  const toProfile = () => navigate("/profile");
  const [anchorElNav, setAnchorElNav] = useState(null);
  const pages = ["Home", "WatchList"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1 }} onClick={toHome}>
            {" "}
            MIWA{" "}
          </Typography>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="1rem"
          >
            <IconButton
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={(e) => navigate(page === "Home" ? "/" : "/profile")}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
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
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Typography variant="h5" sx={{ flexGrow: 1 }} onClick={toProfile}>
              {" "}
              {userName}{" "}
            </Typography>
            <IconButton onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            {userName !== "" && (
              <IconButton onClick={logout}>
                <LogoutIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
