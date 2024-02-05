import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Eventbredcrum from "../components/Event/Eventbredcrum";
import EventCard from "../components/Event/Eventcard";

export default function PublicConsultations() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid container item sm={12} md={12}>
          <Eventbredcrum/>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Box marginLeft={3.5} marginTop={1}>
            <EventCard />
          </Box>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Box marginLeft={3.5} marginTop={1}>
            <EventCard />
          </Box>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Box marginLeft={3.5} marginTop={1}>
            <EventCard />
          </Box>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Box marginLeft={3.5} marginTop={1}>
            <EventCard/>
          </Box>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Box marginLeft={3.5} marginTop={1}>
            <EventCard />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
