import React from "react";
import Tilt from "react-tilt";
import "./logo.css"
import face from "./face.png";

const Logo = () => {
    return (
        <div style={{display: "flex", justifyContent: "flex-start"}}>
            <div className= "ml-2">
                <Tilt className="Tilt shadow-lg border border-0 rounded" options={{ max : 55 }} style={{ height: 128, width: 128 }} >
                    <img alt="face-logo" className="Tilt-inner" src={face}></img>
                </Tilt>
            </div>
        </div>

    )
}

export default Logo;