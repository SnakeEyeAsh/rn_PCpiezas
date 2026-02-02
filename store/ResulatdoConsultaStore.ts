import { Productos } from "@/model/Types";
import { create } from "zustand";

export type ResulatdoConsultaStore = {
    resultadoConsulta:Productos,
    setResultadoConsulta:(p:Productos)=>void  
}

export const useResultadoConsultaStore = create<ResulatdoConsultaStore>((set)=>({

    resultadoConsulta:[],
    setResultadoConsulta:(rcs:Productos)=>{
        set({resultadoConsulta:rcs})
    }

}))
