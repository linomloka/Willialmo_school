import { useState } from 'react'
import styles from './css files/SignUp.module.css'
import { Link } from 'react-router-dom';

function SignUp({language, show, onClose}) {

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
        onClose();
    };

    const handleClose = () => {
    setSignFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    setError("");
    setPassword("");
    onClose();
    };


    if (!show) return null;

    return(
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>

                <div className={styles.signIn}>
                    <form onSubmit={ formSubmit } className={styles.signIn_form}>
                        <h2>{language === "EN" ? "Sign Here" : "Jisajili hapa"}</h2>
                        <input type="text" 
                            name='name'
                            onChange={ handleForm }
                            value={ signFormData.name }
                            placeholder={language === "EN" ? "Enter your name" : "Andika jina lako"}
                            required 
                        />
                        <input type="email" 
                            name='email'
                            onChange={ handleForm }
                            value={ signFormData.email }
                            placeholder={language === "EN" ? "Enter your email" : "Andika barua pepe yako"}
                            required
                        />
                        <input type="password" 
                            name='password'
                            onChange={ handleForm }
                            value={ signFormData.password }
                            placeholder={language === "EN" ? "Enter password" : "Andika nenosiri lako"}
                            required 
                        />
                        { password && <p style={{color: "red"}}> {password} </p>}
                        <input type="password" 
                            name='confirmPassword'
                            onChange={ handleForm }
                            value={ signFormData.confirmPassword }
                            placeholder={language === "EN" ? 'Confirm your password' : 'Thibitisha nenosiri lako'}
                            required
                        />
                        { error && <p style={{color: "red"}}> {error} </p>}
                        <div>
                            <button type='submit' 
                                    className={styles.signForm_buttons}
                                    disabled={  !signFormData.name ||
                                                !signFormData.email ||
                                                !signFormData.password ||
                                                signFormData.password.length < 7 ||
                                                signFormData.password !== signFormData.confirmPassword }>
                             <h2>{language === "EN" ? "Sign Up" : "Jisajili"}</h2>
                            </button> 
                        </div>
                        <p>{language === "EN" ? "Already have an account?" : "Je una akaunti?"} <Link to='/logIn'> {language === "EN" ? "Log In" : "Ingia"} </Link> </p>
                    </form>
                </div>
                
            </div>
        </div>
    );
};
export default SignUp;