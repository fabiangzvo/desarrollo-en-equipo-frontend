import React from 'react'
import api from '@/api/registerFranja'
import { notification } from 'antd'
import {
  Container,
  StyledContainer,
  Robot,
  StyledContainer3,
  Titulo2,
  Titulo,
  Contenedor
} from './registerFranja.style'



function RegisterFranja() {
  function obtenerDatos() {
    return async () => {
      const nombre = document.getElementById('nombre').value
      const dia = document.getElementById('dia').value
      const horaI = document.getElementById('horaI').value
      const horaF = document.getElementById('horaF').value

      if (!nombre || !dia || !horaI || !horaF) {
        return notification.warning({
          message: 'Datos incompletos'
        })
      }

      const data = {
        stripeName: `${nombre}`,
        dayOfWeek: `${dia}`,
        startTime: `${horaI}`,
        endTime: `${horaF}`,
        username: 'papuGarces'
      }
      try {
        const response = await api.registrar(data)
        console.log(response)
        if (response.status !== 200)
          return notification.warning({
            message: 'No se ha podido registrar'
          })

        return notification.success({
          message: `Se ha registrado exitosamente`
        })
      } catch (err) {
        console.log(err.message)
      }
    }
  }

  return (
    <>
      <StyledContainer>
        <Robot src='/robot.png' />
        <Titulo>SMART HOME</Titulo>
      </StyledContainer>
      <Container>
        <StyledContainer3>
          <Contenedor>
            <Titulo2>REGISTRO FRANJA HORARIA</Titulo2>

            <form>
              <div>
                <label>
                  Nombre de la franja:
                  <input type='text' id='nombre' required />
                </label>
              </div>
              <div>
                <label>
                  Dia de la semana:
                  <select id='dia' required>
                    <option value='Lunes'> Lunes</option>
                    <option value='Martes'>Martes</option>
                    <option value='Miercoles'>Miercoles</option>
                    <option value='Jueves'>Jueves</option>
                    <option value='Viernes'>Viernes</option>
                    <option value='Sabado'>Sabado</option>
                    <option value='Domingo'>Domingo</option>
                  </select>
                </label>
              </div>
              <div>
                <label>
                  Hora de inicio:
                  <input type='time' id='horaI' required />
                </label>
              </div>
              <div>
                <label>
                  Hora de fin:
                  <input type='time' id='horaF' required />
                </label>
              </div>
              <button type='button' onClick={obtenerDatos()} id='btnCaptura'>
                Registrar
              </button>
            </form>
          </Contenedor>
        </StyledContainer3>
      </Container>
    </>
  )
}

export default RegisterFranja
