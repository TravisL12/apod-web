const express = require("express");
const router = express.Router();
const { fetchApod } = require("../fetchUtils");

router.get("/", async function (req, res, next) {
  const date = req.query.date;
  const resp = await fetchApod(date);
  res.render("apod", { ...resp });
});

module.exports = router;
