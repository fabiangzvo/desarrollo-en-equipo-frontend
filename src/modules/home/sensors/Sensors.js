import React from 'react'
import { Switch, notification } from "antd";


import api from "@/api/sensor";
import { styledContainer } from './Sensors.style';
function Sensors() {

  async function onChange(value) {
    const response = await api.changeLightStatus(value)

    if (response.status !== 200) return notification.warning({ message: 'No se ha podido cambiar el estado de las luces' })

    return notification.success({ message: `las luces se han ${value ? 'encendido' : 'apagado'}` })
  }
 
    

  return (
    <styledContainer>
      
      <Switch efaultChecked  onChange={onChange} /> bombillo
      <Switch efaultChecked  onChange={onChange} /> bombillo
      <Switch efaultChecked  onChange={onChange} /> bombillo
      <Switch efaultChecked  onChange={onChange} /> bombillo
    </styledContainer>
  )

}

export default Sensors
