import { Box, Button, Typography, Menu, MenuItem } from "@mui/material";
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
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import RecordVoiceOverRoundedIcon from "@mui/icons-material/RecordVoiceOverRounded";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import Groups3Icon from "@mui/icons-material/Groups3";
import InfoIcon from "@mui/icons-material/Info";
import QuizIcon from "@mui/icons-material/Quiz";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Event from "../../pages/event";
import LockIcon from "@mui/icons-material/Lock";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";

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
  //  function override
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

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


  // Mobile 
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElNav2, setAnchorElNav2] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [open, setOpen] = React.useState(true);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenNavMenu2 = (event) => {
    setAnchorElNav2(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseNavMenu2 = () => {
    setAnchorElNav2(null);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  // State and event handlers for the "Participate-mobile" button-menu pair
  const [participatemobileAnchorEl, setParticipatemobileAnchorEl] =
    useState(null);
  const [participatemobileOpen, setParticipatemobileOpen] = useState(false);

  const handleParticipatemobileClick = (event) => {
    setParticipatemobileAnchorEl(event.currentTarget);
    setParticipatemobileOpen(!participatemobileOpen);
  };

  const handleParticipatemobileClose = () => {
    setParticipatemobileAnchorEl(null);
    setParticipatemobileOpen(false);
  };

  // State and event handlers for the "Read-mobile" button-menu pair
  const [readmobileAnchorEl, setReadmobileAnchorEl] = useState(null);
  const [readmobileOpen, setReadmobileOpen] = useState(false);

  const handleReadmobileClick = (event) => {
    setReadmobileAnchorEl(event.currentTarget);
    setReadmobileOpen(!readmobileOpen);
  };

  const handleReadmobileClose = () => {
    setReadmobileAnchorEl(null);
    setReadmobileOpen(false);
  };

  // State and event handlers for the "Who-We-Are-mobile" button-menu pair
  const [whowemobileAnchorEl, setWhowemobileAnchorEl] = useState(null);
  const [whowemobileOpen, setWhowemobileOpen] = useState(false);

  const handleWhowemobileClick = (event) => {
    setWhowemobileAnchorEl(event.currentTarget);
    setWhowemobileOpen(!whowemobileOpen);
  };

  const handleWhowemobileClose = () => {
    setWhowemobileAnchorEl(null);
    setWhowemobileOpen(false);
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
                    <b>
                      {" "}
                      <AccountBalanceIcon fontSize="inherit" /> Official
                      Websites use .gov.lk
                    </b>{" "}
                    <br />A .gov.lk website belongs <br />
                    to an official government <br />
                    organization in the Sri Lanka.
                  </p>

                  <p>
                    <b>
                      <LockIcon fontSize="inherit" /> Secure .gov.lk websites
                      use HTTPS
                    </b>{" "}
                    <br />A lock or https: // means you've safely
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
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              <List
                sx={{ bgcolor: "background.paper", width: "100%" }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    {""}
                  </ListSubheader>
                }
              >
                {/* Home  */}
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="HOME" />
                </ListItemButton>

                {/* Participation */}
                <ListItemButton onClick={handleParticipatemobileClick}>
                  <ListItemIcon>
                    <GroupIcon />
                  </ListItemIcon>
                  <ListItemText primary="PARTICIPATE" />
                  {participatemobileOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse
                  in={participatemobileOpen}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <EventNoteRoundedIcon />
                      </ListItemIcon>
                      <ListItemText primary="EVENTS" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <RecordVoiceOverRoundedIcon />
                      </ListItemIcon>
                      <ListItemText primary="PUBLIC CONSULTATIONS" />
                    </ListItemButton>
                  </List>
                </Collapse>

                {/* Read */}
                <ListItemButton onClick={handleReadmobileClick}>
                  <ListItemIcon>
                    <ArticleIcon />
                  </ListItemIcon>
                  <ListItemText primary="READ" />
                  {readmobileOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={readmobileOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <NewspaperIcon />
                      </ListItemIcon>
                      <ListItemText primary="NEWS & PRESS RELEASE" />
                    </ListItemButton>
                  </List>
                </Collapse>

                {/* Photo Gallery */}
                <ListItemButton>
                  <ListItemIcon>
                    <PhotoLibraryIcon />
                  </ListItemIcon>
                  <ListItemText primary="PHOTO GALLERY" />
                </ListItemButton>

                {/* Who We are */}
                <ListItemButton onClick={handleWhowemobileClick}>
                  <ListItemIcon>
                    <Groups3Icon />
                  </ListItemIcon>
                  <ListItemText primary="WHO WE ARE" />
                  {whowemobileOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={whowemobileOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <InfoIcon />
                      </ListItemIcon>
                      <ListItemText primary="ABOUT US" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <QuizIcon />
                      </ListItemIcon>
                      <ListItemText primary="FAQs" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <MenuBookIcon />
                      </ListItemIcon>
                      <ListItemText primary="USEFUL LINKS" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <ThumbUpAltIcon />
                      </ListItemIcon>
                      <ListItemText primary="GENERAL FEEDBACK" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
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
