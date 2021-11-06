import React from 'react'
import { Switch, notification } from "antd";

import api from "@/api/sensor";

import { Container, StyledContainer, Robot, StyledContainer3, StyledContainer4, Titulo2, Titulo, Contenedor, Fondo, Fondo2, StyledContainer6, } from './Sensors.style';
import constants from "./constants/Sensors";

function Sensors() {



  function onChange(data) {
    return async (value) => {
      const response = await api.changeLightStatus(data)

      if (response.status !== 200) return notification.warning({ message: 'No se ha podido cambiar el estado de las luces' })

      return notification.success({ message: `las luces se han ${value ? 'encendido' : 'apagado'}` })
    }
  }

  const items = constants.switchItems.map((switchInfo, i) => <StyledContainer6 key={i}>
    <Switch onChange={onChange(switchInfo)} /> Bombillo {i + 1}
  </StyledContainer6>
  )

  return (
    <>
      <StyledContainer>
        <Robot src="/robot.png" />
        <Titulo>SMART HOME</Titulo>

      </StyledContainer>
      <Container>
        <StyledContainer3>
          <Fondo src="/planta1.png" />

          <Contenedor>

            <Titulo2>Interruptores</Titulo2>
            {items}
          </Contenedor>
        </StyledContainer3>


        <StyledContainer4>
          <Fondo2 src="/convenciones.png" />
        </StyledContainer4>

      </Container>
    </>
  )

}

export default Sensors
