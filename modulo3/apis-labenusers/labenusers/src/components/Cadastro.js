import React, { useEffect ,useState } from "react";
import axios from "axios";


function Cadastro(props) {

    const {handleLista} = props
    
    // PASSO 1: CRIAR OS ESTADOS Do USER
    const [users, setUsers] = useState([]);

    // PASSO 8: CRIAÇÃO DO ESTADO DO INPUT
    const [input, setInput] = useState("");
    const [input2, setInput2] = useState("")

    // PASSO 9: CRIAÇÃO DO HANDLE PARA CUIDAR DO INPUT
    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleInput2 = (e) => {
        setInput2(e.target.value)
    }

    // PASSO 2: COMPONENTIZAR OS ITENS DA LISTA
    const allUsers = users.map((user, index) => {
        return(
            <li key={index} >
                {user.name}
                {user.email}
            </li>
        )
    })

    // PASSO 3: CRIAÇÃO DAS VARIÁVEIS DA MINHA API
        // QUE ESTARÃO PRESENTES EM TODAS AS REQUISIÇÕES
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    const serviceheaders = {
        headers:{
            Authorization: 'leonardo-koga-jemison'
        } }

    // PASSO 4: CRIAÇÃO DA REQUISIÇÃO GET
    const getAllUsers = () => {
        axios.get(url, serviceheaders)
            .then((response) => { setUsers(response.data) })
                .catch((error) => { console.log(error.response) })
    }

     // PASSO 10: CRIAÇÃO DA REQUISIÇÃO POST
     const body = {
        "name" : input,
        "email" : input2
     }

     const postUser = (e) => {
        e.preventDefault();

        axios.post(url, body, serviceheaders)
        .then((response) => {
            alert("Cadastro realizado com sucesso!")
            getAllUsers()
        }).catch((error) => {
            alert("Tente novamente")
        })

        setInput("")
        setInput2("")
     }

    // PASSO 5: PASSAR O USEEFFECT COM A REQUISIÇÃO GET
        // PARA RENDERIZAR NA TELA AUTOMATICAMENTE
    useEffect(() => {
        getAllUsers()
    }, [])
    
    return(
        <div>
            {/* PASSO 6: RENDERIZAR ISSO NA TELA */}
            <ul>
                { allUsers }
            </ul>
            {/* PASSO 7: CRIAÇÃO DE UM FORMULÁRIO */}
            <form>
                <input type="text" placeholder="Nome" value={ input } onChange={handleInput}/>
                <input  type="text" placeholder="Email" value={ input2 } onChange={handleInput2}/>
                <button onClick={postUser}>
                    Criar Usuário
                </button>
                <button onClick={handleLista}>Trocar tela</button>
            </form>
        </div>

    )
}

export default Cadastro;