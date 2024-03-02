import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/header/navbar'
import Home from './pages/home'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route index element={<Home></Home>}></Route>



        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
