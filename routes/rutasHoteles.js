//espacio para definir las rutas o
// O endPoints especificos de su API
import express from 'express'

//importo los controladores
import { ControladorHabitacion} from '../controllers/ControladorHabitacion.js'
import {ControladorReservas } from '../controllers/ControladorResevas.js'
let controladorHabitacion=new ControladorHabitacion()
let controladorReservas=new ControladorReservas()


export let rutasApi= express.Router()

//Acá pone sus EndPoints
rutasApi.post('/api/habitaciones', controladorHabitacion.registrar)
rutasApi.get('/api/habitaciones', controladorHabitacion.buscarTodas)
rutasApi.get('/api/habitacion/:id', controladorHabitacion.buscarPorId )
rutasApi.put('/api/habitaciones/:id', controladorHabitacion.modificar)
rutasApi.delete('/api/habitaciones/:id', controladorHabitacion.eliminar)


rutasApi.post('/api/reserva', controladorReservas.registrar)
rutasApi.get('/api/reservas', controladorReservas.buscarTodas)
rutasApi.get('/api/reserva/:id', controladorReservas.buscarPorId )
rutasApi.put('/api/reserva/:id', controladorReservas.modificar)
rutasApi.delete('/api/reserva/:id', controladorReservas.eliminar)