import expres from 'express'
import { loginUser , registerUser,logoutUser } from '../controllers/userController.js'

const router = expres.Router()

router.post('/login',loginUser)
router.post('/register',registerUser)
router.post('/logout',logoutUser)


export default router
