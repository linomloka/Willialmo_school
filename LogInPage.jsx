import { useState } from 'react'
import styles from './css files/LogInPage.module.css'
import { Link } from 'react-router-dom';

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

        <div className={styles.form_container}>
            <title>Login Page</title>
            <form onSubmit={handleSubmit} className={`${styles.register_form}`}>
                <h2>{language === "EN" ? "Log In" : "Ingia"}</h2>
                <input type="text" 
                       name='name'
                       onChange={ handleForm }
                       value={formData.name}
                       placeholder={language === "EN" ? "Enter your name" : "Andika jina lako"}
                       required
                />

                <input type="email" 
                       name='email'
                       onChange={handleForm}
                       value={formData.email}
                       placeholder={language === "EN" ? "Enter your email" : "Andika barua pepe yako"}
                       required
                />

                <input type="password" 
                       name='password'
                       onChange={handleForm}
                       value={formData.password}
                       placeholder={language === "EN" ? "Enter your password" : "Andika nenosiri lako"}
                       required
                />

                <input type="password" 
                       name='confirmPassword'
                       onChange={handleForm}
                       value={formData.confirmPassword}
                       placeholder={language === "EN" ? "Confirm your password" : "Thibitisha nenosiri lako"}
                       required
                />
                {formData.confirmPassword && formData.password !== formData.confirmPassword && 
                        ( <p style={{color:"red"}}>{language === "EN" ? "Passwords do not match!" : "Manenosiri hayafanani!"}</p>)}
                <div className={styles.form_buttons}>
                    <button type='submit' className={styles.register_button}>{language === "EN" ? "Submit" : "Wasilisha"}</button>
                    <Link to='/'><button className={styles.cancel_button}>{language === "EN" ? "Cancel" : "Ghairi"}</button></Link>
                </div>                
            </form>
        </div>
    );
}

// QUIZ: Put CSS styles to the form, put if statements.//
export default LogInPage;