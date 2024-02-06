import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import axios from "axios";
import PublicConsultationsCard from "../components/publicConsultations/PublicConsultationsCard";
import PublicConsultationbreadcrumb from "../components/publicConsultations/PublicConsultationbreadcrumb";

export default function PublicConsultations() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    // Fetch data from your backend API using Axios
    axios
      .get("http://localhost:3001/api/cards")
      .then((response) => setCardData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <PublicConsultationbreadcrumb />
        </Grid>

        {cardData.map((data, index) => (
          <Grid item key={index} lg={3} md={4} sm={6} xs={12}>
            <Box marginLeft={3.5} marginTop={1}>
              <PublicConsultationsCard
                title={data.title}
                subheader={data.subheader}
                image={data.image}
                description={data.description}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
