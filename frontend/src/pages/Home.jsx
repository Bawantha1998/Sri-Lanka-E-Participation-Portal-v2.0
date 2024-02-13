import React from "react";
import ControllCarousels from "../components/carousel/ControlCarousel";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <br /> <br />
      <ControllCarousels />
      <p />
      
      <Typography variant="h6" color="primary">
        Public Consultation
      </Typography>
      <div>
        <ul>
          <li>Open</li>
          <li>Closed</li>
        </ul>
      </div>
    </>
  );
};

export default Home;
