import './App.css'
import HomePage from './HomePage'
import Navbar from './Navbar'
import Footer from './Footer'
import LogInPage from './LogInPage'
import SignUp from './SignUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
 

  const Home = ({language}) => {
  
    return(
      <>
        <HomePage language={language}/>
        <Footer />        
      </>
    );
  }

function App() {

      const[language, setLanguage] = useState("EN");

  return (
      <BrowserRouter>
        <Navbar language={language} setLanguage={setLanguage}/>
        <Routes>          
          <Route path='/' element={<Home language={language}/>} />
          <Route path='/logIn' element={<LogInPage />} />
          <Route path='/signUp' element={<SignUp />} />
        </Routes>  
      </BrowserRouter>
  )
}

export default App
