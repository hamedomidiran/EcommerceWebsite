import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-ecommerce-website-e8f42.cloudfunctions.net/api",
  // "http://localhost:5001/ecommerce-website-e8f42/us-central1/api" // THE API (cloud function) URL
});

export default instance;

// https://us-central1-ecommerce-website-e8f42.cloudfunctions.net/api
