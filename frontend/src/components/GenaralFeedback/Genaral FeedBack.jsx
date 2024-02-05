import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ReCAPTCHA from "react-google-recaptcha";
import FeedBackwebcrum from "./GenaralFeedBackcrum"
import { TextareaAutosize } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import GFeedBackwebcrum from "./GenaralFeedBackcrum"
const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      // Add more form data if needed
    });
  };

  return (
   
    <ThemeProvider theme={defaultTheme}>
         <Grid container spacing={2}>
        <Grid container item sm={12} md={12}>
          <GFeedBackwebcrum/>
        </Grid>
        </Grid>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Subject
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="gen_subject"
                     
                      label="Subject"
                      
                    >
                      <MenuItem value={"Budget"}>Budget</MenuItem>
                      <MenuItem value={"Community & Social"}>
                        Community & Social
                      </MenuItem>
                      <MenuItem value={"Economy"}>Economy</MenuItem>
                      <MenuItem value={"Education"}>Education</MenuItem>
                      <MenuItem value={"Environment"}>Environment</MenuItem>
                      <MenuItem value={"Healthcare"}>Healthcare</MenuItem>
                      <MenuItem value={"Housing"}>Housing</MenuItem>
                      <MenuItem value={"Local Authorities"}>
                        Local Authorities
                      </MenuItem>
                      <MenuItem value={"Manpower"}>Manpower</MenuItem>
                     
                      <MenuItem value={"Politics & Governance"}>
                        Politics & Governance
                      </MenuItem>
                      <MenuItem value={"Transport"}>Transport</MenuItem>
                      <MenuItem value={"Others"}>Others</MenuItem>
                    </Select>
                
              
          </FormControl>
                 
                </Box>
              </Grid>
              <Grid item xs={12}>
                <TextareaAutosize
                  style={{width:"100%"}}
                  minRows={7}
                  placeholder="Feedback Description
                  Maximum Characters: 5000"
        
                  aria-label="Feedback Description"
               
                  
                    // Regular expression to allow letters, spaces, dots, and commas
                    // const regex = /^[a-zA-Z\s.,]*$/; // Allows letters, spaces, dots, and commas
      
                    // if (!regex.test(value)) {
                    //   setFormErrors((prevErrors) => ({
                    //     ...prevErrors,
                    //     feedbackError: "Feedback should contain only letters, spaces, dots, and commas",
                    //   }));
                    // } else if (value.length > 5000) {
                    //   setFormErrors((prevErrors) => ({
                    //     ...prevErrors,
                    //     feedbackError: "Feedback should not exceed 5000 characters",
                    //   }));
                    // } else {
                    //   setFormErrors((prevErrors) => ({
                    //     ...prevErrors,
                    //     feedbackError: "", // Clear the error message if it's valid
                    //   }));
                    // }
                  
      
                    // Proceed with handling the value or updating state as needed
              
                />
                 
              
              </Grid>
            </Grid>
              
            
        
            {/* Add the reCAPTCHA component */}
            <ReCAPTCHA
             sx={{ mt: 3, mb: 2 }}
              sitekey="YOUR_RECAPTCHA_SITE_KEY"
              onChange={(value) => {
                console.log("Captcha value:", value);
                // You can use the captcha value for further verification if needed
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
