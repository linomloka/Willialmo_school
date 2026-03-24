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
      const [showSignUp, setShowSignUp] = useState(false);

  return (
      <BrowserRouter>
        <Navbar language={language} setLanguage={setLanguage} setShowSignUp={setShowSignUp}/>
        <SignUp 
          language={language} 
          show={showSignUp} 
          onClose={() => setShowSignUp(false)} 
        />
        <Routes>          
          <Route path='/' element={<Home language={language}/>} />
          <Route path='/logIn' element={<LogInPage language={language} />} />
        </Routes>  
      </BrowserRouter>
  )
}

export default App
