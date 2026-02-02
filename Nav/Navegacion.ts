import { Router } from "expo-router";

export function pushError(r: Router, mensaje: string, descripcion: string) {
    r.push({
        pathname: 'error',
        params: { mensaje, descripcion }
    })
}

export function replaceError(r: Router, mensaje: string, descripcion: string){
    r.replace({
        pathname: 'error',
        params: { mensaje, descripcion }
    })
}