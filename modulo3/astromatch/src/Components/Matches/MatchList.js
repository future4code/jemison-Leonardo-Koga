import axios from "axios";
import React, { useEffect, useState } from "react";
import MatchItem from "./MatchItem";

function MatchList(props){
    const [matches, setMatches] = useState([])

    const getMatches = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:leonardo-koga-jemison/matches")
        .then((response) => {
            console.log(response.data.matches);
            setMatches(response.data.matches)
        })
        .catch((erro) => {
            console.log(erro)
        })
    }

    useEffect(() => {
        getMatches()
    }, [matches]);


    return(
        <div>
            
        </div>
    )
}

export default MatchList