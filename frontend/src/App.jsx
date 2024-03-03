import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/header/navbar'
import Home from './pages/home'
import SideFilter from './components/side/sideFilter'
import ProductDetails from './pages/productDetails'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>

        <div className='grid grid-cols-8'>
          <div className='col-span-2'>
            <SideFilter></SideFilter>
          </div>

          <div className='col-span-6'>
            <Routes>
              <Route index element={<Home></Home>}></Route>
              <Route path='/recipes/:productId' element={<ProductDetails></ProductDetails>}></Route>
            </Routes>
          </div>

        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
