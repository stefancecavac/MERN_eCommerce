

const ProductCard = ({product}) => {

    return(
        <div className="bg-purple-300">
            <p>{product.name}</p>
            <p>{product.price}</p>
        </div>
    )
}

export default ProductCard