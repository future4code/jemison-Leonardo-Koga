import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, ContainerBotton } from './Styled'

function HomePage () {
const navigate = useNavigate();

const goToTrip = () => {
    navigate("/trips/list")
}

const goToAdm = () => {
    navigate("/login")
}

    return (
        <Container>
            <p>LabeX</p>
            <ContainerBotton>
                <button onClick={ goToTrip }>Ver viagens</button>
                <button onClick={ goToAdm }>Area Adm</button>
            </ContainerBotton>
        </Container>
    )
}

export default HomePage;