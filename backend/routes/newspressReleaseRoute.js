const express = require("express");
const newspressReleaseController = require("../controllers/newspressReleaseController");

const router = express.Router();
router.get("/latest-news", newspressReleaseController.getnews);

module.exports = router;
