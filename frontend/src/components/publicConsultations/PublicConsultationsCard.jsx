import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Imgs from "../../images/8.jpg";

export default function PublicConsultationsCard({
  title,
  subheader,
  image,
  description,
}) {
  // const handleExpandClick = () => {};

  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardHeader
        title={
          <div style={{ fontSize: "20px" }}>
            <b>{title}</b>
          </div>
        }
        subheader={subheader}
      />
      <CardMedia component="img" height="194" image={Imgs} alt="Card Image" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
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
          View More
        </Button>
      </CardActions>
    </Card>
  );
}
