import axios from "axios";
import React, { useEffect, useState } from "react";
import ChooseButons from "./ChooseButons";
import ProfileCard from "./ProfileCard";


function Inicial(props){

    const [profiles, setProfile] = useState([])

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:leonardo-koga-jemison/person"

    const serviceHeaders ={
        headers : {
            Authorization: "leonardo-koga-jemison"
        }
    }

    const getAllProfile = () => {
        axios.get(url, serviceHeaders)
            .then((response) => { setProfile(response.data.profile)})
            .catch((err) => { console.log(err) })
    }

    const choosePerson = (choice) => {
        const body = {
            choice: choice,
            id: profiles.id,
        };
    setProfile(undefined)
        axios.post(url, body, serviceHeaders)
        .then ((response) => {
            getAllProfile()
        })
    }

    useEffect(() => {
        getAllProfile();
    },[])

    const onClickNo = () => {
        choosePerson(false)
    }

    const onClickYes = () => {
        choosePerson(true)
    }

    return(
        <div>
            <button onClick={() => props.changeScreen('match')}>Matches</button>
            <div>
               <ProfileCard profile={profiles}/>
            </div>
            <div>
                <ChooseButons onClickYes={onClickYes} onClickNo={onClickNo}/>
            </div>
        </div>
    )
}

export default Inicial;
