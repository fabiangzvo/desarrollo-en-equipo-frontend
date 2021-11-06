import api from "./apiConfig";

const Authentication = {};

Authentication.changeLightStatus = (status,data) => api.post(`prod/${status}`, data)


export default Authentication