import { createContext, useReducer } from "react";



export const ProductContext = createContext()

export const ProductReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                products: action.payload
            }
        case 'POST_PRODUCT':
            return {
                products: [action.payload, ...state.products]
            }
        case 'REMOVE_PRODUCT':
            return {
                products: state.products.filter((product) => product._id !== action.payload._id)
            }
        default: state
    }
}

export const ProductContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductReducer, {
        products: []
    })
    console.log(state)
    return(
        <ProductContext.Provider value={{...state , dispatch}}>
            {children}
        </ProductContext.Provider>
    )
}