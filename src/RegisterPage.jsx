import { useState } from 'react'
import styles from './css files/RegisterPage.module.css'
import { Link } from 'react-router-dom';

function RegisterPage() {

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

            <form onSubmit={handleSubmit} className={`${styles.register_form}`}>
                <h2>Register Here</h2>
                <input type="text" 
                       name='name'
                       onChange={ handleForm }
                       value={formData.name}
                       placeholder="Enter your name"
                       required
                />

                <input type="email" 
                       name='email'
                       onChange={handleForm}
                       value={formData.email}
                       placeholder="Enter your email"
                       required
                />

                <input type="password" 
                       name='password'
                       onChange={handleForm}
                       value={formData.password}
                       placeholder="Enter your password"
                       required
                />

                <input type="password" 
                       name='confirmPassword'
                       onChange={handleForm}
                       value={formData.confirmPassword}
                       placeholder="Confirm your password"
                       required
                />
                {formData.confirmPassword && formData.password !== formData.confirmPassword && 
                        ( <p style={{color:"red"}}>Passwords do not match!</p>)}
                <div className={styles.form_buttons}>
                    <button type='submit' className={styles.register_button}>Submit</button>
                    <Link to='/'><button className={styles.cancel_button}>Cancel</button></Link>
                </div>                
            </form>
        </div>
    );
}

// QUIZ: Put CSS styles to the form, put if statements.//
export default RegisterPage;