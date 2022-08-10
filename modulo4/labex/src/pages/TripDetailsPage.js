import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function TripDetailsPage () {
const navigate =useNavigate();
const pathParams = useParams();
const card = pathParams.card;

const goToLastPage = () => {
    navigate(-1)
}

    return(
        <section>
            <p>{ card === "card1" ? "Viagem 1" : "Viagem 2"}</p>
            <button onClick={ goToLastPage }>Voltar</button>
        </section>
    )
}

export default TripDetailsPage;