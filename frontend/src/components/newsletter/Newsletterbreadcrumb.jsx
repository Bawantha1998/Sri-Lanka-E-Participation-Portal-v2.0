import React from 'react'
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box } from "@mui/material";



function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
export default function Newsletterbreadcrumb() {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="#FFFFFF"
      href="/"
      onClick={handleClick}
    >
      Home
    </Link>,
    // <Link
    //   underline="hover"
    //   key="2"
    //   color="#FFFFFF"
    //   href="/material-ui/getting-started/installation/"
    //   onClick={handleClick}
    // >
    //   Photo Ga
    // </Link>,
    <Typography key="3" color="#FFFFFF">
      Newsletter
    </Typography>,
  ];

  return (
    <Box sx={{ bgcolor: "#345AE3", width: "100%", height: "auto" }}>
      <Box marginLeft={3.5} marginTop={2}>
        <Stack spacing={2}>
          <Box>
            <Breadcrumbs
              separator={
                <NavigateNextIcon
                  fontSize="small"
                  style={{ color: "#FFFFFF", fontFamily: "" }}
                />
              }
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
            <Box>
              <Typography
                sx={{ fontWeight: { xs: "normal", md: "bold" } }}
                key="3"
                color="#FFFFFF"
                fontSize={{ xs: 30, md: 50 }}
              >
                  Newsletter
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
);
}
