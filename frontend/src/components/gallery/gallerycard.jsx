import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import temppic1 from "../../images/temppic3.jpg";
import temppic2 from "../../images/temppic1.jpg";
import temppic3 from "../../images/temppic2.jpg";
import temppic4 from "../../images/temppic4.jpg";

import { Link } from "react-router-dom";

import { Button, CardActionArea, CardActions } from "@mui/material";

export default function Gallerycard() {
  const images = [temppic1, temppic2, temppic3, temppic4, temppic1,temppic4];

  return (
    <Grid container spacing={2} sx={{ mt: 1, mr: 1, mb: 1, ml: 1 }}>
      {images.map((image) => (
        <Grid item xs={12} lg={3} md={6}>
          <Card sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={image}
              alt="Live from space album cover"
            />

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Live From Space
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Date :2024.02.01
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="/Allimages">
                  <Button size="small" color="primary" variant="contained">
                    View Gallery
                  </Button>
                </Link>
              </CardActions>
            </Box>
          </Card>
        </Grid>
      ))}
      </Grid>
  );
}
