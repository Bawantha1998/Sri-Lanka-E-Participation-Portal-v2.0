import React, { useState, useEffect } from "react";
import { Divider, Avatar, Grid, Paper, IconButton, Box, Button } from "@material-ui/core";
import { Favorite as FavoriteIcon, Star as StarIcon } from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";
import { motion } from "framer-motion";

const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

export default function Comment() {
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

    const handleLike = (num) => {
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
        <div style={{ padding: 10, display: "flex", justifyContent: "right", alignItems: "right", flexDirection: "column" }} className="App">
            <h1>Feedback</h1>
            {/* <Button variant="contained" color="primary" onClick={resetLikes}>Reset Likes</Button> */}
            {[...Array(5)].map((_, num) => (
                <Box key={num} width="100%" my={2}>
                    <motion.div 
                        key={num} 
                        initial={{ x: -200, opacity: 0 }} 
                        animate={{ x: 0, opacity: 1 }} 
                        transition={{ delay: num * 0.5 }}
                    >
                        <Paper style={{ padding: "40px 20px"}}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Remy Sharp" src={imgLink} />
                                </Grid>
                                <Grid justifyContent="left" item xs zeroMinWidth>
                                    <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
                                    <p style={{ textAlign: "left" }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                        luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
                                        Suspendisse congue vulputate lobortis. Pellentesque at interdum
                                        tortor. Quisque arcu quam, malesuada vel mauris et, posuere
                                        sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
                                        metus, efficitur lobortis nisi quis, molestie porttitor metus.
                                        Pellentesque et neque risus. Aliquam vulputate, mauris vitae
                                        tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
                                        lectus vitae ex.
                                    </p>
                                    <p style={{ textAlign: "left", color: "gray" }}>
                                        Posted 1 minute ago
                                    </p>
                                    <Box display="flex" alignItems="center">
                                        <IconButton onClick={() => handleLike(num)}>
                                            <FavoriteIcon style={{ color: "red" }} />
                                        </IconButton>
                                        <span>{likes[num]}</span>
                                        <Box ml={2}>
                                            <Rating
                                                name={`rating-${num}`}
                                                value={ratings[num]}
                                              
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
