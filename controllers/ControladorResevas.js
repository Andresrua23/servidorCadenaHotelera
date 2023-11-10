import { ServicioReserva} from "../services/ServicioReserva.js"

export class ControladorReservas{
    constructor(){}

    async buscarTodas(request,response){
        try{
            //1. hayq ue recibir datos
            //2. intentare conectarme a db
            //3. envio la respuesta
            let servicioReserva= new ServicioReserva()
            response.status(200).json({
                "estado":true,
                "mensaje":"Se obtuvo correctamente",
                "datos":await servicioReserva.buscarTodas()
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
            let servicioReserva= new ServicioReserva()
            //1. hay que recibir datos(si)
            let id = request.params.id 
            //2. con el id que amndo el cliente busco en DB
            //3. respndo al cliente 
            response.status(200).json({
                "estado":true,
                "mensaje":"Se obtuvo correctamente",
                "datos":await servicioReserva.buscarPorId(id)
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
            let servicioReserva= new ServicioReserva()
            //1. hay que recibir datos (si)
            let id= request
            let datos= request.body
            await servicioReserva.modificar(id,datos)
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
            let servicioReserva= new ServicioReserva()
            //1. hayq ue recibir datos (si)
            let datos= request.body
            await servicioReserva.registrar(datos)
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
    
    async eliminar(request, response) {
    try {
        const id = request.params.id;

        // Eliminar la habitación por su ID
        const reservaEliminada = await Reservas.findByIdAndRemove(id);

        if (!reservaEliminada) {
            return response.status(404).json({
                estado: false,
                mensaje: "Habitación no encontrada",
                datos: null
            });
        }

        return response.status(200).json({
            estado: true,
            mensaje: "Se eliminó correctamente",
            datos: reservaEliminada
        });

    } catch (error) {
        console.error(error);
        response.status(500).json({
            estado: false,
            mensaje: "Error al eliminar la habitación",
            datos: null
        });
    }
}
}