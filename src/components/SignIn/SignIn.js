import React from "react";
import "./SignIn.css"

const SignIn = ({ onRouteChange }) => {
    return (
        <div className="card shadow-lg">
            <form>
                <div className="sign-title">
                    Sign In
                </div>
                <div className="form-group">
                    <label for="input-email" className="h5 font-weight-bold  ">E-mail</label>
                    <input type="email" className="form-control" id="input-email" aria-describedby="emailHelp" placeholder="E-mail"></input>
                    <small id="emailhelp" className="form-text h6">We'll never share your e-mail.</small>
                </div>
                <div className="form-group">
                    <label for="input-password" className="h5 font-weight-bold">Password</label>
                    <input type="password" className="form-control" id="input-password" placeholder="Password"></input>
                </div>
                <button 
                    type="button" 
                    onClick={() => onRouteChange("home")}
                    className="btn btn-primary submit"
                    >Sign In</button>
                <p 
                    className="center shadow-3 register"
                    onClick={() => onRouteChange("register")}
                >Register</p>
            </form>
        </div>

    )
}

export default SignIn;