import React from "react";
import "./Rank.css";

const Rank = ({ name, entries }) => {
    return (
        <div className="rank center text-light">
            <div className="h4 m-1">
                {`${name}, your current entry count is...`}
            </div>
            <div className="h3 ml-2">
                {`${entries}`}
            </div>
        </div>
    )
}

export default Rank;