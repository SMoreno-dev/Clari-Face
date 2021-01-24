import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({imageUrl, box}) => {
    return (
        <>
            <div className="facebox center">
                <div className="position-absolute">
                        <img id="inputimage" alt="user-input" src={imageUrl} width="500px" height="auto"></img>
                        <div className="bounding-box" style={{left: box.leftCol, right: box.rightCol, top: box.topRow, bottom: box.bottomRow}}></div>
                </div>
            </div>
            <div style={{marginBottom: 370}}></div>
        </>
    )
}

export default FaceRecognition;