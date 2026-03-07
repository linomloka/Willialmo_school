import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header>
            <div className="navbar">
                <Link to="/">
                    <h2 className="school_head">WILLIALMO SCHOOL</h2>
                </Link>

                <div className="navbar_buttons">
                    <Link to="/logIn">
                        <button type="button">Log In</button>
                    </Link>
                    <Link to="/signUp">
                        <button type="button">Sign Up</button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Navbar;