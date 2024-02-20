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
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import ArticleIcon from "@mui/icons-material/Article";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Event from "../../pages/event";

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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // State and event handlers for the "Participate" button-menu pair
  const [participateAnchorEl, setParticipateAnchorEl] = useState(null);
  const [participateOpen, setParticipateOpen] = useState(false);

  const handleParticipateClick = (event) => {
    setParticipateAnchorEl(event.currentTarget);
    setParticipateOpen(!participateOpen);
  };

  const handleParticipateClose = () => {
    setParticipateAnchorEl(null);
    setParticipateOpen(false);
  };

  // State and event handlers for the "Read" button-menu pair
  const [ReadAnchorEl, setReadAnchorEl] = useState(null);
  const [ReadOpen, setReadOpen] = useState(false);

  const handleReadClick = (event) => {
    setReadAnchorEl(event.currentTarget);
    setReadOpen(!whoWeAreOpen);
  };

  const handleReadClose = () => {
    setReadAnchorEl(null);
    setReadOpen(false);
  };

  // State and event handlers for the "Who We Are" button-menu pair
  const [whoWeAreAnchorEl, setWhoWeAreAnchorEl] = useState(null);
  const [whoWeAreOpen, setWhoWeAreOpen] = useState(false);

  const handleWhoWeAreClick = (event) => {
    setWhoWeAreAnchorEl(event.currentTarget);
    setWhoWeAreOpen(!whoWeAreOpen);
  };

  const handleWhoWeAreClose = () => {
    setWhoWeAreAnchorEl(null);
    setWhoWeAreOpen(false);
  };

  return (
    <>
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
              sx={{
                fontSize: {
                  xs: "9px",
                  sm: "11px",
                  md: "12px",
                  xl: "13.5px",
                },
                marginLeft: {
                  xs: "38px",
                  sm: "",
                  md: "3px",
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

            {/* Participate  */}
            <Button
              id="demo-positioned-button-participate"
              aria-controls={
                participateOpen ? "demo-positioned-menu-participate" : undefined
              }
              aria-haspopup="true"
              aria-expanded={participateOpen ? "true" : undefined}
              onClick={handleParticipateClick}
            >
              Participate
            </Button>
            <Menu
              sx={{ marginTop: "35px", display: { xs: "none", md: "flex" } }}
              id="demo-positioned-menu-participate"
              anchorEl={participateAnchorEl}
              open={participateOpen}
              onClose={handleParticipateClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={handleParticipateClose}>
                <a
                  href="/consultations/events"
                  style={{ textDecoration: "none", color: "GrayText" }}
                >
                  Events
                </a>
              </MenuItem>
              <MenuItem onClick={handleParticipateClose}>
                <a
                  href="/consultations/public-consultations"
                  style={{ textDecoration: "none", color: "GrayText" }}
                >
                  Public Consultations
                </a>
              </MenuItem>
            </Menu>

            <Button
              id="demo-positioned-button-Read"
              aria-controls={ReadOpen ? "demo-positioned-menu-Read" : undefined}
              aria-haspopup="true"
              aria-expanded={ReadOpen ? "true" : undefined}
              onClick={handleReadClick}
            >
              Read
            </Button>
            <Menu
              sx={{ marginTop: "35px", display: { xs: "none", md: "flex" } }}
              id="demo-positioned-menu-Read"
              anchorEl={ReadAnchorEl}
              open={ReadOpen}
              onClose={handleReadClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={handleReadClose}>
                <a
                  href="/news-and-press-releases/latest-news"
                  style={{ textDecoration: "none", color: "GrayText" }}
                >
                  {" "}
                  News & Press Releases
                </a>
              </MenuItem>
            </Menu>
            <Button color="inherit" href="/photogallery">
              Photo Gallery
            </Button>

            {/* Who We are */}
            <Button
              id="demo-positioned-button-who-we-are"
              aria-controls={
                whoWeAreOpen ? "demo-positioned-menu-who-we-are" : undefined
              }
              aria-haspopup="true"
              aria-expanded={whoWeAreOpen ? "true" : undefined}
              onClick={handleWhoWeAreClick}
            >
              Who We Are
            </Button>
            <Menu
              sx={{ marginTop: "35px", display: { xs: "none", md: "flex" } }}
              id="demo-positioned-menu-who-we-are"
              anchorEl={whoWeAreAnchorEl}
              open={whoWeAreOpen}
              onClose={handleWhoWeAreClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={handleWhoWeAreClose}>About Us</MenuItem>
              <MenuItem onClick={handleWhoWeAreClose}>
                <a
                  href="/faqs"
                  style={{ textDecoration: "none", color: "GrayText" }}
                >
                  {" "}
                  FAQs
                </a>
              </MenuItem>
              <MenuItem onClick={handleWhoWeAreClose}>
                {" "}
                <a
                  href="/useful-links"
                  style={{ textDecoration: "none", color: "GrayText" }}
                >
                  Useful Links
                </a>
              </MenuItem>
              <MenuItem onClick={handleWhoWeAreClose}>
                General Feedback
              </MenuItem>
            </Menu>
          </Box>
              {/* Mobile view  */}
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
              <MenuList
                sx={{
                  color: "#1e88e5",
                  width: "1000px",
                  textTransform: "uppercase",
                  bgcolor: "f5f5f5",
                }}
              >
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
    </>
  );
}

export default Navbar;
