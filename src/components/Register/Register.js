import React from "react";
import "./Register.css"

const Register = ({ onRouteChange }) => {
    return (
        <div className="card2 rounded shadow-lg">
            <form>
                <div className="sign-title">
                    Register
                </div>
                <div className="form-group pb-1">
                    <label for="input-name" className="h5 font-weight-bold  ">Name</label>
                    <input type="text" className="form-control" id="input-name" aria-describedby="nameHelp" placeholder="Name"></input>
                </div>
                <div className="form-group">
                    <label for="input-email" className="h5 font-weight-bold  ">E-mail</label>
                    <input type="text" className="form-control" id="input-email" aria-describedby="emailHelp" placeholder="E-mail"></input>
                    <small id="emailhelp" className="form-text text-muted h6">We'll never share your e-mail.</small>
                </div>
                <div className="form-group">
                    <label for="input-password" className="h5 font-weight-bold">Password</label>
                    <input type="password" className="form-control" id="input-password" placeholder="Password"></input>
                </div>
                <button 
                    type="button" 
                    onClick={() => onRouteChange("home")}
                    className="btn btn-primary submit mt-3"
                    >{`Register`}</button>
            </form>
        </div>

    )
}

export default Register;