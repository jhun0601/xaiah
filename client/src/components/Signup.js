import React, { useState } from 'react';
import './css/Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
    const[formData, setFormData] = useState({
        username:'',
        email:'',
        password:'',
        password2:'',
        successMsg:false,
        errorMsg:false,
        loading:false
    })
    const {username, email, password, password2, successMsg, errorMsg, loading} = formData;

    /******  
        event handlers
     ******/
    const handleChange = (e) => {
        // console.log(e);
        setFormData({
            ...formData, 
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)

    }
    const showSignUpForm = () => (
        <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-group mb-2" >
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="fa fa-user"></i></span>
                    <input name="username" value={username} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" onChange={handleChange}/>
                </div>
            </div>
            <div className="form-group mb-2" >
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="fa fa-envelope"></i></span>
                    <input name="email" value={email} type="email" className="form-control" placeholder="Email address" aria-label="Email address" aria-describedby="addon-wrapping" onChange={handleChange}/>
                </div>
            </div>
            <div className="form-group mb-2" >
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="fa fa-lock"></i></span>
                    <input name="password" value={password} type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" onChange={handleChange}/>
                </div>
            </div>
            <div className="form-group mb-2" >
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="fa fa-lock"></i></span>
                    <input name="password2" value={password2} type="password" className="form-control" placeholder="Confirm Password" aria-label="Confirm Password" aria-describedby="addon-wrapping" onChange={handleChange}/>
                </div>
            </div>
            
            <div className="form-group text-center mt-3">
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </div>
            <p className="text-center text-white mt-2">
                Have an account? <Link to="/signin">Log In</Link>
            </p>

        </form>
    );

    return (
        <div className="signup-container">
            <div className="row px-3 vh-100">
                <div className="col-md-5 mx-auto align-self-center">
                    {showSignUpForm()}
                    <p style={{color:'white'}}>{JSON.stringify(formData)}</p>
                </div>
            </div>
        </div>
    )
}

export default Signup;