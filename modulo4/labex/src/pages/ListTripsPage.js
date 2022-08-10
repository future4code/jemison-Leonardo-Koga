import React from "react";
import { useNavigate } from "react-router-dom";

function ListTripsPage () {
const navigate = useNavigate();

const goToLastPage = () => {
    navigate(-1)
}

const goToSignUp = () => {
    navigate("/trips/application")
}

    return (
        <section>
            <button onClick={ goToLastPage }>Voltar</button>
            <button onClick={ goToSignUp }>Inscrever-se</button>
            <p>Lista de viagens</p>
            <div>Cartão com dados da viagem</div>
            <div>Cartão com dados da viagem</div>
        </section>
    )
}

export default ListTripsPage;