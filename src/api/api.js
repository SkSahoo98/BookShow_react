import axios from "axios";

export const getShowList = () =>
  axios.get("https://api.tvmaze.com/search/shows?q=all");
export const getShowSummary = (id) =>
  axios.get(`https://api.tvmaze.com/shows/${id}`);
const apis = {
  getShowList,
  getShowSummary,
};

export default apis;
