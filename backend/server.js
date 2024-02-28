import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
dotenv.config()

import productRouter from './routes/productRouter.js'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/products',productRouter)


mongoose.connect(process.env.DB_URI)
        .then(() => {
            app.listen(process.env.PORT , () => {
                console.log(`database connected and server running on port ${process.env.PORT}`)
            })
        })
        .catch((error) => {
            console.log(error)
        })