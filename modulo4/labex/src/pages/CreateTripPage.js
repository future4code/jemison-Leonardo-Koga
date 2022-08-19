import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "../Hooks/useForm"
import { BASE_URL } from "../constants/constants"
import useProtectedPage from "../Hooks/useProtectedPage";
import { ButtonCreateTripPage, ButtonCreateTripPageCriar, ContainerListTripsPage, FormCreateTripPage, InputCreateTripPage, SelectCreateTripPage } from "./Styled";

function CreateTripPage () {
    useProtectedPage()

    const [ body, onChange, clear] = useForm({ name:"", planet:"", date:"", description:"", durationInDays:"" })

    const criarViagem = (event) => {
        event.preventDefault()

        axios.post(`${BASE_URL}leonardo-koga-jemison/trips`, body, { headers: { auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0"}})
            .then((response) => {
                console.log(response.data);
                alert("Viagem criada")
        }).catch((error) =>{
            console.log("deu erro")
                alert("Deu erro, tente novamente!")
        })
        clear();
       //console.log(body)
    }


    const navigate = useNavigate();

    const goToLastPage = () => {
        navigate(-1)
    }

        return (
            <ContainerListTripsPage>
                <h1>Criar viagem</h1>
                <ButtonCreateTripPage onClick={ goToLastPage }>Voltar</ButtonCreateTripPage>
                <FormCreateTripPage onSubmit={criarViagem}>
                    <label htmlFor="name">Nome</label>
                    <InputCreateTripPage
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Nome"
                        value={body.name}
                        onChange={onChange}
                        required
                        pattern="^.{5,}"
                    />
                    <label htmlFor="planeta">Planeta</label>
                    <SelectCreateTripPage 
                        id="planeta"
                        type="select"
                        name="planet"
                        value={body.planet}
                        onChange={onChange}
                        placeholder="planeta"
                        required
                    >
                        <option>Escolha</option>
                        <option>Mercúrio</option>
                        <option>Vênus</option>
                        <option>Terra</option>
                        <option>Marte</option>
                        <option>Júpiter</option>
                        <option>Saturno</option>
                        <option>Urano</option>
                        <option>Netuno</option>
                        <option>Plutão</option>
                    </SelectCreateTripPage>
                    <label htmlFor="date" >Data</label>
                    <InputCreateTripPage
                        id="date"
                        type="date"
                        name="date"
                        placeholder="dd/mm/aaaa"
                        value={body.date}
                        onChange={onChange}
                        required
                    />
                    <label htmlFor="description">Descrição</label>
                    <InputCreateTripPage
                        id="description"
                        type="text"
                        name="description"
                        placeholder="Descrição"
                        value={body.description}
                        onChange={onChange}
                        required
                    />
                    <label htmlFor="durationInDays">Duração</label>
                    <InputCreateTripPage
                        id="durationInDays"
                        type="text"
                        name="durationInDays"
                        placeholder="Duração em dias"
                        value={body.durationInDays}
                        onChange={onChange}
                        required
                    />
                    <ButtonCreateTripPageCriar>Criar</ButtonCreateTripPageCriar>    
                </FormCreateTripPage>
            </ContainerListTripsPage>
        )
}

export default CreateTripPage;