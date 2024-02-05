
import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import axios from "axios";

import Gallerybreadcrumb from '../components/gallery/gallerybreadcrumb';
import Gallerycard from '../components/gallery/gallerycard';
// import Gallerycard2 from '../gallery/gallerycard2';
export default function Photogallery() {

  const [galleryData, setgalleryData] = useState([]);

  useEffect(() => {
    // Fetch data from your backend API using Axios
    axios
      .get("http://localhost:3001/api/gallerycard")
      .then((response) => setgalleryData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  
  return (
    <div>
   
    <Grid container spacing={2}>
      <Grid container item sm={12} md={12}>
        <Gallerybreadcrumb/>
      </Grid>
     
      {galleryData.map((data, index) => (
          <Grid item key={index} md={3} sm={6} xs={12}>
            <Box marginLeft={3.5} marginTop={1} marginRight={1}>
              <Gallerycard
                Name={data.Name}
                date={data.date}
                image={data.image}
                short_description={data.short_description}
              />
            </Box>
          </Grid>
         ))}
    </Grid>
     
      
    
  </div>
//     <Container>
// <br></br>
    
//        <Gallerybreadcrumb/>
//         <Gallerycard/>
        
        

   
     
//     </Container>
  )
}
