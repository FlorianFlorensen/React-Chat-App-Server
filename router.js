const express = require("express");
const router = express.Router();
const { checkForExistingUser } = require("./users");

router.get("/", (req, res) => {
  res.send({ response: "Server is up and running." }).status(200);
});

router.post("/validateUser", (req, res) => {
  if (checkForExistingUser(req.body.username, req.body.room)) {
    res.status(200).end();
  }
  else {
    res.status(204).end();
  }
});

module.exports = router;