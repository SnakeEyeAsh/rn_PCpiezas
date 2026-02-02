import { Consulta } from "@/model/Types"
import { create } from "zustand"

export type ConsultaSotre ={
    consulta:Consulta,
    setConsulta:(c:Consulta)=>void
}

export const useConsulta = create<ConsultaSotre>((set)=> ({
    consulta:{
        texto: "",
        marca: "",
        precioMin: 0,
        precioMax: 0,
        categoriaId: ""
    },
    setConsulta:(c:Consulta)=>{
        set({consulta:c})
    }
}))