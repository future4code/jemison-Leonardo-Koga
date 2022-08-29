import axios from "axios";
import React, { useEffect, useState } from "react";
import MatchItem from "./MatchItem"

function MatchList(){
    const [matches, setMatches] = useState([])
    

    useEffect(() => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-koga-jemison/matches')
        .then((response) => {
            console.log(response.data.matches)
            setMatches(response.data.matches)
        })
    }, [])

    return(
        <div>
            {matches.map((profile) => {
                return <MatchItem profile={profile}/>
            })}
       </div>
    )
}

export default MatchList;