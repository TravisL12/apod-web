const express = require("express");
const router = express.Router();

const APOD_API_URL = "https://api.nasa.gov";
const APOD_PATH = "/planetary/apod";
const MARS_PATH = "/mars-photos/api/v1/rovers/curiosity/photos";
const API_KEY = "hPgI2kGa1jCxvfXjv6hq6hsYBQawAqvjMaZNs447";

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

/* GET home page. */
router.get("/", async function (req, res, next) {
  const date = req.query.date;
  const resp = await fetchApod(date);
  res.render("index", { ...resp });
});

/* GET home page. */
router.get("/mars", async function (req, res, next) {
  const resp = await fetchMars();
  res.render("mars", { images: resp });
});

module.exports = router;
