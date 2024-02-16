import React from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

// Define styled components for styling
const RootContainer = styled("div")({
  backgroundColor: "#0178ba",
  maxWidth: "100%",
  margin: "auto",
  padding: "40px",
  color: "#ffffff",
});

const IconContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  width: "75%",
  margin: "auto",
});

const SectionContainer = styled("div")({
  marginBottom: "24px",
});

const Footer = () => {
  return (
    <>
      <br />
      <RootContainer>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={4}>
            <Typography variant="h6" gutterBottom>
              eParticipation Portal | Government of Sri Lanka
            </Typography>
            <Typography variant="body1" gutterBottom>
              +94 112 369 099
            </Typography>
            <IconContainer>
              <FaFacebookSquare size={30} />
              <FaGithubSquare size={30} />
              <FaInstagram size={30} />
              <FaTwitterSquare size={30} />
              <FaDribbbleSquare size={30} />
            </IconContainer>
          </Grid>
          <Grid item xs={12} lg={8} container spacing={4}>
            <Grid item xs={12} md={6} lg={3} component={SectionContainer}>
              <Typography variant="h6" gutterBottom>
                Participate
              </Typography>
              <ul>
                <li>Events</li>
                <li>Public Consultation</li>
              </ul>
            </Grid>
            {/* Other Grid items go here */}
            <Grid item xs={12} md={6} lg={3} component={SectionContainer}>
              <Typography variant="h6" gutterBottom>
                About Us
              </Typography>
              <ul>
                <li>About ConnectSL</li>
                <li>General Feedback</li>
                <li>SiteMap</li>

              </ul>
            </Grid>

            <Grid item xs={12} md={6} lg={3} component={SectionContainer}>
              <Typography variant="h6" gutterBottom>
                User Policies
              </Typography>
              <ul>
                <li>Terms of Use</li>
                <li>Terms of Participation</li>
              </ul>
            </Grid>

            <Grid item xs={12} md={6} lg={3} component={SectionContainer}>
              <Typography variant="h6" gutterBottom>
                For Media
              </Typography>
              <ul>
                <li>News & Press Releases</li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </RootContainer>
    </>
  );
};

export default Footer;
