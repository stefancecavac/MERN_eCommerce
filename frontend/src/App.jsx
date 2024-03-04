import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/header/navbar'
import Home from './pages/home'
import ProductDetails from './pages/productDetails'
import Register from './pages/register'

function App() {

  return (
   
      <BrowserRouter>
        <Navbar></Navbar>

            <Routes>
              <Route index element={<Home></Home>}></Route>
              <Route path='/recipes/:productId' element={<ProductDetails></ProductDetails>}></Route>

              <Route path='/user/register' element={<Register></Register>}></Route>
              <Route path='/recipes/:productId' element={<ProductDetails></ProductDetails>}></Route>

            </Routes>
         

  
      </BrowserRouter>
   
  )
}

export default App
