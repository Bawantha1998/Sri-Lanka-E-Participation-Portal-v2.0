const express = require("express");
// import contentsController from "../controllers/contentsController";
const contentsController = require("../controllers/contentsController");

const router = express.Router();


router.get("/latest-public-consultations", contentsController.getContents);
router.get("/participate/:slug", contentsController.getContentsBySlug);
router.get("/public-consultations", contentsController.getContentviews);
router.get("/contents", contentsController.getContents);
router.get("/public-consultations/:slug", contentsController.getContentsBySlug);
router.get("/contentviews", contentsController.getContentviews);

router.get("/carousel", contentsController.getCarousel);
router.get("/notcontents", contentsController.getnotContentviews);

module.exports = router;
