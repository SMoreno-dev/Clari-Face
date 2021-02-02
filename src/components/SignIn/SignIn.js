import React from "react";
import "./SignIn.css"

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: "",
            signInPassword: ""
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value});
    }


    onSubmitSignIn = () =>  {
        fetch("https://pacific-savannah-75565.herokuapp.com/signin", {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(data => {
                if(data.id) {
                    this.props.loadUser(data);
                    this.props.onRouteChange("home");
                }
            })
    }

    render () {
        const { onRouteChange } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                        <div className="card shadow-lg">
                            <form>
                                <div className="sign-title">
                                    Sign In
                                </div>
                                <div className="form-group">
                                    <label htmlFor="input-email" className="h5 font-weight-bold">E-mail</label>
                                    <input 
                                        onChange={this.onEmailChange}
                                        type="email" 
                                        className="form-control" 
                                        id="input-email" 
                                        aria-describedby="emailHelp" 
                                        placeholder="E-mail">
                                    </input>
                                    <small id="emailhelp" className="form-text h6">We'll never share your e-mail.</small>
                                </div>
                                <div className="form-group pb-3">
                                    <label htmlFor="input-password" className="h5 font-weight-bold">Password</label>
                                    <input 
                                        onChange={this.onPasswordChange}
                                        type="password" 
                                        className="form-control" 
                                        id="input-password" 
                                        placeholder="Password">   
                                    </input>
                                </div>
                                <button 
                                    type="button" 
                                    onClick={this.onSubmitSignIn}
                                    className="btn btn-primary submit"
                                    >Sign In
                                </button>
                                <p 
                                    className="center shadow-3 register"
                                    onClick={() => onRouteChange("register")}
                                >Register</p>
                            </form>
                        </div>                     
                    </div>
                    <div className="col-sm-3"></div>
                </div>
            </div>     
        )    
    }
}

export default SignIn;