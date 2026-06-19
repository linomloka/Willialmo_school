import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function Navbar({language, setLanguage, setShowSignUp}) {

    const languageChanger = () => setLanguage(language === "EN" ? "SW" : "EN");

    return (
        <header>
            <div className="navbar">
                <Link to="/">
                    <h2 className="school_head">
                        {language === "EN" ? "WILLIALMO SCHOOL" : "SHULE YA WILLIALMO"}
                    </h2>
                </Link>

                <div className="navbar_buttons">
                    <Link to="/logIn" >
                        <button type="button" className="logIn_button">
                            {language === "EN" ? "Log In" : "Ingia"}
                        </button>
                    </Link>

                        <button type="button" className="signUp_button" onClick={() => setShowSignUp(true)}>
                            {language === "EN" ? "Sign Up" : "Jiunge"}
                        </button>

                    <button onClick={languageChanger} className="language_button">{language}</button>
                </div>
            </div>
        </header>
    );
}

Navbar.propTypes = {
    language: PropTypes.string.isRequired,
    setLanguage: PropTypes.func.isRequired,
    setShowSignUp: PropTypes.func.isRequired
};

export default Navbar;