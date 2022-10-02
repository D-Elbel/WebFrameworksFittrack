const express = require("express");
const router = express.Router();

const ctrlForms = require("../controllers/forms");
const ctrlData = require("../controllers/data");

router.get("/", ctrlForms.registration);
router.get("/login", ctrlForms.login);
router.get("/workouts", ctrlData.workouts);

module.exports = router;
