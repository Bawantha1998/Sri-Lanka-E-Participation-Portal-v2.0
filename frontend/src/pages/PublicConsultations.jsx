import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import axios from "axios";
import PublicConsultationsCard from "../components/publicConsultations/PublicConsultationsCard";
import PublicConsultationbreadcrumb from "../components/publicConsultations/PublicConsultationbreadcrumb";
import { API_BASE_URL } from "../utils/constants";

export default function PublicConsultations() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchAllContents = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/content/contentviews`);
        setCardData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllContents();
  }, []);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <PublicConsultationbreadcrumb />
        </Grid>

        {cardData.map((content, index) => (
          <Grid item key={index} lg={3} md={4} sm={6} xs={12}>
            <Box marginLeft={3.5} marginTop={1}>
              <PublicConsultationsCard
                title={content.content_topic} // Assuming content_topic is the title
                subheader={content.subheader} // Assuming you have a subheader field
                image={content.content_image}
                description={content.content_short_description} // Assuming content_short_description is the description
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
