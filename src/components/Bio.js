import React from "react";

const Bio = ({bioElements}) => {
    return (
        <div className="bio">
            {bioElements.map(bioEl => <p>{bioEl}</p>)}
        </div>
    )
}

export default Bio