import React from 'react'
import Grid from '@mui/material/Grid'; 
import Typography from "@mui/material/Typography";
import { Container } from '@mui/material';
import Gallerybreadcrumb from '../components/gallery/gallerybreadcrumb';
import Gallerycard from '../components/gallery/gallerycard';
// import Gallerycard2 from '../gallery/gallerycard2';
export default function Photogallery() {
  return (
    <div>
    {/* <Container> */}
    <Grid container spacing={2}>
      <Grid container item sm={12} md={12}>
        <Gallerybreadcrumb/>
      </Grid>
     
      <Gallerycard/>
      </Grid>
     
      
    
  </div>
//     <Container>
// <br></br>
    
//        <Gallerybreadcrumb/>
//         <Gallerycard/>
        
        

   
     
//     </Container>
  )
}
