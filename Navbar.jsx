import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({language, setLanguage, setShowSignUp}) {

    const languageChanger = () => setLanguage(language === "EN" ? "SW" : "EN");

    return (
        <header>
            <div className="navbar">
                <Link to="/">
                    <h2 className="school_head">
                        {language === "EN" ? "WILLIALMO SCHOOL" : "WILLIALMO SCHOOL"}
                    </h2>
                </Link>

                <div className="navbar_buttons">
                    <Link to="/logIn" >
                        <button type="button" className="logIn_button">Log In</button>
                    </Link>

                        <button type="button" className="signUp_button" onClick={() => setShowSignUp(true)}>
                            Sign Up
                        </button>

                    <button onClick={languageChanger} className="language_button">{language}</button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;