// server.js
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors()); // Enable CORS for all routes

const cardData = [
  {
    title:
      "Guidelines for Digital Signatures Guidelines for Digital Signatures for Digital Signatures",
    subheader: "September 14, 2016",
    description:
      '"Guidelines for Digital Signatures" is a key milestone in ICTA policy roadmap, which is already being approved and recognized by the government for implementation. The guidelines aim to direct the government staff towards the adoption of a digital signature to authenticate official documents. The effective usage of digital..',
  },
  {
    title: "National Digital Government and Governance Policy for Sri Lanka",
    subheader: "Card 2 Subheader",
    description:
      '"Guidelines for Digital Signatures" is a key milestone in ICTA policy roadmap, which is already being approved and recognized by the government for implementation. The guidelines aim to direct the government staff towards the adoption of a digital signature to authenticate official documents. The effective usage of digital..',
  },
  {
    title: "Card 3 Title",
    subheader: "Card 3 Subheader",
    description:
      '"Guidelines for Digital Signatures" is a key milestone in ICTA policy roadmap, which is already being approved and recognized by the government for implementation. The guidelines aim to direct the government staff towards the adoption of a digital signature to authenticate official documents. The effective usage of digital..',
  },
  {
    title: "Card 4 Title",
    subheader: "Card 4 Subheader",
    description:
      '"Guidelines for Digital Signatures" is a key milestone in ICTA policy roadmap, which is already being approved and recognized by the government for implementation. The guidelines aim to direct the government staff towards the adoption of a digital signature to authenticate official documents. The effective usage of digital..',
  },
  {
    title: "Card 4 Title",
    subheader: "Card 4 Subheader",
    description:
      '"Guidelines for Digital Signatures" is a key milestone in ICTA policy roadmap, which is already being approved and recognized by the government for implementation. The guidelines aim to direct the government staff towards the adoption of a digital signature to authenticate official documents. The effective usage of digital..',
  },
  {
    title: "Card 4 Title",
    subheader: "Card 4 Subheader",
    description:
      '"Guidelines for Digital Signatures" is a key milestone in ICTA policy roadmap, which is already being approved and recognized by the government for implementation. The guidelines aim to direct the government staff towards the adoption of a digital signature to authenticate official documents. The effective usage of digital..',
  },
];
const nwsData = [
  {
    title: "Guidelines for Digital Signatures",
    date: "September 14, 2016",
  },
  {
    title: "Guidelines for Digital Signatures",
    date: "September 14, 2016",
  },
  {
    title: "Guidelines for Digital Signatures",
    date: "September 14, 2016",
  },
  {
    title: "Card 4 Title",
    subheader: "Card 4 Subheader",
    description:
      '"Guidelines for Digital Signatures" is a key milestone in ICTA policy roadmap, which is already being approved and recognized by the government for implementation. The guidelines aim to direct the government staff towards the adoption of a digital signature to authenticate official documents. The effective usage of digital..',
  },
  {
    title: "Guidelines for Digital Signatures",
    date: "September 14, 2016",
  },
];


const galleryData= [
  {
    Name: "Guidelines for Digital ",
    date: "September 14, 2016",
    short_description:
      '"Guidelines for Digital Signatures" is a key milestone in ICTA policy roadmap,  ',
  },
  {
    Name: "Card 2 Name",
    date: "September 14, 2016",
    short_description:
      '"Guidelines for Digital Signatures" is a key milestone in ICTA policy roadmap,  ',
  },
  {
    Name: "Card 3 Name",
    date: "September 14, 2016",
    short_description:
      '"Guidelines for Digital Signatures" is a key milestone in ICTA policy roadmap,  ',
  },
  {
    Name: "Card 4 Name",
    date: "September 14, 2016",
    short_description:
      '"Guidelines for Digital Signatures" is a key milestone in ICTA policy roadmap,  ',
  },
  {
    Name: "Card 4 Name",
    date: "September 14, 2016",
    short_description:
      '"Guidelines for Digital Signatures" is a key milestone in ICTA policy roadmap,  ',
  },
  {
    Name: "Card 4 Name",
    date: "September 14, 2016",
    short_description:
      '"Guidelines for Digital Signatures" is a key milestone in ICTA policy roadmap,  ',
      
  },
];

app.get("/api/cards", (req, res) => {
  res.json(cardData);
});

app.get("/api/newspress", (req, res) => {
  res.json(nwsData);
});

app.get("/api/gallerycard", (req, res) => {
  res.json(galleryData);
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
