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
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardHeader
        titleTypographyProps={{
          variant: "h6",
          style: { lineHeight: "1", minHeight: "3em", fontWeight: "bold" },
        }}
        title={title}
        subheader={subheader}
      />
      <CardMedia component="img" height="194" image={Imgs} alt="Card Image" />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
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
              bgcolor: "#2a487e",
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
