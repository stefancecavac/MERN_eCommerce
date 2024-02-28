import mongoose from "mongoose";
const Schema = mongoose.Schema

const cartSchema = new Schema({
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
        type: Number,
        default: 0
    },
})

export default mongoose.model('Cart', cartSchema)