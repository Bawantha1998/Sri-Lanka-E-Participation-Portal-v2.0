import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container, Dialog, IconButton } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import CloseIcon from "@mui/icons-material/Close";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

import temppic1 from "../../images/temppic3.jpg";
import temppic2 from "../../images/temppic1.jpg";
import temppic3 from "../../images/temppic2.jpg";
import temppic4 from "../../images/temppic4.jpg";

export default function Allimagegallery() {
  const [openCarousel, setOpenCarousel] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleOpenCarousel = (index) => {
    setOpenCarousel(true);
    setSelectedImageIndex(index);
  };

  const handleCloseCarousel = () => {
    setOpenCarousel(false);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const images = [temppic1, temppic2, temppic3, temppic4, temppic1];

  return (
    <Container>
      <br />
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item xs={12} lg={3} md={6} key={index}>
            <Card
              sx={{ display: "flex" }}
              onClick={() => handleOpenCarousel(index)}
            >
              <CardMedia
                component="img"
                sx={{ width: "400", height:200}}
                image={image}
                alt={`Image ${index + 1}`}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={openCarousel}
        onClose={handleCloseCarousel}
        maxWidth="md"
        fullWidth
         scroll="body"
      >
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleCloseCarousel}
          aria-label="close"
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <Carousel
          activeIndex={selectedImageIndex}
          autoPlay={false}
          interval={3000}
          timeout={500}
          navButtonsAlwaysVisible
          indicators={false}
        >
          {images.map((image, index) => (
            <Card key={index}>
              <CardMedia
                component="img"
                sx={{ width: "100%" }}
                image={image}
                alt={`Image ${index + 1}`}
              />
            </Card>
          ))}
        </Carousel>
      </Dialog>
    </Container>
  );
}

