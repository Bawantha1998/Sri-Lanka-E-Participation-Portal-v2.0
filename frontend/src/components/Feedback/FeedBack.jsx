
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
import FeedBackwebcrum from "./FeedBackcrum"
import { TextareaAutosize } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { API_BASE_URL } from "../../utils/constants";
import { SlArrowRight } from "react-icons/sl";
import  Feedbackweb from './FeedBackcrum';
const defaultTheme = createTheme();



export default function FeedBack() {
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone_no, setPhoneNumber] = useState("");
  const [feedback, setFeedback] = useState("");
  const [content_idInput, setContent_idInput] = useState("");
  const { content_id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState({
    content_topic: "",
    content_image: "",
    content_description: "",
    content_id: "",
  });
  const [loading, setLoading] = useState(true);
  const [formErrors, setFormErrors] = useState({
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    phoneNoError: "",
    feedbackError: "",
  });
  const [validEmail, setValidEmail] = useState(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(content_idInput);
    axios
      .post(`${API_BASE_URL}/feedback/addf`, {
        first_name,
        last_name,
        email,
        phone_no,
        feedback,
        content_idInput,
      })
      .then((res) => {
        Swal.fire(
          "New Feedback!",
          "We have received your feedback successfully",
          "success"
        );
        navigate("/");
      })
   
  };

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await axios.get(
          `${API_BASE_URL}/consultations/public-consultations/${content_id}`
        );
        setContent(res.data);
        setContent_idInput(res.data.content_id);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchContent();
  }, [content_id]);



  return (
   
    <ThemeProvider theme={defaultTheme}>
          <Grid container item sm={12} md={12}>
        <Feedbackweb/>
        </Grid>
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5"></Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid key={content.content_image} container spacing={2}>
        
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={(e) => {
                    const value = e.target.value;

                    
                    setFirstname(value);

                   
                  }}
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
                  onChange={(e) => {
                    const value = e.target.value;

                    setLastname(value);

                    
                  }}
                  
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
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setValidEmail(true);
                  }}
                  
                  error={!!formErrors.emailError}
                  helperText={formErrors.emailError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="tel"
                  label="Phone Number"
                  name="phone_no"
                  autoComplete="phoneNumber"
                  onChange={(e) => {
                    const inputNumber = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
                    setPhoneNumber(inputNumber);
                  }}
                  inputProps={{
                    pattern: "[0-9]*",
                    inputMode: "numeric",
                    maxLength: 10,

                    title: "Enter a 10-digit number",
                  }}
                 
                />
              </Grid>
              <Grid item xs={12}>
                <TextareaAutosize
                  style={{ width: "100%" }}
                  minRows={7}
                  placeholder="Feedback Description 
Maximum Characters: 5000"
                  aria-label="Feedback Description"
                  onChange={(e) => {
                    const value = e.target.value;

                   
                    setFeedback(value);

                  }}
                />
                
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>

    </ThemeProvider>
  );
}