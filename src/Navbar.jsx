import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function Navbar({language, setLanguage}) {

    const languageChanger = () => setLanguage(language === "EN" ? "SW" : "EN");
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header>
            <div className="navbar">
                <Link to="/">
                    <h2 className="school_head">
                        {language === "EN" ? "WILLIALMO SCHOOL" : "SHULE YA WILLIALMO"}
                    </h2>
                </Link>

                <div className="navbar_center">
                    <button 
                        className="menu_toggle"
                        onClick={() => setShowMenu(!showMenu)}
                        title={language === "EN" ? "Menu" : "Menyu"}
                    >
                        ☰
                    </button>

                    <nav className={`navbar_nav ${showMenu ? 'active' : ''}`}>
                        <Link to="/about" onClick={() => setShowMenu(false)}>
                            <span>{language === "EN" ? "About" : "Kuhusu"}</span>
                        </Link>
                        <Link to="/curriculum" onClick={() => setShowMenu(false)}>
                            <span>{language === "EN" ? "Curriculum" : "Mtaala"}</span>
                        </Link>
                        <Link to="/gallery" onClick={() => setShowMenu(false)}>
                            <span>{language === "EN" ? "Gallery" : "Picha"}</span>
                        </Link>
                        <Link to="/fees-admission" onClick={() => setShowMenu(false)}>
                            <span>{language === "EN" ? "Fees & Admission" : "Ada na Kuingizwa"}</span>
                        </Link>
                        <Link to="/contact" onClick={() => setShowMenu(false)}>
                            <span>{language === "EN" ? "Contact" : "Wasiliana"}</span>
                        </Link>
                    </nav>
                </div>

                <div className="navbar_buttons">
                    <Link to="/logIn" >
                        <button type="button" className="logIn_button">
                            {language === "EN" ? "Log In" : "Ingia"}
                        </button>
                    </Link>

                    <Link to="/signUp">
                        <button type="button" className="signUp_button">
                            {language === "EN" ? "Sign Up" : "Jiunge"}
                        </button>
                    </Link>

                    <button onClick={languageChanger} className="language_button">{language}</button>
                </div>
            </div>
        </header>
    );
}

Navbar.propTypes = {
    language: PropTypes.string.isRequired,
    setLanguage: PropTypes.func.isRequired
};

export default Navbar;