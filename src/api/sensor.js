import api from "./apiConfig";

const Authentication = {};

Authentication.changeLightStatus = (data) => api.put('light', data)


export default Authentication