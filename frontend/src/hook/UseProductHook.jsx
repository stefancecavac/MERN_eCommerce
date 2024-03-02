import { useContext } from "react"
import { ProductContext } from "../context/productContext"


export const UseProductContext = () =>{
    const context = useContext(ProductContext)

    if(!context){
        throw Error('useProductHook must be inside productContextPRovider')
    }
    return context
}