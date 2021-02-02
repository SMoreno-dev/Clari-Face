import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ( { onInputChange, onImageSubmit } ) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                        <div className="center detect">
                            <p>{"Detect any face, in any photo."}</p>
                        </div>
                        <div className="center shadow-lg border-0 rounded btn-shadow">
                            <input placeholder="Enter image url" className="input rounded" type="text" onChange={ onInputChange }></input>
                            <button 
                                className="zoom btn btn-link btn-outline-info text-white"        
                                onClick={ onImageSubmit }
                            >Detect
                            </button>
                        </div>
                        <p className="try center">{`Click on 'Detect' to try it.`}</p>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;