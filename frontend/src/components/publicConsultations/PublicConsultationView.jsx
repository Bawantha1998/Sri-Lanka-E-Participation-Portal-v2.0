import { Box, Grid, Typography } from "@mui/material";
import PublicConsultationbreadcrumb from "./PublicConsultationbreadcrumb";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Parser } from "html-to-react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../../utils/constants";
import Comment from "../Comment/Comment";

export default function PublicConsultationView() {
  const { content_id } = useParams();

  const [content, setContent] = useState({
    content_topic: "",
    content_image: "",
    content_description: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await axios.get(
          `${API_BASE_URL}/consultations/public-consultations/${content_id}`
        );
        console.log(content_id);
        setContent(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchContent();
  }, [content_id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!content || Object.keys(content).length === 0) {
    return <div>Content not found</div>;
  }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid container item sm={12} md={12}>
          <PublicConsultationbreadcrumb />
        </Grid>

        <Grid
          container
          item
          sx={{ bgcolor: "#E8E8E8", width: "100%", height: "auto" }}
          marginLeft={2}
          marginTop={2}
          borderRadius={5}
        >
          <Typography>
            {new Parser().parse(content.content_description)}
          </Typography>

          <Grid item xs={12}>
            <Box marginLeft={3} marginTop={2} marginBottom={4}></Box>
          </Grid>
          <Comment />
        </Grid>
      </Grid>
    </div>
  );
}
