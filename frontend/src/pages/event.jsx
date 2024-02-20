import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import axios from "axios";
import Eventcard from "../components/Event/Eventcard";
import Evnetwebcrum from "../components/Event/Eventbredcrum";
import { API_BASE_URL } from "../utils/constants";

export default function Event() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchAllContents = async () => {
      try {
        const res = await axios.get(
          (`${API_BASE_URL}/event/events`)
        );
        setCardData(res.data);
      } catch (err) {

        
        console.log(err);
      }
    };
    fetchAllContents();
  }, []);
  return (
    <div>
      <Grid container spacing={2}style={{marginTop:"86px"}} >
        <Grid item xs={12}>
          <Evnetwebcrum />
        </Grid>

        {cardData.map((content, index) => (
          <Grid item key={index} lg={3} md={4} sm={6} xs={12}>
            <Box marginLeft={3.5} marginTop={1}>
              <Eventcard
                title={content.event_topic} // Assuming content_topic is the title
                eventdate={content.registration_start_date}
                image={content.event_image}
                description={content.event_short_description} // Assuming content_short_description is the description
                url={content.event_url}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
