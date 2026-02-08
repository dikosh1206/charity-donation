const router = require("express").Router();
const auth = require("../middleware/auth");
const validate = require("../middleware/validate");
const { createDonationSchema } = require("../validations/donation.validation");
const { create, getMine } = require("../controllers/donation.controller");

router.post("/", auth, validate(createDonationSchema), create);
router.get("/mine", auth, getMine);

module.exports = router;