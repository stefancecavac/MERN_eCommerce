import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { UseProductContext } from "../hook/UseProductHook"


const ProductDetails = () => {
    const {singleProduct, dispatch} = UseProductContext()
    const {productId} = useParams()

        useEffect(() => {
            const fetchSingleProduct = async() => {
                const response = await fetch(`http://localhost:4000/api/products/${productId}`)
                const json = await response.json()

                if(response.ok){
                    dispatch({type:'SET_SINGLE_PRODUCT' , payload:json})
                }
            }
            fetchSingleProduct()
        },[dispatch,productId])

    return(
        <div>
            <p>{singleProduct && singleProduct.name}</p>
        </div>
    )
}

export default ProductDetails