import React from 'react'
import { Switch, notification } from "antd";

import api from "@/api/sensor";

import { Container, StyledContainer, Robot, StyledContainer3, StyledContainer4, Titulo, Contenedor, Fondo, Fondo2, StyledContainerbombillo2, StyledContainerbombillo1, StyledContainerbombillo3, StyledContainerbombillo4 } from './Sensors.style';

import constants from "./constants/Sensors";
import constants1 from "./constants/Sensors1";
import constants2 from "./constants/Sensors2";
import constants3 from "./constants/Sensors3";
import Logs from "../components/logs/Logs";


function Sensors() {



  function onChange(data) {
    return async (value) => {
      const response = await api.changeLightStatus(value ? 'encender' : 'apagar', data)

      if (response.status !== 200) return notification.warning({ message: 'No se ha podido cambiar el estado de las luces' })

      return notification.success({ message: `las luces se han ${value ? 'encendido' : 'apagado'}` })
    }
  }

  const items = constants.switchItems.map((switchInfo, i) => <StyledContainerbombillo1 key={i}>
    <Switch onChange={onChange(switchInfo)} /> 1
  </StyledContainerbombillo1>
  )

  const items1 = constants1.switchItems.map((switchInfo, i) => <StyledContainerbombillo2 key={i}>
    <Switch onChange={onChange(switchInfo)} /> 2
  </StyledContainerbombillo2>
  )

  const items2 = constants2.switchItems.map((switchInfo, i) => <StyledContainerbombillo3 key={i}>
    <Switch onChange={onChange(switchInfo)} /> 3
  </StyledContainerbombillo3>
  )

  const items3 = constants3.switchItems.map((switchInfo, i) => <StyledContainerbombillo4 key={i}>
    <Switch onChange={onChange(switchInfo)} /> 4
  </StyledContainerbombillo4>
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
            {items}
            {items1}
            {items2}
            {items3}
          </Contenedor>
        </StyledContainer3>
        <Logs />
        <StyledContainer4>
          <Fondo2 src="/convenciones.png" />
        </StyledContainer4>

      </Container>
    </>
  )

}

export default Sensors
