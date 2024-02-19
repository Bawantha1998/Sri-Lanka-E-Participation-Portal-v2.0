import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { API_IMG_URL } from "../../utils/constants";
import { Parser } from "html-to-react";
import { Link } from "react-router-dom";
export default function EventCard({
  title,
  image,
  description,
  url,
}) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <Card
      sx={{
        maxWidth: 350,
        "&:hover": {
          bgcolor: hovered ? "#D3D3D3" : "#",
        },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardHeader
        titleTypographyProps={{
          variant: "h6",
          style: { lineHeight: "1", minHeight: "4em", fontWeight: "bold" },
        }}
        title={title}
       
      />
      <CardMedia
        component="img"
        maxWidth="345px"
        height="194px"
        src={`${API_IMG_URL}/${image}`} // Accessing image from props
        alt={title}
      />
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
          {new Parser().parse(description)}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={url}>
          <Button
            sx={{
              bgcolor: "#345AE3",
              color: "#FFFFFF",
              fontSize: 13,
              fontWeight: "",
              "&:hover": {
                bgcolor: "#2A487E",
              },
            }}
            size="small"
          >
            View More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
