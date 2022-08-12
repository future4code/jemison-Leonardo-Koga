import React from "react";
import { useNavigate } from "react-router-dom";
import { ContainerInput } from "./Styled"

function ApllicationFormPage () {
const navigate = useNavigate();

const goToLastPage = () => {
    navigate (-1)
}


    return (
        <section>
            <h1>Inscreva-se para uma viagem</h1>
            <ContainerInput>
                <select name="escolhaUmaViagem">
                    <option value="">Selecione</option>
                    <option value={"1"}>Viagem 1</option>
                    <option value={"2"}>Viagem 2</option>
                </select>
                <input placeholder="Nome"/>
                <input placeholder="Idade"/>
                <input placeholder="Texto de candidatura"/>
                <input placeholder="Profissão"/>
                <select name="escolhaUmPais">
                    <option value="">Escolha um País</option>
                    <option value={"1"}>Brasil</option>
                    <option value={"2"}>Japão</option>

                </select>
            </ContainerInput>
            <section>
                <button onClick={ goToLastPage }>Voltar</button>
                <button>Inscrever-se</button>
            </section>
        </section>
    )
}

export default ApllicationFormPage;