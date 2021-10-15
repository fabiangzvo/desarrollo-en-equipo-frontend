import React from 'react'
import { Switch, notification } from "antd";


import api from "@/api/sensor";
import { StyledContainer, Robot,StyledContainer3,StyledContainer4,Titulo2,StyledContainer5,Titulo,Contenedor,Fondo,Fondo2,StyledContainer6,} from './Sensors.style';
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
    <Fondo src="http://localhost:3000/planta1.png"/>
      
      <Contenedor>
     
      <Titulo2>Interruptores</Titulo2>
        
      <StyledContainer6>
      <Switch efaultChecked  onChange={onChange} /> Bombillo 1
    </StyledContainer6>

    <StyledContainer6>
      <Switch efaultChecked  onChange={onChange} /> Bombillo 2
    </StyledContainer6>
    
    <StyledContainer6>
      <Switch efaultChecked  onChange={onChange} /> Bombillo 3
    </StyledContainer6>
   
    <StyledContainer6>
      <Switch efaultChecked  onChange={onChange} /> Bombillo 4
    </StyledContainer6>

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
