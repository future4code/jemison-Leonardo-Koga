import React from "react";
import { useNavigate } from "react-router-dom";
import { ContainerInput } from './Styled';
import { ContainerPai } from './Styled'

function AdminHomePage() {

const navigate = useNavigate();

const goToLastPage = () => {
    navigate(-1)
}
const goToCreateTrip = () => {
    navigate("/admin/trips/create")
}

const goToCard1 =() => {
    navigate("/admin/trips/card1")
}

const goToCard2 =() => {
    navigate("/admin/trips/card2")
}

    return (
        <ContainerPai>
            <h1>Painel Administrativo</h1>
            <section>
                <button onClick={ goToLastPage }>Voltar</button>
                <button onClick={ goToCreateTrip }>Criar viagem</button>
                <button onClick={ goToLastPage }>Logout</button>
            </section>
            <ContainerInput>
                <button onClick={ goToCard1 }>Viagem 1 - card com lixeira na lateral direita</button>
                <button onClick={ goToCard2 }>Viagem 2 - card com lixeira na lateral direita</button>
            </ContainerInput>
        </ContainerPai>
    )
}

export default AdminHomePage;