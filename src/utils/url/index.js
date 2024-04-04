import config from "../../config";

const getStarwarsFilmsUrl = () => `${config.baseUrl}/films`;
export {
  getStarwarsFilmsUrl,
};
