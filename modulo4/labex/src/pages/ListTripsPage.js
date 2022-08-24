import React from "react";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../Hooks/useRequestData";
import { BASE_URL } from "../constants/constants";
import { ButtonListTripPageIncrever, ButtonListTripsPage, CardListTripsPage, ContainerListTripsPage } from "./Styled"


function ListTripsPage () {

const [data, isLoading, error]= useRequestData(`${BASE_URL}leonardo-koga-jemison/trips`)

const navigate = useNavigate();

const goToLastPage = () => {
    navigate(-1)
}

const goToApplicationFormPage = () => {
    navigate("/trips/application")
}

const listTrips = data && data.trips && data.trips.map((dataTrip)=>{
                    return(
                        <CardListTripsPage key={dataTrip.id} >
                            <p>Nome: {dataTrip.name}</p>
                            <p>Descrição: {dataTrip.description}</p>
                            <p>Planeta: {dataTrip.planet}</p>
                            <p>Duração: {dataTrip.durationInDays}</p>
                            <p>Data: {dataTrip.date}</p>
                            <ButtonListTripPageIncrever onClick={goToApplicationFormPage}>Candidatar-se</ButtonListTripPageIncrever>
                        </CardListTripsPage>
                    )
                } )


    return (
        <ContainerListTripsPage>
            <h1>Lista de viagens</h1>
            <div>
                <ButtonListTripsPage onClick={ goToLastPage }>Voltar</ButtonListTripsPage>
            </div>
            <section>
                {isLoading && <p>Carregando Viagens</p>}
                {!isLoading && error && <p>Ocorreu um erro com a viagem</p>}
                {!isLoading && data && data.trips && data.trips.length > 0 && listTrips}
                {!isLoading && data && data.trips && data.trips.length === 0 && ( <p>Não há viagens</p>)}
            </section>
        </ContainerListTripsPage>
    )
}

export default ListTripsPage;