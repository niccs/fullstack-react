const express = require("express");

const router = express.Router();

router.get("/:uid", (req, res, next) => {
  const uId = req.params.uid
  res.json({ message: "its workingssss" });
});

module.exports = router;
