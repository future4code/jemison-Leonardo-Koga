import axios from "axios";
import React, { useEffect, useState } from "react";
import ChooseButons from "./ChooseButons";
import ProfileCard from "./ProfileCard";

function ChooseProfilePage() {

    const [ profileToChoose, setProfileToChoose] = useState(undefined)

    const getProfileToChoose = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-koga-jemison/person')
        .then((response) => {
            console.log('PERFIL', response.data.profile)
            setProfileToChoose(response.data.profile)
        })
    }

    const chooseProfile = (choice) => {
        const body = {
            choice: choice,
            id: profileToChoose.id
        }
        setProfileToChoose(undefined)
            axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-koga-jemison/choose-person', body)
            .then((response) => {
               console.log(response) 
               getProfileToChoose()
            })
    }

    useEffect(() => {
        getProfileToChoose()
    }, [])


    const onClickNo = () => {
        chooseProfile(false)
    }

    const onClickYes = () => {
        chooseProfile(true)
    }

    return(
        <div>
            { profileToChoose ?
              ( <>
                    <ProfileCard profile={profileToChoose}/>
                    <ChooseButons onClickNo={onClickNo} onClickYes={onClickYes}/>
                </>) : <p>Carregando...</p>
            }
        </div>
    )
}

export default ChooseProfilePage;