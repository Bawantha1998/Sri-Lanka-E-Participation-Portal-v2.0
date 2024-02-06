import React from 'react';
import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';

// Define styled components for styling
const RootContainer = styled('div')({
    backgroundColor: '#1e88e5',
    maxWidth: '1240px',
    margin: 'auto',
    padding: '40px',
    color: '#ffffff',
    
});

const IconContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    width: '75%',
    margin: 'auto',
});

const SectionContainer = styled('div')({
    marginBottom: '24px',
});

const Footer = () => {
    return (
        <RootContainer>
            <Grid container spacing={4}>
                <Grid item xs={12} lg={4}>
                    <Typography variant="h5" gutterBottom>E-Participation-Portal</Typography>
                    <Typography variant="body1" gutterBottom>"Streaming Victory, One Epic Moment at a Time"</Typography>
                    <IconContainer>
                        <FaFacebookSquare size={30}/>
                        <FaGithubSquare size={30}/>
                        <FaInstagram size={30}/>
                        <FaTwitterSquare size={30}/>
                        <FaDribbbleSquare size={30}/>
                    </IconContainer>
                </Grid>
                <Grid item xs={12} lg={8} container spacing={4}>
                    <Grid item xs={12} md={6} lg={3} component={SectionContainer}>
                        <Typography variant="h6" gutterBottom>About Us</Typography>
                        <ul>
                            <li>Who We Are</li>
                            <li>Mandate</li>
                            <li>Vision</li>
                            <li>Mission</li>
                            <li>Company Structure</li>
                            <li>Milestones</li>
                            <li>Our Team</li>
                        </ul>
                    </Grid>
                    {/* Other Grid items go here */}
                    <Grid item xs={12} md={6} lg={3} component={SectionContainer}>
                        <Typography variant="h6" gutterBottom>About Us</Typography>
                        <ul>
                            <li>Who We Are</li>
                            <li>Mandate</li>
                            <li>Vision</li>
                            <li>Mission</li>
                            <li>Company Structure</li>
                            <li>Milestones</li>
                            <li>Our Team</li>
                        </ul>
                    </Grid>

                    <Grid item xs={12} md={6} lg={3} component={SectionContainer}>
                        <Typography variant="h6" gutterBottom>About Us</Typography>
                        <ul>
                            <li>Who We Are</li>
                            <li>Mandate</li>
                            <li>Vision</li>
                            <li>Mission</li>
                            <li>Company Structure</li>
                            <li>Milestones</li>
                            <li>Our Team</li>
                        </ul>
                    </Grid>

                        <Grid item xs={12} md={6} lg={3} component={SectionContainer}>
                        <Typography variant="h6" gutterBottom>About Us</Typography>
                        <ul>
                            <li>Who We Are</li>
                            <li>Mandate</li>
                            <li>Vision</li>
                            <li>Mission</li>
                            <li>Company Structure</li>
                            <li>Milestones</li>
                            <li>Our Team</li>
                        </ul>
                    </Grid>
                </Grid>
            </Grid>
        </RootContainer>
    );
}

export default Footer;
