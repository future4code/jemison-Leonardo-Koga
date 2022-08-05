import axios from "axios";
import React, { useEffect, useState } from "react";

function ResetButton(){

    const [matches, setMatches] = useState([]);

    useEffect(() => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:leonardo-koga-jemison/matches")
            .then((response) => {
                console.log(response.data.matches);
                setMatches(response.data.matches);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    const onClickReset = () => {
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:leonardo-koga.jemison/clear")
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