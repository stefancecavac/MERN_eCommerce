import express from 'express'
import { addToCart,getCart,deleteFromCart } from '../controllers/cartController.js'
import authentication from '../middleware/authentication.js'

const router = express.Router()

router.use(authentication)
router.get('/',getCart)
router.post('/add',addToCart)
router.delete('/delete',deleteFromCart)

export default router