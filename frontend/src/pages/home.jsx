import { useEffect} from "react"
import { UseProductContext } from "../hook/UseProductHook"
import ProductCard from "../components/cards/productCard"
import {Link} from 'react-router-dom'

const Home = () => {
   const {products , dispatch} = UseProductContext()


    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch(`http://localhost:4000/api/products/`)
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'SET_PRODUCTS', payload: json})
            }
        }
        fetchData()
    } , [dispatch])

    return(
        <div className="grid grid-cols-3 gap-5 m-5">
            {products && products.map((product) => (
            <Link  key={product._id}  >  <ProductCard product={product}></ProductCard></Link> 
            ))}
        </div>
    )
}

export default Home