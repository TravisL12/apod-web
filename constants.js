const APOD_API_URL = "https://api.nasa.gov";
const APOD_PATH = "/planetary/apod";
const MARS_PATH = "/mars-photos/api/v1/rovers/curiosity/photos";
const API_KEY = "hPgI2kGa1jCxvfXjv6hq6hsYBQawAqvjMaZNs447";

const MARS_CAMS = [
  { id: "FHAZ", description: "Front Hazard Avoidance Camera" },
  { id: "RHAZ", description: "Rear Hazard Avoidance Camera" },
  { id: "MAST", description: "Mast Camera" },
  { id: "CHEMCAM", description: "Chemistry and Camera Complex" },
  { id: "MAHLI", description: "Mars Hand Lens Imager" },
  { id: "MARDI", description: "Mars Descent Imager" },
  { id: "NAVCAM", description: "Navigation Camera" },
  { id: "PANCAM", description: "Panoramic Camera" },
  {
    id: "MINITES",
    description: "Miniature Thermal Emission Spectrometer (Mini-TES)",
  },
];

module.exports = {
  APOD_API_URL,
  APOD_PATH,
  MARS_PATH,
  API_KEY,
  MARS_CAMS,
};
