const express = require("express");
const router = express.Router({ mergeParams: true });
const contactController = require('../controllers/Contact.controller')
router.post("/portfolio/contact", contactController.contactPost);
// router.get("/portfolio/contact", wrapAsync(contactController.contactGet));
module.exports = router;
