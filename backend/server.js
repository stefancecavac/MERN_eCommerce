import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'

dotenv.config()

import productRouter from './routes/productRouter.js'
import cartRouter from './routes/cartRouter.js'
import userRouter from './routes/userRouter.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use('/api/products',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/user',userRouter)

mongoose.connect(process.env.DB_URI)
        .then(() => {
            app.listen(process.env.PORT , () => {
                console.log(`database connected and server running on port ${process.env.PORT}`)
            })
        })
        .catch((error) => {
            console.log(error)
        })