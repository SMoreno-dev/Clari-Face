import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ( { onInputChange, onSubmit } ) => {
    return (
        <div>
            <div className="center detect">
                <p>{"Detect any face, in any photo."}</p>
            </div>

            <div className="input-box shadow-lg border-0 rounded">
                <div className="center p-3 mb-2">
                    <input placeholder="Enter image url" className="input" type="text" onChange={ onInputChange }></input>
                    <button className="zoom btn btn-link btn-outline-info text-white input-btn" 
                            onClick={ onSubmit }
                     >Detect</button>
                </div>
            </div>

            <p className="try center">{`Click on 'Detect' to try it.`}</p>

        </div>
    )
}

export default ImageLinkForm;