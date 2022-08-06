import React from "react";

function MatchItem(props) {
    const profile = props.profile

    return(
        <div>
            <button onClick={() => props.changeScreen('start')}>Home</button>
            <img src={profile.photo} alt="imagem" />
            <p>{profile.name}</p>
        </div>
    )
}

export default MatchItem;