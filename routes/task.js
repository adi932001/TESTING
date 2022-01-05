var express = require("express");
var router = express.Router();

const { createTasks } = require("../controllers/task");

router.post(
  "/task",
  createTasks
);




module.exports = router;