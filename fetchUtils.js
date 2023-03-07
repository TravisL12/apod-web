const {
  APOD_API_URL,
  MARS_PATH,
  APOD_PATH,
  API_KEY,
} = require("./constants.js");

async function fetchApod(date) {
  let apodUrl = `${APOD_API_URL}${APOD_PATH}?api_key=${API_KEY}`;
  if (date) {
    apodUrl += `&date=${date}`;
  }
  const resp = await fetch(apodUrl);
  const data = await resp.json();
  return data;
}

async function fetchMars({ sol, camera }) {
  const marsUrl = `${APOD_API_URL}${MARS_PATH}?sol=${sol}=0&camera=${camera}&api_key=${API_KEY}`;
  const resp = await fetch(marsUrl);
  const data = await resp.json();
  return data.photos;
}

module.exports = {
  fetchApod,
  fetchMars,
};
