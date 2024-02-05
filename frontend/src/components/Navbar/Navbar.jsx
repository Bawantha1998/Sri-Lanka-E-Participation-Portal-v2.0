import {
  Box,
  Button,
  Typography,
  Menu,
  MenuList,
  MenuItem,
} from "@mui/material";
import React, { useState, MouseEvent } from "react";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import logo2 from "../../images/image1.png";
import eplogo from "../../images/ep.png";
import logo4 from '../../images/logosl.png';
import Accordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

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
      <AppBar  sx={{ boxShadow: "none" }} >
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
                xs:'11px',
                sm:'12px',
                md:'14px',
                lg:'15px',
                xl:'15.5px'

              },
              display: { xs: "flex", md: "flex", sm: "flex" },
              gap: 0.5,
           
            }}
          >
            <img
              src={logo2}
              alt="Logo"
              style={{ width: "15px", height: "15px" }}
            />
            <b  style={{display:"flex"}} >
              An Official Website of Sri Lanka Government {""}
              <span style={{ color: "#1e88e5", textDecoration: "underline" }}>
                {" "}
                {/* <Accordion  style={{marginLeft:"20px",height:"10px",fontSize:"12px" ,width:"25%"}}>
                  <AccordionSummary style={{marginTop:"0"}}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Here’s how you know 
                  </AccordionSummary>
                  <AccordionDetails style={{width:"100%"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                </Accordion> */}
              </span>
            </b>
          </Typography>
        </Toolbar>
      </AppBar>
      <br />

      <AppBar
        position="static"
        style={{ color: "#1e88e5" }}
        sx={{ bgcolor: "#f5f5f5" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
              <img src={logo4} alt="Logo" style={{ width: "auto", height: "45px" }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <img src={eplogo} alt="Logo" style={{ width: "", height: "45px",marginLeft:"-16px" }} />
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Participate</Button>
            <Button color="inherit">Read</Button>
            <Button color="inherit">Photo Gallery</Button>
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
              style={{marginTop:"11px"}}
              anchorEl={anchorNav}
              open={Boolean(anchorNav)}
              onClick={closeMenu}
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MenuList
                style={{ color: "#1e88e5" ,width:"1000px" }}
                sx={{ textTransform: "uppercase", bgcolor: "f5f5f5" }}
              >
                <MenuItem> Home</MenuItem>
                <MenuItem> Participate</MenuItem>
                <MenuItem> Read</MenuItem>
                <MenuItem> Photo Gallery</MenuItem>
                <MenuItem> Who We are</MenuItem>
                <MenuItem> Contact us</MenuItem>
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
             <img src={logo4} alt="Logo" style={{ width: "auto", height: "45px" }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img src={eplogo} alt="Logo" style={{ width: "", height: "45px", marginLeft:"-16px"}} />
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
    </div>
  );
}

export default Navbar;
