import { modeloReserva } from "../models/modeloReserva.js"

export class ServicioReserva{
    constructor(){}

    async buscarTodas(){
        let reservas=await modeloReserva.find()
        return reservas

    }

    async buscarPorId(id){
        let reservacion= await modeloReserva.findById(id)
        return reservacion
    }

    async modificar(id, datos){
        return await modeloReserva.findByIdAndUpdate(id,datos)
    }

    async registrar(datos){
        let reservacionNueva=new modeloReserva(datos)
        return await reservacionNueva.save()
    }

    async eliminar(id){
        let reservacion= await modeloReserva.findByIdAndDelete(id)
    }



}