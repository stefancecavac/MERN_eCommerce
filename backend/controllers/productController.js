import Product from '../models/productModel.js'

import mongoose from 'mongoose'

const getAllProducts = async (req, res) => {

    try {
        const product = await Product.find({}).sort({ createdAt: -1 })

        if (!product) {
            res.status(400).json({ error: 'no products found' })
        }
        res.status(200).json(product)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}


const getSingleProduct = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return  res.status(400).json({ error: 'not a valid mongo id' })
    }
    try {

        const product = await Product.findOne({ _id: id })

        if (!product) {
          return  res.status(400).json({ error: 'no products found' })
        }
        res.status(200).json(product)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }

}

const postProduct = async (req, res) => {

    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
       return res.status(400).json({ error: 'not a valid mongo id' })
    }
    try {
        const product = await Product.findOneAndDelete({ _id: id })
        if (!product) {
          return  res.status(404).json({ error: 'no such product found' })
        }
        res.status(200).json(product)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}


export {getAllProducts, getSingleProduct ,postProduct,deleteProduct}