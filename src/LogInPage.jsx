import { useState } from 'react'
import styles from './css files/LogInPage.module.css'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function LogInPage({language}) {

    const [ formData, setFormData ] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [error, setError] = useState("")

    const handleForm = (e) => {
        setFormData({...formData, 
                     [e.target.name]:e.target.value,}); 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        if (formData.password !== formData.confirmPassword){
            setError("Put same passwords!")
        return;
        }
            setError("");
        if (formData.password.length < 7) {
            setError("Password must be greater than 7 characters");
            return;
        }
            alert("Form submitted successfully!");
    };

    

    return(

        <main className={styles.form_container}>
            <div className={styles.auth_panel}>
                <aside className={styles.welcome_panel}>
                    <span className={styles.eyebrow}>WILLIALMO SCHOOL</span>
                    <div className={styles.panel_mark}>W</div>
                    <h1>{language === "EN" ? "Welcome back." : "Karibu tena."}</h1>
                    <p>{language === "EN" ? "Continue your journey with a community built around curious minds." : "Endelea na safari yako katika jamii inayokuza akili za udadisi."}</p>
                    <span className={styles.panel_note}>LEARN · GROW · BELONG</span>
                </aside>
                <form onSubmit={handleSubmit} className={styles.register_form}>
                    <div className={styles.form_heading}>
                        <span className={styles.form_kicker}>STUDENT PORTAL</span>
                        <h2>{language === "EN" ? "Log in to your account" : "Ingia kwenye akaunti yako"}</h2>
                        <p>{language === "EN" ? "Enter your details to pick up where you left off." : "Andika taarifa zako ili uendelee."}</p>
                    </div>
                    <label htmlFor="login-name">{language === "EN" ? "Full name" : "Jina kamili"}</label>
                    <input id="login-name" type="text" 
                       name='name'
                       onChange={ handleForm }
                       value={formData.name}
                       placeholder={language === "EN" ? "Enter your name" : "Andika jina lako"}
                       required
                />

                    <label htmlFor="login-email">{language === "EN" ? "Email address" : "Barua pepe"}</label>
                    <input id="login-email" type="email" 
                       name='email'
                       onChange={handleForm}
                       value={formData.email}
                       placeholder={language === "EN" ? "Enter your email" : "Andika barua pepe yako"}
                       required
                />

                    <label htmlFor="login-password">{language === "EN" ? "Password" : "Nenosiri"}</label>
                    <input id="login-password" type="password" 
                       name='password'
                       onChange={handleForm}
                       value={formData.password}
                       placeholder={language === "EN" ? "Enter your password" : "Andika nenosiri lako"}
                       required
                />

                    <label htmlFor="login-confirm-password">{language === "EN" ? "Confirm password" : "Thibitisha nenosiri"}</label>
                    <input id="login-confirm-password" type="password" 
                       name='confirmPassword'
                       onChange={handleForm}
                       value={formData.confirmPassword}
                       placeholder={language === "EN" ? "Confirm your password" : "Thibitisha nenosiri lako"}
                       required
                />
                {error && ( <p className={styles.error_message}>{error}</p>)}
                {formData.confirmPassword && formData.password !== formData.confirmPassword && 
                        ( <p className={styles.error_message}>{language === "EN" ? "Passwords do not match!" : "Manenosiri hayafanani!"}</p>)}
                <div className={styles.form_buttons}>
                    <button type='submit' className={styles.register_button}>{language === "EN" ? "Continue" : "Endelea"}</button>
                    <Link to='/' className={styles.cancel_button}>{language === "EN" ? "Back home" : "Rudi nyumbani"}</Link>
                </div>                
                </form>
            </div>
        </main>
    );
}

LogInPage.propTypes = {
    language: PropTypes.string.isRequired
};

export default LogInPage;