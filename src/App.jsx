import './App.css'
import HomePage from './HomePage'
import Navbar from './Navbar'
import Footer from './Footer'
import RegisterPage from './RegisterPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

  

  const Home = () => {
    
    return(
      <>
        <HomePage />
        <Footer />
      </>
    );
  }

function App() {

  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>  
      </BrowserRouter>
  )
}

export default App
