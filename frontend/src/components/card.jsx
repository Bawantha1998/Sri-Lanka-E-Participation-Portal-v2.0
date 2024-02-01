import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import logo from "../images/new.jpg";

export default function ImgMediaCard() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Card style={{ display: "flex" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="auto"
            image={logo}
            style={{ width: "140px" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              National Digital Government and Governance Policy for Sri Lanka
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The government of Sri Lanka has presented its policy framework
              titled ‘Vistas of Prosperity and Splendour’. This National Policy
              Framework of the government constitutes nine key policies aimed at
              achieving the fourfold outcomes of a productive citizenry, a
              contented family, a disciplined and just society, and a prosperous
              nation.
            </Typography>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card style={{ display: "flex" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="auto"
            image={logo}
            style={{ width: "140px" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              National Digital Government and Governance Policy for Sri Lanka
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The government of Sri Lanka has presented its policy framework
              titled ‘Vistas of Prosperity and Splendour’. This National Policy
              Framework of the government constitutes nine key policies aimed at
              achieving the fourfold outcomes of a productive citizenry, a
              contented family, a disciplined and just society, and a prosperous
              nation.
            </Typography>
            <br></br>
            <Button size="small">Share</Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card style={{ display: "flex" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="auto"
            image={logo}
            style={{ width: "140px" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              National Digital Government and Governance Policy for Sri Lanka
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The government of Sri Lanka has presented its policy framework
              titled ‘Vistas of Prosperity and Splendour’. This National Policy
              Framework of the government constitutes nine key policies aimed at
              achieving the fourfold outcomes of a productive citizenry, a
              contented family, a disciplined and just society, and a prosperous
              nation.
            </Typography>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
