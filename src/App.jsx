import './App.css'
import HomePage from './HomePage'
import Navbar from './Navbar'
import Footer from './Footer'
import LogInPage from './LogInPage'
import SignUp from './SignUp'
import About from './About'
import Curriculum from './Curriculum'
import Gallery from './Gallery'
import FeesAdmission from './FeesAdmission'
import Contact from './Contact'
import ErrorBoundary from './ErrorBoundary'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import PropTypes from 'prop-types'

const Home = ({language}) => {
  
  return(
    <>
      <HomePage language={language}/>
      <Footer />        
    </>
  );
}

Home.propTypes = {
  language: PropTypes.string.isRequired
};

function App() {
  const[language, setLanguage] = useState("EN");
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <ErrorBoundary>
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
          <Route path='/about' element={<><About language={language}/><Footer /></>} />
          <Route path='/curriculum' element={<><Curriculum language={language}/><Footer /></>} />
          <Route path='/gallery' element={<><Gallery language={language}/><Footer /></>} />
          <Route path='/fees-admission' element={<><FeesAdmission language={language}/><Footer /></>} />
          <Route path='/contact' element={<><Contact language={language}/><Footer /></>} />
        </Routes>  
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
