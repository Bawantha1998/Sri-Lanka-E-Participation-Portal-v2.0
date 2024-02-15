import React, { useState, useEffect } from "react";
import {  Avatar, Grid, Paper, IconButton, Box } from "@material-ui/core";
import { Favorite as FavoriteIcon, Star as StarIcon } from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";
import { motion } from "framer-motion";
import { API_BASE_URL } from "../../utils/constants";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
const imgLink =
  "";

    // Add more properties if your data structure contains them
 
export default function Comment() {
    const [feedback, setFeedback] = useState({
        first_name: "",
        feedback: "",
        ctime: "",
        content_id: "",
      });
    const { content_id } = useParams();
    


    
    useEffect(() => {
        axios
          .get(`${API_BASE_URL}/feedback/${content_id}`)
          .then((response) => {
            setFeedback(response.data);
          })
          .catch((error) => {
            console.error("Error--->>", error);
          });
      }, [content_id]);

    const [likes, setLikes] = useState(() => {
        const storedLikes = JSON.parse(localStorage.getItem('commentLikes')) || new Array(5).fill(0);
        return storedLikes;
    });
    const [ratings, setRatings] = useState(() => {
        const storedRatings = JSON.parse(localStorage.getItem('commentRatings')) || new Array(5).fill(0);
        return storedRatings;
    });

    useEffect(() => {
        localStorage.setItem('commentLikes', JSON.stringify(likes));
        localStorage.setItem('commentRatings', JSON.stringify(ratings));
    }, [likes, ratings]);

    const handleLikee = (num) => {
        const updatedLikes = [...likes];
        updatedLikes[num]++;
        setLikes(updatedLikes);
        updateStarColor(num);
    };

    const resetLikes = () => {
        const defaultLikes = new Array(5).fill(0);
        setLikes(defaultLikes);
        setRatings(defaultLikes);
        localStorage.removeItem('commentLikes');
        localStorage.removeItem('commentRatings');
    };
  
    const updateStarColor = (num) => {
        const updatedRatings = [...ratings];
        const totalLikes = likes[num];
        const fullStars = Math.floor(totalLikes / 10); // Calculate full stars based on total likes
        const remainingLikes = totalLikes % 10; // Calculate remaining likes
        let averageRating = fullStars + (remainingLikes >= 3 ? 0.5 : 0); // Add half star if remaining likes are 3 or more

        // Update the ratings array
        updatedRatings[num] = averageRating;
        setRatings(updatedRatings);
    };

    return (
        <div style={{ padding: 10, display: "flex", justifyContent: "right", alignItems: "right", flexDirection: "column" }}>
            <h1>Feedback</h1>
            {/* <Button variant="contained" color="primary" onClick={resetLikes}>Reset Likes</Button> */}
            {Array.isArray(feedback) && feedback.map((data, i) => (
                <Box key={i} width="100%" my={2}>
                    <motion.div 
                        key={i} 
                        initial={{ x: -200, opacity: 0 }} 
                        animate={{ x: 0, opacity: 1 }} 
                        transition={{ delay: i * 0.7 }}
                    >
                        <Paper style={{ padding: "40px 20px"}}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Remy Sharp" src={imgLink} />
                                </Grid>
                                <Grid justifyContent="left" item xs zeroMinWidth>
                                    <h4 style={{ margin: 0, textAlign: "left" }}> {data.first_name}</h4>
                                    <p style={{ textAlign: "left" }}>
                                    {data.feedback}
                                    </p>
                                    <p style={{ textAlign: "left", color: "gray" }}>
                                    {moment(data.ctime).format("YYYY-MM-DD")}
                                    </p>
                                    <Box display="flex" alignItems="center">
                                  
                                            <FavoriteIcon  onClick={() => handleLikee(i)} style={{ color: "blue" }} />
                                     
                                        <span>{likes[i]}</span>
                                        <Box ml={2}>
                                            <Rating
                                                name={`rating-${i}`}
                                                value={ratings[i]}
                                              
                                                icon={<StarIcon fontSize="inherit" />}
                                                style={{ color: "#ffc107" }} // Set the color of the stars
                                            />
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Paper> 
                    </motion.div>
                </Box>
            ))}
        </div>
    );
}
