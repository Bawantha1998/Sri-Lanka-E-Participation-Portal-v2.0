import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import NewspressCard from "../components/newspress/NewspressCard";

// const noOfCards = [1, 2, 3, 4, 5, 6];

export default function Newspress() {
  return (
    <div>
      {/* <Container> */}
      <Grid container spacing={2}>
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
      {/* <Grid container>
          {noOfCards.map((carNo) => (
            <Grid container item xs={12} md={6} direction="row" spacing={2}>
              <Grid container item xs={4}>
                <Grid item sx={{ bgcolor: "red" }}>
                  Part 1
                </Grid>
              </Grid>
              <Grid container item xs={8}>
                <Grid item sx={{ bgcolor: "green" }}>
                  Part 2
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container> */}
    </div>
  );
}
