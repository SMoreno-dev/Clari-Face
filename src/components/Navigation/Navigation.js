import React from "react";
import "./navigation.css";

const Navigation = ({ onRouteChange, isSignedIn }) => {
        if (isSignedIn) {
            return (
                <div>
                    <nav className="sign-out">
                        <p 
                            type="button" 
                            onClick={() => onRouteChange("signout")}
                            className="signbtn btn btn-link btn-outline-info text-white font-weight-normal"
                        >Sign Out</p>
                    </nav>
                </div>
            )
        } else {
            return (
                <div>
                    <nav className="sign-out">
                        <p 
                            type="button" 
                            onClick={() => onRouteChange("signin")}
                            className="signbtn btn btn-link btn-outline-info text-white font-weight-normal"
                        >Sign In</p>
                        <div style={{width: "5px"}}></div>
                        <p 
                            type="button" 
                            onClick={() => onRouteChange("register")}
                            className="signbtn btn btn-link btn-outline-info text-white font-weight-normal"
                        >Register</p>
                    </nav>
            </div>
            )
        }

}

export default Navigation;

