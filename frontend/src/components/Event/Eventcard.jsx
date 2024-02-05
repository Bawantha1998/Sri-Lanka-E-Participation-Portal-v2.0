import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Imgs from "../../images/abc.jpg";

export default function EventCard() {
  const handleExpandClick = () => {};

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
      <CardMedia component="img" height="194" image={Imgs} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Guidelines for Digital Signatures" is a key milestone in ICTA policy
          roadmap, which is already being approved and recognized by the
          government for implementation. The guidelines aim to direct the
          government staff towards the adoption of a digital signature to
          authenticate official documents. The effective usage of digital..
        </Typography>
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
