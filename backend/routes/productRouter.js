import express from "express"
import { getAllProducts, getSingleProduct , postProduct, deleteProduct } from "../controllers/productController.js"

const router = express.Router()


router.get('/',getAllProducts)
router.get('/:id',getSingleProduct)
router.post('/',postProduct)
router.delete('/:id',deleteProduct)

export default router