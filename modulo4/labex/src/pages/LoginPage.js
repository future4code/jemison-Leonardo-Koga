import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../Hooks/useForm"
import axios from "axios";
import { BASE_URL } from "../constants/constants";
import { ButtonLoginPage, ButtonLoginPageEntrar, ContanierLoginPage, FormLoginPage, InputLoginPage } from "./Styled";

function LoginPage () {

    const navigate = useNavigate()

    const [ body, onChange, clear] = useForm({ email:"", password:""})

    const fazerLogin = (event) => {
        event.preventDefault()

        axios.post(`${BASE_URL}leonardo-koga-jemison/login`, body)
            .then(response => {
                localStorage.setItem("token", response.data.token)
                navigate("/admin/trips/list")
            }
            ).catch((error) => {
                console.log(error)
            })
            clear();
    }


    const goToLastPage = () => {
        navigate(-1)
    }

        return (
            <ContanierLoginPage>
                <h1>Login</h1>
                <ButtonLoginPage onClick={ goToLastPage } >Voltar</ButtonLoginPage>
                <FormLoginPage onSubmit={fazerLogin}>
                    <label htmlFor="email">E-mail</label>
                    <InputLoginPage 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    value={body.email}
                    onChange={onChange}
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    />
                    <label htmlFor="password">Password</label>
                    <InputLoginPage 
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Senha"
                    value={body.password}
                    onChange={onChange}
                    required
                    pattern=".{3,}"
                    />
                    <ButtonLoginPageEntrar>Entrar</ButtonLoginPageEntrar>
                </FormLoginPage>
            </ContanierLoginPage>
        )
}

export default LoginPage;