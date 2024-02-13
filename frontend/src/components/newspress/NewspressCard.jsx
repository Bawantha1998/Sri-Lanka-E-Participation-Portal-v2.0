import * as React from "react";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions, Container } from "@mui/material";
import moment from "moment";
import { Parser } from "html-to-react";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const NewspressCard = ({ title, date }) => {
  return (
    <motion.div initial="hidden" animate="visible" variants={cardVariants}>
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
              {moment(date).format("MMM")}
              <br />
              <b style={{ fontSize: "35px" }}>{moment(date).format("DD")}</b>
              <br />
              {moment(date).format("YYYY")}
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
    </motion.div>
  );
};

export default NewspressCard;
