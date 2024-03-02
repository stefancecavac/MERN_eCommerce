import mongoose from "mongoose";
const Schema = mongoose.Schema

const cartSchema = new Schema({
    userId: {
        type:mongoose.Types.ObjectId,
        ref: 'User'
    },
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',  
                required: true
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ],
    totalPrice: {
        type: Number
    },
})

export default mongoose.model('Cart', cartSchema)