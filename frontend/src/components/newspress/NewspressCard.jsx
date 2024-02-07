import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions, Container } from "@mui/material";

export default function NewspressCard({ title, date }) {
  return (
    <div>
      <Container>
        <Card sx={{ height: "auto", display: "flex" }}>
          <Box
            sx={{
              minWidth: 100,

              height: "auto",
              bgcolor: "#1C7ED8",
            }}
          >
            <Typography
              variant="h6"
              style={{
                fontFamily: "Lato,sans-serif",
                color: "#fff",
                textAlign: "left",
                marginLeft: "25%",
                marginTop: "30%",
              }}
            >
              March
              <br></br>
              <b style={{ fontSize: "35px" }}>10</b>
              <br></br>
              2024
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                gutterBottom
                variant="body2"
                color="text.secondary"
                component="div"
              >
                News and Press Releases
              </Typography>
              <Typography variant="h5">{title}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" variant="contained">
                View News
              </Button>
            </CardActions>
          </Box>
        </Card>
      </Container>
    </div>
  );
}
