import express from "express"
import { getAllProducts, getSingleProduct , postProduct, deleteProduct } from "../controllers/productController.js"
import authentication from '../middleware/authentication.js'

const router = express.Router()

router.use(authentication)
router.get('/',getAllProducts)
router.get('/:id',getSingleProduct)
router.post('/',postProduct)
router.delete('/:id',deleteProduct)

export default router