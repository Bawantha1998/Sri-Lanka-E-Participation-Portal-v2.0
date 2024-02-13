import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import NewspressCard from "../components/newspress/NewspressCard";
import Newspressbreadcrumb from "../components/newspress/Newspressbreadcrumb";
import { API_BASE_URL } from "../utils/constants";

export default function Newspress() {
  const [newsData, setNewsData] = useState([]);
  const handleCardClick = (link) => {
    window.open(link);
  };

  useEffect(() => {
    const fetchAllContents = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/getRssData`);
        setNewsData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllContents();
  }, []);
  return (
    <div>
      {/* <Container> */}
      <Grid container spacing={2}>
        <Grid container item sm={12} md={12}>
          <Newspressbreadcrumb />
        </Grid>
        {newsData.map((data, index) => (
          <Grid
            onClick={() => handleCardClick(data.link)}
            item
            key={index}
            md={6}
            sm={12}
          >
            <NewspressCard title={data.title} date={data.pubDate} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
