// server.js
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors()); // Enable CORS for all routes

const cardData = [
  {
    title: "Guidelines for Digital Signatures",
    subheader: "September 14, 2016",
    description:
      '"Guidelines for Digital Signatures" is a key milestone in ICTA policy roadmap, which is already being approved and recognized by the government for implementation. The guidelines aim to direct the government staff towards the adoption of a digital signature to authenticate official documents. The effective usage of digital..',
  },
  {
    title: "Card 2 Title",
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

app.get("/api/cards", (req, res) => {
  res.json(cardData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
