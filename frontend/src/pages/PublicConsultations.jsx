import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import PublicConsultationsCard from "../components/publicConsultations/PublicConsultationsCard";

export default function PublicConsultations() {
  return (
    <div>
      <Grid container spacing={2}>
        {/* <Grid container item sm={12} md={12}>
    <Newspressbreadcrumb />
  </Grid> */}
        <Grid item md={6} sm={12}>
          <PublicConsultationsCard />
        </Grid>
        <Grid item md={6} sm={12}>
          <PublicConsultationsCard />
        </Grid>
        <Grid item md={6} sm={12}>
          <PublicConsultationsCard />
        </Grid>
        <Grid item md={6} sm={12}>
          <PublicConsultationsCard />
        </Grid>
        <Grid item md={6} sm={12}>
          <PublicConsultationsCard />
        </Grid>
      </Grid>
    </div>
  );
}
