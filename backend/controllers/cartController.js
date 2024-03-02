import Cart from '../models/cartModel.js'
import Product from '../models/productModel.js'

const addToCart = async(req, res) => {
    try {
        const { productId, quantity } = req.body
        const userId = req.user._id
    
        const product = await Product.findById(productId)
        if (!product) {
          return res.status(404).json({ message: 'Product not found' })
        }
    
        let cart = await Cart.findOne({ userId })
    
        if (!cart) {
          cart = new Cart({ userId, products: [] })
        }
    
        const existingProduct = cart.products.find((item) => item.productId.equals(productId));

        if (existingProduct) {
          existingProduct.quantity += quantity
        } else {
          cart.products.push({ productId, quantity })
        }
    
        cart.totalPrice += product.price * quantity
    
        await cart.save()
    
        res.status(200).json(cart )
      } catch (error) {
        console.error(error)
        res.status(500).json({error:error.message })
      }
}

const deleteFromCart = async (req, res) => {
    try {
      const { productId, quantity } = req.body;
      const userId = req.user._id;
  
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({error: 'Product not found' });
      }
  
      let cart = await Cart.findOne({ userId });
  
      const existingProduct = cart.products.find((item) => item.productId.equals(productId));
  
      if (existingProduct) {
        existingProduct.quantity -= quantity;
  
       
        if (existingProduct.quantity < 0) {
          existingProduct.quantity = 0;
        }
  
       
        if (existingProduct.quantity === 0) {
          cart.products.pull(existingProduct);
        }
      } else {
        return res.status(404).json({ error: 'Product not found in the cart' });
      }
  
      cart.totalPrice -= product.price * quantity;
  
      await cart.save();
  
      res.status(200).json( cart);
    } catch (error) {
      console.error(error);
      res.status(500).json({error:error.message });
    }
  };


const getCart = async (req, res) => {
    try {
      const userId = req.user._id; 
  
  
      const cart = await Cart.findOne({ userId }).populate('products.productId')
  
      if (!cart) {
        return res.status(404).json({ error: 'Cart not found for the user' })
      }
  
      res.status(200).json(cart)
    } catch (error) {
      console.error(error)
      res.status(500).json({error:error.message})
    }
  }

 
  export {addToCart , getCart ,deleteFromCart }