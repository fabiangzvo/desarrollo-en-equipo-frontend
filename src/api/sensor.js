import api from "./apiConfig";

const sensors = {};

sensors.changeLightStatus = (status, data) => api.post(`prod/${status}`, data)

sensors.checkTemperature = () => api.get('prod/v1/broker/temperatura')

sensors.checkHumidity = () => api.get('prod/v1/broker/humedad')

sensors.checkMovement = () => api.post('prod/movimiento', {}, { baseURL: process.env.REACT_APP_API_SENSOR })

sensors.checkStatus = () => api.post('prod/apertura', {}, { baseURL: process.env.REACT_APP_API_SENSOR })

export default sensors