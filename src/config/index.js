const config = {
    baseUrl: process.env.REACT_APP_PHP_BACKEND_URL,
  };
  
  export const JACKPOT_STATUS_UPCOMING = 0;
  export const JACKPOT_STATUS_LIVE = 1;
  export const JACKPOT_STATUS_RESULTS_PENDING = 2;
  export const JACKPOT_STATUS_COMPLETED = 3;
  export const JACKPOT_STATUS_CANCELED = 4;
  export const LEAGUE_ONLY_PLAYER_BASED = ["PGA", "NASCAR"];
  
  export default config;
    