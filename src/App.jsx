import './App.css'
import HomePage from './HomePage'
import Navbar from './Navbar'
import Footer from './Footer'
import LogInPage from './LogInPage'
import SignUp from './SignUp'
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
          <Route path='/logIn' element={<LogInPage />} />
          <Route path='/signUp' element={<SignUp />} />
        </Routes>  
      </BrowserRouter>
  )
}

export default App
