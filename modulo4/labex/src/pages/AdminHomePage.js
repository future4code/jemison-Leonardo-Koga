import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useProtectedPage from "../Hooks/useProtectedPage";
import { ButtonListAdminHomePage, CardAdminHomePage, ContainerAdminHomePage } from './Styled'

function AdminHomePage() {
    const [trips, setTrips] = useState([])

    useProtectedPage()

    useEffect(() => {
        axios.get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-koga-jemison/trips")
        .then((response) => {
            setTrips(response.data.trips)
        }).catch((error) => {
        alert("erro" + error)
        })
    }, [])

    useEffect(() => {
        const token = localStorage.getItem("token");

        axios.get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/NoIFVcOiSgTKTIPVZwXS",
        {
            headers: {
                auth: token
            }
        }).then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log("Deu erro: ", error.response)
        })
    }, [])

const navigate = useNavigate();

const goToLastPage = () => {
    navigate(-1)
}
const goToCreateTrip = () => {
    navigate("/admin/trips/create")
}

    function logout () {
        localStorage.removeItem('token')
        alert("Você foi deslogadp")
        goToLastPage()
    }


    return (
        <ContainerAdminHomePage>
            <h1>Painel Administrativo</h1>
            <section>
                <ButtonListAdminHomePage onClick={ goToLastPage }>Voltar</ButtonListAdminHomePage>
                <ButtonListAdminHomePage onClick={ goToCreateTrip }>Criar viagem</ButtonListAdminHomePage>
                <ButtonListAdminHomePage onClick={() => logout()}>Logout</ButtonListAdminHomePage>
            </section>
            <div>
                {trips.map((trip) => {
                    return(
                        <CardAdminHomePage>
                            {trip.name}
                        </CardAdminHomePage>
                    )
                })}
            </div>
        </ContainerAdminHomePage>
    )
}

export default AdminHomePage;