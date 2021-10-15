import React from 'react'
import { Switch, notification } from "antd";


import api from "@/api/sensor";
import { StyledContainer, Robot,StyledContainer3,StyledContainer4,StyledContainer5,Titulo,Contenedor,Fondo,Fondo2} from './Sensors.style';
function Sensors() {

  async function onChange(value) {
    const response = await api.changeLightStatus(value)

    if (response.status !== 200) return notification.warning({ message: 'No se ha podido cambiar el estado de las luces' })

    return notification.success({ message: `las luces se han ${value ? 'encendido' : 'apagado'}` })
  }
 
    

  return (
    <div>
      <StyledContainer5>
    <StyledContainer>
    <Robot src="http://localhost:3000/robot.png" />
        <Titulo>SMART HOME</Titulo>
        
    </StyledContainer>
    <StyledContainer3>

      <Contenedor>
   <Fondo src="http://localhost:3000/planta1.png"/>
      <Switch efaultChecked  onChange={onChange} className="Switch1"/> bombillo
      <Switch efaultChecked  onChange={onChange} /> bombillo
      <Switch efaultChecked  onChange={onChange} /> bombillo
      <Switch efaultChecked  onChange={onChange} /> bombillo
      
      </Contenedor>
    </StyledContainer3>
    <StyledContainer4>
   <Fondo2 src="http://localhost:3000/Convenciones.png"/>
    </StyledContainer4>
</StyledContainer5>
     
    </div>
  )

}

export default Sensors
