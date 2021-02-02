import React from "react";
import "./Register.css"

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            name: "",
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    onSubmitRegister = () => {
        fetch("https://pacific-savannah-75565.herokuapp.com/register", {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(response => response.json())
            .then(user => {
                if(user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange("home");
                }
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                    <div className="card rounded mx-auto pb-3 shadow-lg">
                            <form>
                                <div className="register-title pr-3 pl-3">
                                    Register
                                </div>
                                <div className="form-group pb-1">
                                    <label htmlFor="input-name" className="h5 font-weight-bold  ">Name</label>
                                    <input 
                                    onChange={this.onNameChange}
                                    type="text" 
                                    className="form-control" 
                                    id="input-name" 
                                    aria-describedby="nameHelp" 
                                    placeholder="Name">
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="input-email" className="h5 font-weight-bold  ">E-mail</label>
                                    <input 
                                    onChange={this.onEmailChange}
                                    type="text" 
                                    className="form-control" 
                                    id="input-email" 
                                    aria-describedby="emailHelp" 
                                    placeholder="E-mail">
                                    </input>
                                    <small id="emailhelp" className="form-text text-muted h6">We'll never share your e-mail.</small>
                                </div>
                                <div className="form-group">
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
                                    onClick={this.onSubmitRegister}
                                    className="btn btn-primary submit mt-3"
                                    >{`Register`}
                                </button>
                            </form>
                        </div>
                    </div>                    
                    <div className="col-sm-3"></div>            
                </div>

            </div>

        )
    }
}

export default Register;