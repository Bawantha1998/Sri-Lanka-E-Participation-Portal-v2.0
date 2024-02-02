import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import PublicConsultationsCard from "../components/publicConsultations/PublicConsultationsCard";
import PublicConsultationbreadcrumb from "../components/publicConsultations/PublicConsultationbreadcrumb";

export default function PublicConsultations() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid container item sm={12} md={12}>
          <PublicConsultationbreadcrumb />
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Box marginLeft={3.5} marginTop={1}>
            <PublicConsultationsCard />
          </Box>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Box marginLeft={3.5} marginTop={1}>
            <PublicConsultationsCard />
          </Box>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Box marginLeft={3.5} marginTop={1}>
            <PublicConsultationsCard />
          </Box>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Box marginLeft={3.5} marginTop={1}>
            <PublicConsultationsCard />
          </Box>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Box marginLeft={3.5} marginTop={1}>
            <PublicConsultationsCard />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
