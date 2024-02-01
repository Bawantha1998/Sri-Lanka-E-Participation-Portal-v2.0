import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import image from "../../images/new.jpg";
import { Button, CardActions, Container } from "@mui/material";

export default function NewspressCard() {
  const theme = useTheme();
  return (
    <div>
      <Container>
        <Card sx={{ display: "flex" }}>
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
              <Typography variant="h5">
                Seychelles Coast Guard rescues lost fishing vessel “Lorenzo
                Putha 4” in the Arabian Sea
              </Typography>
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
