import axios from "axios";
import React, { useEffect, useState } from "react";


function Inicial(props){

    const [allProfile, setAllProfile] = useState([])

    

    useEffect(() => {
        getAllProfile()
    },[])

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"

    const headers ={
        headers : {
            Authorization: "leonardo-koga-jemison"
        }
    }

    const getAllProfile = () => {
        axios
        .get(url, headers)
        .then((response) => {
            setAllProfile(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return(
        <div>
            <button onClick={() => props.changeScreen('match')}>Matches</button>
           
            <div>
                <button>X</button>
                <button>Curtir</button>
            </div>
            
        </div>
    )
}

export default Inicial;
