import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import NewspressCard from "../components/newspress/NewspressCard";
import Newspressbreadcrumb from "../components/newspress/Newspressbreadcrumb";

// const noOfCards = [1, 2, 3, 4, 5, 6];

export default function Newspress() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    // Fetch data from your backend API using Axios
    axios
      .get("http://localhost:3001/api/newspress")
      .then((response) => setNewsData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      {/* <Container> */}
      <Grid container spacing={2}>
        <Grid container item sm={12} md={12}>
          <Newspressbreadcrumb />
        </Grid>
        {newsData.map((data, index) => (
          <Grid item key={index} md={6} sm={12}>
            <NewspressCard title={data.title} date={data.date} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
