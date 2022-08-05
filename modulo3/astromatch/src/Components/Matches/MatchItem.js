import React from "react";

function MatchItem(props) {
    const profile = props.profile

    return(
        <div>
            <button onClick={() => props.changeScreen('start')}>Home</button>
            
        </div>
    )
}

export default MatchItem;