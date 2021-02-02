import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({imageUrl, box}) => {
    if(imageUrl.length) {
        return (
            <div className="container center mt-2">
                    <div className="position-absolute">
                        <img id="inputimage" alt="user-input" src={imageUrl} width="500px" height="auto"></img>     
                        <div className="bounding-box" style={{left: box.leftCol, right: box.rightCol, top: box.topRow, bottom: box.bottomRow}}></div>             
                    </div>
                <div style={{padding: "15%", position: "absolute"}}></div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                    <div className="position-absolute">     
                        <div className="bounding-box" style={{left: box.leftCol, right: box.rightCol, top: box.topRow, bottom: box.bottomRow}}></div>             
                    </div>
                <div style={{padding: "10%", position: "absolute"}}></div>
            </div>
        )
    }
}

export default FaceRecognition;