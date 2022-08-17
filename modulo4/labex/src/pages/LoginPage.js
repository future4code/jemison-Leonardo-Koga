import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../Hooks/useForm"
import axios from "axios";
import { BASE_URL } from "../constants/constants";

function LoginPage () {

    const [ body, onChange, clear] = useForm({ email:"", password:""})

    const fazerLogin = (event) => {
        event.preventDefault()

        axios.post(`${BASE_URL}leonardo-koga-jemison/login`, body)
            .then((response) => {
                console.log(response.data)
            }).catch((error) => {
                console.log(error)
            })
            clear();
    }

    const navigate = useNavigate();

    const goToLastPage = () => {
        navigate(-1)
    }

    //const goToAdmin = () => {
     //   navigate("/admin/trips/list")
    //}
        return (
            <section>
                <h1>Login</h1>
                <form onSubmit={fazerLogin}>
                    <label htmlFor="email">E-mail</label>
                    <input 
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
                    <input 
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Senha"
                    value={body.password}
                    onChange={onChange}
                    required
                    pattern=".{3,}"
                    />
                    
                    <section>
                        <button onClick={ goToLastPage } >Voltar</button>
                        <button>Entrar</button>
                    </section>
                </form>
            </section>
        )
}

export default LoginPage;