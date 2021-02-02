import React from "react";
import './Rank.css';

const Rank = ({ name, entries }) => {
    return (
        <div className="container center rank mx-auto">
            <div className="row">
                <div className="col-1"></div>
                <div className="h4 col-10">
                    {`${name}, your current entry count is... ${entries}`}
                </div>
                <div className="col-1"></div>
            </div>

        </div>
    )
}

export default Rank;