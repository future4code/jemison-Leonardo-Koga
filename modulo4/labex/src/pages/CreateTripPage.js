import React from "react";
import { useNavigate } from "react-router-dom";
import { ContainerInput } from './Styled'

function CreateTripPage () {
const navigate = useNavigate();

const goToLastPage = () => {
    navigate(-1)
}

    return (
        <section>
            <h1>Criar viagem</h1>
            <ContainerInput>
                <input placeholder="Nome"/>
                <select name="escolhaUmPlaneta">
                <option value="">Selecione</option>
                <option value={"1"}>Saturno</option>
                <option value={"2"}>Marte</option>
                </select>
                <input placeholder="dd/mm/aaaa" />
                <input placeholder="Descrição"/>
                <input placeholder="Duração em dias"/>
            </ContainerInput>
            <button onClick={ goToLastPage }>Voltar</button>
            <button>Criar</button>
        </section>
    )
}

export default CreateTripPage;