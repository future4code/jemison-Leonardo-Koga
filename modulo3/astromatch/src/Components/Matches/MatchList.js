import axios from "axios";
import React, { useEffect, useState } from "react";
import MatchItem from "./MatchItem"

function MatchList(){
    const [matches, setMatches] = useState([])
    
    const getMatches = () => {
            axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-koga-jemison/matches')
            .then((response) => {
                console.log(response.data.matches)
                setMatches(response.data.matches)
            }).catch((erro) => {
                console.log(erro)
            });
    }
    useEffect(() => {
        getMatches()
    },[matches]);

    return(
        <>{getMatches ? 
            <div>
                {matches.map((profile) => {
                    return <MatchItem profile={profile}/>
                })}

            </div> : <div>Nenhum match</div>
                }
        </>

    )
            }

export default MatchList;