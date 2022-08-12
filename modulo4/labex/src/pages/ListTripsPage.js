import React from "react";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../hooks/useRequestData";
import { BASE_URL } from "../constants/constants";
import { ContainerCard } from "./Styled"


function ListTripsPage () {

const [data, isLoading, error]= useRequestData(`${BASE_URL}trips`)

const listTrips = data && data.trips && data.trips.map((dataTrip)=>{
                    return(
                        <ContainerCard>
                            <p>Nome: {dataTrip.name}</p>
                            <p>Descrição: {dataTrip.description}</p>
                            <p>Planeta: {dataTrip.planet}</p>
                            <p>Duração: {dataTrip.durationInDays}</p>
                            <p>Data: {dataTrip.date}</p>
                        </ContainerCard>
                    )
                } )

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
            <h1>Lista de viagens</h1>
            <section>
                {isLoading && <p>Carregando Viagens</p>}
                {!isLoading && error && <p>Ocorreu um erro com a viagem</p>}
                {!isLoading && data && data.trips && data.trips.length > 0 && listTrips}
                {!isLoading && data && data.trips && data.trips.length === 0 && ( <p>Não há viagens</p>)}
            </section>
        </section>
    )
}

export default ListTripsPage;