import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ContactusBreadcrumb from "../components/contactus/ContactusBreadcrumb";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FaxIcon from "@mui/icons-material/Fax";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function ContactUs() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid container item sm={12} md={12}>
          <ContactusBreadcrumb />
        </Grid>
        <Grid
          container
          item
          sx={{ bgcolor: "#E8E8E8", width: "100%", height: "auto" }}
          marginLeft={2}
          marginTop={2}
          borderRadius={5}
        >
          <Grid item xs={12}>
            <Box marginLeft={3} marginTop={2}>
              <Typography
                sx={{ fontWeight: { xs: "bold", md: "bold" } }}
                key="3"
                color="#00000"
                fontSize={{ xs: 20, md: 30 }}
              >
                Address <HomeIcon />
              </Typography>
              <Typography
                sx={{ fontWeight: { xs: "normal", md: "normal" } }}
                key="3"
                color="#00000"
                fontSize={{ xs: 15, md: 20 }}
              >
                490 R. A. De Mel Mawatha,<br></br> Colombo 00300.
              </Typography>
            </Box>
          </Grid>
          <hr />
          <Grid container item xs={12} alignItems="center">
            <Grid item xs={12} sm={6} md={4}>
              <Box marginLeft={3} marginTop={2} flexGrow={1}>
                <Typography
                  sx={{ fontWeight: { xs: "bold", md: "bold" } }}
                  key="3"
                  color="#00000"
                  fontSize={{ xs: 20, md: 30 }}
                >
                  Tel <LocalPhoneIcon />
                </Typography>
                <Typography
                  sx={{ fontWeight: { xs: "normal", md: "normal" } }}
                  key="3"
                  color="#00000"
                  fontSize={{ xs: 15, md: 20 }}
                >
                  +94 112 369 099
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box marginLeft={3} marginTop={2} flexGrow={1}>
                <Typography
                  sx={{ fontWeight: { xs: "bold", md: "bold" } }}
                  key="3"
                  color="#00000"
                  fontSize={{ xs: 20, md: 30 }}
                >
                  Fax <FaxIcon />
                </Typography>
                <Typography
                  sx={{ fontWeight: { xs: "normal", md: "normal" } }}
                  key="3"
                  color="#00000"
                  fontSize={{ xs: 15, md: 20 }}
                >
                  +94 112 369 099
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Box marginLeft={3} marginTop={2} flexGrow={1}>
                <Typography
                  sx={{ fontWeight: { xs: "bold", md: "bold" } }}
                  key="3"
                  color="#00000"
                  fontSize={{ xs: 20, md: 30 }}
                >
                  Email <EmailIcon />
                </Typography>
                <Typography
                  sx={{ fontWeight: { xs: "normal", md: "normal" } }}
                  key="3"
                  color="#00000"
                  fontSize={{ xs: 15, md: 20 }}
                >
                  info@icta.lk
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box marginLeft={3} marginTop={2} marginBottom={4}>
              <Typography
                sx={{ fontWeight: { xs: "bold", md: "bold" } }}
                key="3"
                color="#00000"
                fontSize={{ xs: 20, md: 30 }}
              >
                Operating Hours <AccessTimeIcon />
              </Typography>
              <Typography
                sx={{ fontWeight: { xs: "normal", md: "normal" } }}
                key="3"
                color="#00000"
                fontSize={{ xs: 15, md: 20 }}
              >
                <b>Mon-Fri: </b> 8.30am-6.00pm <br></br> Closed on Weekends and
                Public Holidays
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
