import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/header/navbar'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route index element></Route>


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
