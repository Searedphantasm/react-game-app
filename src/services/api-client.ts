import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "be37e4805d724325b7db6dee07aeeadc",
  },
});
