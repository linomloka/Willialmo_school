import { useState } from 'react'

function RegisterPage() {

    const [ formData, setFormData ] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleForm = (e) => {
        setFormData({...formData, 
                     [e.target.name]:e.target.value,});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return(

        <div>

            <form onSubmit={handleSubmit}>
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
                <button type='submit'>Register</button>
            </form>
        </div>
    );
}

// QUIZ: Put CSS styles to the form, put if statements.//
export default RegisterPage;