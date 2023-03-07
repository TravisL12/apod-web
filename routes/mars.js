const express = require("express");
const { MARS_CAMS } = require("../constants");
const router = express.Router();
const { fetchMars } = require("../fetchUtils");

router.get("/", async function (req, res, next) {
  const sol = req.query.sol || 1000;
  const camera = req.query.camera || "MAST";
  const resp = await fetchMars({ sol, camera });
  res.render("mars", {
    images: resp.slice(0, 100),
    sol,
    camera,
    cameras: MARS_CAMS,
  });
});

module.exports = router;
