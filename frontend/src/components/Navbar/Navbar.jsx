import {
  Box,
  Button,
  Typography,
  Menu,
  MenuList,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import logo2 from "../../images/image1.png";
import eplogo from "../../images/ep.png";
import logo4 from "../../images/logosl.png";
import Accordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import ArticleIcon from "@mui/icons-material/Article";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

// const useStyles = makeStyles({})
function Navbar() {
  const [anchorNav, setAnchorNav] = useState(null);
  const openMenu = (event) => {
    setAnchorNav(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorNav(null);
  };
  // const classes =useStyles()

  return (
    <div>
   

      <AppBar
        position="fixed"
        style={{ color: "#1e88e5" }}
        sx={{ bgcolor: "#f5f5f5" }}
      >
        <AppBar
          position="sticky"
          style={{ color: "#1e88e5" }}
          sx={{ boxShadow: "none", bgcolor: "#f5f5f5" }}
        >
          <Toolbar
            style={{ minHeight: 25, color: "#575050" }}
            sx={{
              bgcolor: "#bdbdbd",
            }}
          >
            <Typography
              style={{ marginLeft: "25px" }}
              sx={{
                fontSize: {
                  xs: "10px",
                  sm: "11px",
                  md: "12px",
                  xl: "13.5px",
                },
                display: { xs: "flex", md: "flex", sm: "flex" },
                gap: 0.5,
              }}
            >
              <Accordion
                sx={{
                  bgcolor: "#bdbdbd",
                  width: "100%",
                  border: "none", // Remove border style
                  boxShadow: "none",
                  // Remove box shadow
                }}
              >
                <AccordionSummary
                  sx={{ display: "flex" }}
                  style={{ marginTop: "0" }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <img
                    sx={{ display: { xs: "flex", md: "flex", sm: "flex" } }}
                    src={logo2}
                    alt="Logo"
                    style={{ width: "16px", height: "16px" }}
                  />
                  An Official Website of Sri Lanka Government Here’s how you
                  know
                </AccordionSummary>
                <AccordionDetails
                  style={{ width: "auto" }}
                  sx={{ display: "flex", gap: "2rem" }}
                >
                  <p>
                    {" "}
                    <b> Official Websites use .gov.lk</b> <br />A .gov.lk
                    website belongs <br />
                    to an official government <br />
                    organization in the Sri Lanka.
                  </p>

                  <p>
                    <b> Secure .gov.lk websites use HTTPS</b> <br />A lock or
                    https: // means you've safely
                    <br /> connected to the .gov.lk website. <br />
                    Share sensitive information only on <br />
                    official,secure websites.
                  </p>
                </AccordionDetails>
              </Accordion>
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar>
          <div style={{ marginLeft: "auto" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <img
                src={logo4}
                alt="Logo"
                style={{ width: "auto", height: "45px" }}
              />
            </IconButton>
          </div>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <img
              src={eplogo}
              alt="Logo"
              style={{ width: "", height: "45px", marginLeft: "-16px" }}
            />
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Participate</Button>
            <Button color="inherit">Read</Button>
            <Button color="inherit" href="/photogallery">
              Photo Gallery
            </Button>
            <Button color="inherit">Who We are </Button>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={openMenu}
            >
              <MenuRoundedIcon />
            </IconButton>
            <Menu
              style={{ marginTop: "11px" }}
              anchorEl={anchorNav}
              open={Boolean(anchorNav)}
              onClick={closeMenu}
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              {/* <MenuList
                style={{ color: "#1e88e5", width: "1000px" }}
                sx={{ textTransform: "uppercase", bgcolor: "f5f5f5" }}
              >
                <MenuItem> <HomeIcon fontSize="small"/>Home</MenuItem>
                <MenuItem>  <GroupIcon fontSize="small" />Participate</MenuItem>
                <MenuItem>  <ArticleIcon fontSize="small" />Read</MenuItem>
                <MenuItem> <PhotoLibraryIcon fontSize="small" /> Photo Gallery</MenuItem>
                <MenuItem>    <InfoIcon fontSize="small" />Who We are</MenuItem>
                <MenuItem>  <ContactMailIcon fontSize="small" /> Contact us</MenuItem>
              </MenuList> */}
              <MenuList sx={{ color: "#1e88e5", width: "1000px", textTransform: "uppercase", bgcolor: "f5f5f5" }}>
            <MenuItem sx={{ display: "flex", gap: 1 }}>
              <HomeIcon fontSize="small" />
              Home
            </MenuItem>
            <MenuItem sx={{ display: "flex", gap: 1 }}>
              <GroupIcon fontSize="small" />
              Participate
            </MenuItem>
            <MenuItem sx={{ display: "flex", gap: 1 }}>
              <ArticleIcon fontSize="small" />
              Read
            </MenuItem>
            <MenuItem sx={{ display: "flex", gap: 1 }}>
              <PhotoLibraryIcon fontSize="small" />
              Photo Gallery
            </MenuItem>
            <MenuItem sx={{ display: "flex", gap: 1 }}>
              <InfoIcon fontSize="small" />
              Who We are
            </MenuItem>
            <MenuItem sx={{ display: "flex", gap: 1 }}>
              <ContactMailIcon fontSize="small" />
              Contact us
            </MenuItem>
          </MenuList>
            </Menu>
          </Box>

          {/* copypast same  */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <img
              src={logo4}
              alt="Logo"
              style={{ width: "auto", height: "45px" }}
            />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img
              src={eplogo}
              alt="Logo"
              style={{ width: "", height: "30px", marginLeft: "-16px" }}
            />
          </Typography>
          <Search sx={{ display: { xs: "flex", md: "flex" } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <div></div>
    </div>
  );
}

export default Navbar;
