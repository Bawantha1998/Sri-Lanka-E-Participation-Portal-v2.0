
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { API_BASE_URL } from "../../utils/constants";



export default function EventCard() {
  const [events, setevents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9; // Number of cards to display per page

  useEffect(() => {
    const fetchAllevents = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/event/events`);
        setevents(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllevents();
  }, []);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = events.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardHeader
        title={
          <div style={{ fontSize: "20px" }}>
            <b> Guidelines for Digital Signatures</b>
          </div>
        }
        subheader="September 14, 2016"
      />
      <CardMedia component="img" height="194" image={`${API_IMG_URL}/${event.event_image}`} alt="Paella dish" />
      <CardContent>
    
      </CardContent>
      <CardActions>
        <Button
          sx={{
            bgcolor: "#345AE3",
            color: "#FFFFFF",
            fontSize: 13,
            fontWeight: "",
            "&:hover": {
              bgcolor: "#2a487e", // Change this to the desired hover color
            },
          }}
          size="small"
        >
          View event details
        </Button>
      </CardActions>
    </Card>
  );
}
