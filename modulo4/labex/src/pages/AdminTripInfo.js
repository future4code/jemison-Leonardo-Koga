import React from "react";

function AdminTripInfo(props) {

    const {name, planet, description, date, durationInDays} = props.trips

    return (
        <div>
            <h1>Detalhes da Viagem</h1>
            <h2>{name}</h2>
            <div>Planeta: {planet}</div>
            <div>Duração: {durationInDays} dias</div>
            <div>Data: {date}</div>
            <div>Descrição: {description}</div>
        </div>
    )
}

export default AdminTripInfo;