import { ServicioHabitacion} from "../services/ServicioHabitacion.js"

export class ControladorHabitacion{
    constructor(){}

    async buscarTodas(request,response){
        try{
            //1. hayq ue recibir datos
            //2. intentare conectarme a db
            //3. envio la respuesta
            let servicioHabitacion= new ServicioHabitacion()
            response.status(200).json({
                "estado":true,
                "mensaje":"Se obtuvo correctamente",
                "datos":await servicioHabitacion.buscarTodas()
            })

        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"Se obtuvo erroneamente",
                "datos":null
            })
        }
    }
    async buscarPorId(request,response){
        try{
            let servicioHabitacion= new ServicioHabitacion()
            //1. hay que recibir datos(si)
            let id = request.params.id 
            //2. con el id que amndo el cliente busco en DB
            //3. respndo al cliente 
            response.status(200).json({
                "estado":true,
                "mensaje":"Se obtuvo correctamente",
                "datos":await servicioHabitacion.buscarPorId(id)
            })



        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"Se obtuvo erroneamente"+error,
                "datos":null
            })
        }
    }
    async modificar(request,response){
        try{
            let servicioHabitacion= new ServicioHabitacion()
            //1. hay que recibir datos (si)
            let id= request
            let datos= request.body
            await servicioHabitacion.modificar(id,datos)
            //2.modificar en DB
            //3, enviar respuesta 
            response.status(200).json({
                "estado":true,
                "mensaje":"Se modifico correctamente",
                "datos":null
            })


        }catch(error){}
    } 
    async registrar(request,response){
        try{
            let servicioHabitacion= new ServicioHabitacion()
            //1. hayq ue recibir datos (si)
            let datos= request.body
            await servicioHabitacion.registrar(datos)
            //2. guardelos en BD
            //3. responda
            response.status(200).json({
                "estado":true,
                "mensaje":"Se registro correctamente",
                "datos":datos
            })

        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"Se obtuvo correctamente",
                "datos":null
            })
        }
    }
    async eliminar(request,response){
        try{
            let servicioHabitacion= new ServicioHabitacion()
            //1. recibir datos (si)
            let id=request.params.id
            //2. eliminelo de la DB
            //3. responder
            response.status(200).json({
                "estado":true,
                "mensaje":"Se elimino correctamente",
                "datos":null
            })

        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"Se obtuvo correctamente",
                "datos":null
            })
        }
    }
}