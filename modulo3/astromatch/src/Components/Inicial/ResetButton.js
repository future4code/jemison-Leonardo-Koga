import axios from "axios";
import React from "react";

function ResetButton(){

    const onClickReset = () => {
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-koga-jemison/clear")
            .then((response) => {
                console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return(
        <div>
            <button onClick={onClickReset}>
                Limpar Matches
            </button>
        </div>
    )
}

export default ResetButton