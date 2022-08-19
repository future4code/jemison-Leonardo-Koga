import React from "react";
import { useNavigate } from "react-router-dom"; 
import { ButtonHomePage, ContainerPaiHomePage } from "./Styled"

function HomePage () {
const navigate = useNavigate();

const goToTrip = () => {
    navigate("/trips/list")
}

const goToAdm = () => {
    navigate("/login")
}

    return (
        <ContainerPaiHomePage>
            <h1>LabeX</h1>
            <section>
                <ButtonHomePage onClick={ goToTrip }>Ver viagens</ButtonHomePage>
                <ButtonHomePage onClick={ goToAdm }>Area Adm</ButtonHomePage>
            </section>
        </ContainerPaiHomePage>
    )
}

export default HomePage;