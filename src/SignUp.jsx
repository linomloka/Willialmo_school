import { useState } from 'react'
import styles from './css files/SignUp.module.css'
import { Link } from 'react-router-dom';

function SignUp() {

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
            setError("Make sure passwors match!")
        }
      else{
            setError("");
        };
      if( updatedData.password.length < 7) {
        setPassword("Password must be at least 7 characters!");
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
        <div className={styles.signIn}>
            <form onSubmit={ formSubmit } className={styles.signIn_form}>
                <h2>Sign Here</h2>
                <input type="text" 
                       name='name'
                       onChange={ handleForm }
                       value={ signFormData.name }
                       placeholder="Enter your name"
                       required 
                />
                <input type="email" 
                       name='email'
                       onChange={ handleForm }
                       value={ signFormData.email }
                       placeholder="Enter your email"
                       required
                />
                <input type="password" 
                       name='password'
                       onChange={ handleForm }
                       value={ signFormData.password }
                       placeholder="Enter password"
                       required 
                />
                { password && <p style={{color: "red"}}> {password} </p>}
                <input type="password" 
                       name='confirmPassword'
                       onChange={ handleForm }
                       value={ signFormData.confirmPassword }
                       placeholder='Confirm your password'
                       required
                />
                { error && <p style={{color: "red"}}> {error} </p>}
                <div>
                    <button type='submit' 
                            className={styles.signForm_buttons}
                            disabled={
                            !signFormData.name ||
                            !signFormData.email ||
                            !signFormData.password}> Sign Up
                    </button> 
                </div>
                <p>Already have an account? <Link to='/logIn'> Log In </Link> </p>
            </form>
        </div>
    );
};
export default SignUp;