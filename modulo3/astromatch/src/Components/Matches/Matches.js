import React from "react";

function Matches(props) {
    return(
        <div>
            <button onClick={() => props.changeScreen('start')}>Home</button>
        </div>
    )
}

export default Matches;