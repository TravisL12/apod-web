const express = require("express");
const router = express.Router();
const {
  APOD_API_URL,
  APOD_PATH,
  MARS_PATH,
  API_KEY,
} = require("../constants.js");

/*
mars cameras
FHAZ Front Hazard Avoidance Camera
RHAZ Rear Hazard Avoidance Camera
MAST Mast Camera
CHEMCAM Chemistry and Camera Complex
MAHLI Mars Hand Lens Imager
MARDI Mars Descent Imager
NAVCAM Navigation Camera
PANCAM Panoramic Camera
MINITES Miniature Thermal Emission Spectrometer (Mini-TES)
*/

async function fetchMars() {
  const marsUrl = `${APOD_API_URL}${MARS_PATH}?sol=1000&camera=MAST&api_key=${API_KEY}`;
  const resp = await fetch(marsUrl);
  const data = await resp.json();
  return data.photos.slice(0, 100);
}

async function fetchApod(date) {
  let apodUrl = `${APOD_API_URL}${APOD_PATH}?api_key=${API_KEY}`;
  if (date) {
    apodUrl += `&date=${date}`;
  }
  const resp = await fetch(apodUrl);
  const data = await resp.json();
  return data;
}

router.get("/", async function (req, res, next) {
  const date = req.query.date;
  const resp = await fetchApod(date);
  res.render("apod", { ...resp });
});

router.get("/mars", async function (req, res, next) {
  const resp = await fetchMars();
  res.render("mars", { images: resp });
});

module.exports = router;
