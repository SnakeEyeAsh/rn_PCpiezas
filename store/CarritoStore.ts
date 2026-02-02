import { Productos } from "@/model/Types"
import { create } from "zustand"

export type carrito = {
    productos:Productos,
    setProductos:(productos: Productos)=>void
}

export const useCarritoStore = create<carrito>((set)=>({
    productos:[],
    setProductos:(p:Productos)=>{
        set({productos:p})
    }
}))

