import api from "./apiConfig";

const Authentication = {};

Authentication.changeLightStatus = (power) => api.put('light', { power })


export default Authentication