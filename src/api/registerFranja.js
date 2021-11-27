import api from "./apiConfig";

const Authentication = {};

Authentication.registrar  = async (data) => await api.post(`prod/registrarHorarios`, data)


export default Authentication