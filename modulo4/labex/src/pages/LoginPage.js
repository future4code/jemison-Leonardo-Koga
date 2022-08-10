import React from "react";
import { useNavigate } from "react-router-dom";
import { ContainerInput } from "./Styled"

function LoginPage () {
const navigate = useNavigate();

const goToLastPage = () => {
    navigate(-1)
}

const goToAdmin = () => {
    navigate("/admin/trips/list")
}
    return (
        <section>
            <p>Login</p>
            <ContainerInput>
                <input placeholder="Email"/>
                <input placeholder="Senha"/>
            </ContainerInput>
            <section>
                <button onClick={ goToLastPage } >Voltar</button>
                <button on onClick={ goToAdmin }>Entrar</button>
            </section>
        </section>
    )
}

export default LoginPage;