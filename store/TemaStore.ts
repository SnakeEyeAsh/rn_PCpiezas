import { temaClaro } from '@/themes/TemaClaro'
import { MD3Theme } from 'react-native-paper'
import { create } from 'zustand'

export type  TemaStore = {
    tema:MD3Theme,
    setTema:(tema:MD3Theme)=>void
}

export const useTemaStore = create<TemaStore>((set)=>({
    tema:temaClaro,
    setTema:(t:MD3Theme)=>{
        set({tema:t})
    }
}))