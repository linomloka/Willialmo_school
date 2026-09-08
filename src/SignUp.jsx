import { useState } from 'react'
import styles from './css files/SignUp.module.css'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function SignUp({language}) {

    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const [signFormData, setSignFormData] = useState({
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
    });

    const handleForm = (e) =>{
        const {name, value} = e.target;
         const updatedData = {
        ...signFormData,
        [name]: value
    };
        setSignFormData(updatedData);
      if( updatedData.confirmPassword && updatedData.password !== updatedData.confirmPassword) {
            setError(language === "EN" ? "Make sure passwords match!" : "Hakikisha manenosiri yanafanana!")
        }
      else{
            setError("");
        };
        
      if( updatedData.password.length < 7) {
        setPassword(language === "EN" ? "Password must be at least 7 characters!" : "Nenosiri lazima liwe na tarakimu zaidi ya 7!");
        }
      else{
        setPassword("")
      }
    };

    const formSubmit = (e) => {
        e.preventDefault();  

        console.log(signFormData);
    };

    return(
        <main className={styles.form_container}>
                <div className={styles.auth_panel}>
                    <aside className={styles.welcome_panel}>
                        <span className={styles.eyebrow}>WILLIALMO SCHOOL</span>
                        <div className={styles.panel_mark}>W</div>
                        <h1>{language === "EN" ? "Make room to grow." : "Jipe nafasi ya kukua."}</h1>
                        <p>{language === "EN" ? "Join a warm, ambitious school community where every learner is seen." : "Jiunge na jamii ya shule yenye moyo na malengo ambapo kila mwanafunzi anaonekana."}</p>
                        <span className={styles.panel_note}>A BRIGHTER START</span>
                    </aside>
                    <form onSubmit={ formSubmit } className={styles.signIn_form}>
                        <div className={styles.form_heading}>
                            <span className={styles.form_kicker}>NEW FAMILY</span>
                            <h2>{language === "EN" ? "Create your account" : "Fungua akaunti yako"}</h2>
                            <p>{language === "EN" ? "A few details and you are ready to begin." : "Taarifa chache tu na uko tayari kuanza."}</p>
                        </div>
                        <label htmlFor="signup-name">{language === "EN" ? "Full name" : "Jina kamili"}</label>
                        <input id="signup-name" type="text" 
                            name='name'
                            onChange={ handleForm }
                            value={ signFormData.name }
                            placeholder={language === "EN" ? "Enter your name" : "Andika jina lako"}
                            required 
                        />
                        <label htmlFor="signup-email">{language === "EN" ? "Email address" : "Barua pepe"}</label>
                        <input id="signup-email" type="email" 
                            name='email'
                            onChange={ handleForm }
                            value={ signFormData.email }
                            placeholder={language === "EN" ? "Enter your email" : "Andika barua pepe yako"}
                            required
                        />
                        <label htmlFor="signup-password">{language === "EN" ? "Create a password" : "Unda nenosiri"}</label>
                        <input id="signup-password" type="password" 
                            name='password'
                            onChange={ handleForm }
                            value={ signFormData.password }
                            placeholder={language === "EN" ? "Enter password" : "Andika nenosiri lako"}
                            required 
                        />
                        { password && <p className={styles.error_message}> {password} </p>}
                        <label htmlFor="signup-confirm-password">{language === "EN" ? "Confirm password" : "Thibitisha nenosiri"}</label>
                        <input id="signup-confirm-password" type="password" 
                            name='confirmPassword'
                            onChange={ handleForm }
                            value={ signFormData.confirmPassword }
                            placeholder={language === "EN" ? 'Confirm your password' : 'Thibitisha nenosiri lako'}
                            required
                        />
                        { error && <p className={styles.error_message}> {error} </p>}
                        <div>
                            <button type='submit' 
                                    className={styles.signForm_buttons}
                                    disabled={  !signFormData.name ||
                                                !signFormData.email ||
                                                !signFormData.password ||
                                                signFormData.password.length < 7 ||
                                                signFormData.password !== signFormData.confirmPassword }>
                             {language === "EN" ? "Create account" : "Fungua akaunti"}
                            </button> 
                        </div>
                        <p>{language === "EN" ? "Already have an account?" : "Je una akaunti?"} <Link to='/logIn'> {language === "EN" ? "Log In" : "Ingia"} </Link> </p>
                    </form>
                </div>
        </main>
    );
}

SignUp.propTypes = {
    language: PropTypes.string.isRequired
};

export default SignUp;