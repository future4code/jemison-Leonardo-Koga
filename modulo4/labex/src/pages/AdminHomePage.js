import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useProtectedPage from "../Hooks/useProtectedPage";
import { BASE_URL } from "../constants/constants";
import { ButtonListAdminHomePage, CardAdminHomePage, ContainerAdminHomePage } from './Styled'

function AdminHomePage() {
    const [trips, setTrips] = useState([])
    const pathParams = useParams()

    useProtectedPage()

    useEffect(() => {
        axios.get(
            `${BASE_URL}leonardo-koga-jemison/trips`)
        .then((response) => {
            setTrips(response.data.trips)
        }).catch((error) => {
        alert("erro" + error)
        })
    }, [])

    
    const navigate = useNavigate();

    const goToLastPage = () => {
        navigate(-1)
    }
    const goToCreateTrip = () => {
        navigate("/admin/trips/create")
    }

    const goToTripDetailsPage = () => {
        navigate("/admin/trips/:tripId")
    }

    function logout () {
        localStorage.removeItem('token')
        alert("Você foi deslogado")
        goToLastPage()
    }


    return (
        <ContainerAdminHomePage>
            <h1>Painel Administrativo</h1>
            <section>
                <ButtonListAdminHomePage onClick={ goToCreateTrip }>Criar viagem</ButtonListAdminHomePage>
                <ButtonListAdminHomePage onClick={() => logout()}>Logout</ButtonListAdminHomePage>
            </section>
            <div>
                {trips.map((trip) => {
                    return( 
                        <CardAdminHomePage onClick={()=>goToTripDetailsPage(trip.id)}>
                            {trip.name}
                            <div>**Clique para mais detalhes</div>
                        </CardAdminHomePage>
                    )
                })}
            </div>
        </ContainerAdminHomePage>
    )
}

export default AdminHomePage;