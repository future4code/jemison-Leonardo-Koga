import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useProtectedPage from "../Hooks/useProtectedPage";
import { BASE_URL } from "../constants/constants";


function TripDetailsPage () {
    useProtectedPage()
const navigate =useNavigate();
const [trip, setTrip] = useState([]);
const pathParams = useParams();


const getTripDetails = () => {
    axios.get(`${BASE_URL}leonardo-koga-jemison/trip/${pathParams.id}`,{
        headers: {
            auth: localStorage.getItem('token')
        }
    }).then((resp) => {
        setTrip(resp.data.trip)
    }).catch((error) => {
        alert(error)
    })
}

useEffect (() => {
    getTripDetails()
}, [])


const goToLastPage = () => {
    navigate(-1)
}

    return(
        <div>
            <button onClick={ goToLastPage }>Voltar</button>
            <div>
                {trip && (
                    <div>
                        <h1>{trip.name}</h1>
                        <p>{trip.description}</p>
                    </div>
                )}
            </div>
            
        </div>
    )
}
export default TripDetailsPage;