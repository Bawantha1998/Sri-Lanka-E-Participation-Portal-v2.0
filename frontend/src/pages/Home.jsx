import React, { useEffect, useState } from "react";
import ControllCarousels from "../components/carousel/ControlCarousel";
import axios from "axios";
import { API_BASE_URL } from "../utils/constants";
import PublicConsultationsCard from "../components/publicConsultations/PublicConsultationsCard";
import { Box, Grid, Typography } from "@mui/material";

const Home = () => {
  // State for storing card data
  const [cardData, setCardData] = useState([]);

  // Fetch data on component mount
  useEffect(() => {
    const fetchAllContents = async () => {
      try {
        const res = await axios.get(
          `${API_BASE_URL}/consultations/latest-public-consultations`
        );
        setCardData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllContents();
  }, []);
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* Carousels */}
      <ControllCarousels />
      <p />

      {/* Main content */}
      <div>
        <Grid container>
          {/* Left section */}
          <Grid xs={8}>
            {/* Medium size */}
            <Typography
              variant="h6"
              style={{
                textDecoration: "none",
                margin: "0",
                padding: "0",
                fontFamily: "Arial, sans-serif",
                fontWeight: "bold",
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#1e88e5",
                transition: "color 0.3s ease",
              }}
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              <a
                style={{
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  background: "#f0f0f0",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                  transition: "background 0.3s ease",
                  display: "block",
                  color: "#1e88e5",
                  textDecoration: "underline",
                }}
                href="##"
                onMouseOver={(e) => {
                  e.target.style.background = "#ddd";
                  e.target.parentNode.style.color = "#007bff";
                }}
                onMouseOut={(e) => {
                  e.target.style.background = "#f0f0f0";
                  e.target.parentNode.style.color = "#1e88e5";
                }}
              >
                PUBLIC CONSULTATION
              </a>
            </Typography>
            <br />
            <p />

            {/* extra small size */}
            <Typography
              variant="h6"
              style={{
                textDecoration: "none",
                margin: "0",
                padding: "0",
                fontFamily: "Arial, sans-serif",
                fontWeight: "bold",
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#1e88e5",
                transition: "color 0.3s ease",
                fontSize: "10px",
              }}
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <a
                style={{
                  textDecoration: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  background: "#f0f0f0",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                  transition: "background 0.3s ease",
                  display: "block",
                  color: "#1e88e5",
                  textDecoration: "underline",
                }}
                href="##"
                onMouseOver={(e) => {
                  e.target.style.background = "#ddd";
                  e.target.parentNode.style.color = "#007bff";
                }}
                onMouseOut={(e) => {
                  e.target.style.background = "#f0f0f0";
                  e.target.parentNode.style.color = "#1e88e5";
                }}
              >
                PUBLIC CONSULTATION
              </a>
            </Typography>
            <br />
          </Grid>

          {/* Right section */}
          <Grid xs={4}>
            {/* Typography for ongoing and closed */}
            <Typography variant="h7" color="primary">
              <ul
                style={{
                  display: "flex",
                  gap: "0.3rem",
                  justifyContent: "end",
                  listStyleType: "none",
                  padding: "0",
                  margin: "0",
                }}
              >
                <li>
                  <a
                    style={{
                      color: "#1e88e5",
                      textDecoration: "none",
                      padding: "0.5rem 1rem",
                      borderRadius: "0.5rem",
                      background: "#f0f0f0",
                      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                      transition: "background 0.3s ease",
                    }}
                    href="##"
                    onMouseOver={(e) => {
                      e.target.style.background = "#ddd";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background = "#f0f0f0";
                    }}
                  >
                    Ongoing
                  </a>
                </li>
                <li>|</li>
                <li>
                  <a
                    style={{
                      color: "red",
                      textDecoration: "none",
                      padding: "0.5rem 1rem",
                      borderRadius: "0.5rem",
                      background: "#f0f0f0",
                      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                      transition: "background 0.3s ease",
                    }}
                    href="##"
                    onMouseOver={(e) => {
                      e.target.style.background = "#ddd";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background = "#f0f0f0";
                    }}
                  >
                    Closed
                  </a>
                </li>
              </ul>
            </Typography>
          </Grid>
          <Grid container spacing={2} justifyContent="center">
            {cardData.map((content, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <Box marginTop={1}>
                  <PublicConsultationsCard
                    title={content.content_topic}
                    subheader={content.subheader}
                    image={content.content_image}
                    description={content.content_short_description}
                    url={`/consultations/public-consultations/${content.content_url}`}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
