
import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import axios from "axios";
import { motion } from "framer-motion";


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
      <Grid container spacing={2}style={{marginTop:"102px"}} >
        <Grid container item sm={12} md={12}>
          <Gallerybreadcrumb />
        </Grid>
        {galleryData.map((data, index) => (
          <Grid item key={index} lg={4} md={4} sm={6} xs={12}>
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.0, delay: index * 0.1 }} // Adjust transition as needed
            >
              <Box marginLeft={1} marginTop={1} marginRight={1.5}>
                <Gallerycard
                  Name={data.Name}
                  date={data.date}
                  image={data.image}
                  short_description={data.short_description}
                />
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </div>

  )
}
