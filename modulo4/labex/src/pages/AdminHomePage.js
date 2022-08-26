import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useProtectedPage from "../Hooks/useProtectedPage";
import { BASE_URL } from "../constants/constants";
import { ButtonDelete, ButtonDetalhes, ButtonListAdminHomePage, CardAdminHomePage, ContainerAdminHomePage } from './Styled'

function AdminHomePage() {
    const [trips, setTrips] = useState([])
    const pathParams = useParams();

    useProtectedPage()

    const deletarViagem = (event) => {
        event.preventDefault()

        axios.delete(`${BASE_URL}leonardo-koga-jemison/trips/${pathParams.id}`, { headers: { auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0"}})
            .then((response) => {
                console.log(response.data);
                alert("Viagem deletada")
        }).catch((error) =>{
            console.log("deu erro")
                alert("Deu erro, tente novamente!")
        })
    }

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

    const goToTripDetailsPage = (id) => {
        navigate("/admin/trips/${id}")
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
                        <CardAdminHomePage key={trip.id}>
                            {trip.name}
                            <ButtonDetalhes  onClick={goToTripDetailsPage} >+ detalhes</ButtonDetalhes>
                            <ButtonDelete onClick={deletarViagem}>deletar</ButtonDelete>
                        </CardAdminHomePage>
                    )
                })}
            </div>
        </ContainerAdminHomePage>
    )
}

export default AdminHomePage;