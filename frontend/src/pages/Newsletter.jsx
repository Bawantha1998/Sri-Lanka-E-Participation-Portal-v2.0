import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Newsletterbreadcrumb from "../components/newsletter/Newsletterbreadcrumb";
import Container from '@mui/material/Container';
import { TextareaAutosize } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from "@mui/material/Select";
export default function Newsletter() {
  return (
    <div>
    <Grid container spacing={2}>
    <Grid container item sm={12} md={12}>
      <Newsletterbreadcrumb />
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
          
          <Box component="form" noValidate sx={{ mt: 3 }}>
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
                      <MenuItem value={"SOUTHERN PROVINCE"}>SOUTHERN PROVINCE</MenuItem>
                      <MenuItem value={"WESTERN PROVINCE"}>
                        WESTERN PROVINCE
                      </MenuItem>
                      <MenuItem value={"CENTRAL PROVINCE"}>CENTRAL PROVINCE</MenuItem>
                      <MenuItem value={"SABARAGAMUWA PROVINCE"}>SABARAGAMUWA PROVINCE</MenuItem>
                      <MenuItem value={"ESTERN PROVINCE"}>ESTERN PROVINCE</MenuItem>
                      <MenuItem value={"UVA PROVINCE"}>UVA PROVINCE</MenuItem>
                      <MenuItem value={"NORTH WESTERN PROVINCE"}>NORTH WESTERN PROVINCE</MenuItem>
                      <MenuItem value={"NORTH CENTRAL PROVINCE"}>
                        NORTH CENTRAL PROVINCE
                      </MenuItem>
                      <MenuItem value={"NORTHERN PROVINCE"}>NORTHERN PROVINCE</MenuItem>
                     
                      
                    </Select>
                
              
          </FormControl>
                 
                </Box>
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
      </div>
  );
}
