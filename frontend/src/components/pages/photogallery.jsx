import React from 'react'
import Grid from '@mui/material/Grid'; 
import Typography from "@mui/material/Typography";
import { Container } from '@mui/material';
import Gallerycard from '../gallery/gallerycard';
import Gallerycard2 from '../gallery/gallerycard2';
export default function Photogallery() {
  return (
    
    <Container>
<br></br>
    <Grid container spacing={2}>
        <Grid item xs={12} lg={4} md={6}>
        <Gallerycard/>
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
        <Gallerycard2/>
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
     
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
    
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
     
        </Grid>


    </Grid>
     
    </Container>
  )
}
