import React from 'react'
import { Switch, notification } from "antd";

import api from "@/api/sensor";

function Sensors() {

  function onChange(value) {
    const response = api.changeLightStatus(value)

    if (response.status !== 200) return notification.warning({ message: 'No se ha podido cambiar el estado de las luces' })

    return notification.success({ message: `las luces se han ${value ? 'encendido' : 'apagado'}` })
  }

  return (
    <div>
      <Switch efaultChecked onChange={onChange} /> bombillo
    </div>
  )
}

export default Sensors
