import { useState, createContext } from "react";
import { ContextProps, ContextType, CartType } from "../types/types";

export const Context = createContext<ContextType| null >(null);

export default function ContextProvider ({children}: ContextProps) {
    const [ cart, setCart ] = useState<CartType>({
        products: [],
        total: 0
    })
    
    return (
        <Context.Provider value={{cart, setCart}}>
            {children}
        </Context.Provider>
    )
}