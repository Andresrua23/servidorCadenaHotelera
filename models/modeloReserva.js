import mongoose from "mongoose";
import Mongoose  from "mongoose";

const Schema= mongoose.Schema

const Reserva=new Schema({
    nombre:{
        type:String,
        required:[true,"El nombre es requerido"]
    },
    apellido:{
        type:String,
        required:true
    },
    telefono:{
        type:String,
        required:true
    },
    fechaInicio:{
        type:String,
        required:true
    },
    fechaFinal:{
        type:String,
        required:true
    },
    numeroPersonas:{
        type:String,
        required:true
    }

})

export const modeloReserva=mongoose.model('reservas', Reserva)