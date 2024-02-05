import { Grid } from "@mui/material";
import React from "react";
import NewspressCard from "../components/newspress/NewspressCard";
import Newspressbreadcrumb from "../components/newspress/Newspressbreadcrumb";



// const noOfCards = [1, 2, 3, 4, 5, 6];

export default function Newspress() {
  return (
    <div>
      {/* <Container> */}
      <Grid container spacing={2}>
        <Grid container item sm={12} md={12}>
          <Newspressbreadcrumb />
        </Grid>
        <Grid item md={6} sm={12}>
          <NewspressCard />
        </Grid>
        <Grid item md={6} sm={12}>
          <NewspressCard />
        </Grid>
        <Grid item md={6} sm={12}>
          <NewspressCard />
        </Grid>
        <Grid item md={6} sm={12}>
          <NewspressCard />
        </Grid>
        <Grid item md={6} sm={12}>
          <NewspressCard />
        </Grid>
      </Grid>
    </div>
  );
}
