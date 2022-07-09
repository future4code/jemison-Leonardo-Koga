import React, {useState}from "react";
import{Main, Coluna1, Coluna2, Conversa, Enviar, Coluna3, Remetente, MensagemConversa} from './style.js'

export function Body(){
    const [inputRemetente, setInputRemetente] = useState("");
    const [inputMensagem, setInputMensagem] = useState("");
    const [inputConversa, setConversa] = useState([{
        remetente:"",
        mensagem: ""
    }])

    const handleInputRemetente = (e) =>{
        setInputRemetente(e.target.value)
    }

    const handleInputMensagem = (e) =>{
        setInputMensagem(e.target.value)
    }
    
    const addConversa = (e) =>{
        e.preventDefault()

        const novaConversa = {remetente: inputRemetente, mensagem: inputMensagem}
        const novaListaConversa= [...inputConversa, novaConversa]
        setConversa(novaListaConversa)
    }

    const listaConversas = inputConversa.map((conversa,index) =>{
        return(
            <Conversa key={index}>
                <Remetente>{conversa.remetente}</Remetente>
                <MensagemConversa>{conversa.mensagem}</MensagemConversa>
            </Conversa>
        )
    })

    return(
            <Main>
                <Coluna1/>
                <Coluna2>
                    {listaConversas}
                    <Enviar>
                        <label></label>
                        <input 
                        size="30" 
                        placeholder={'Usuário'} 
                        onChange={handleInputRemetente} 
                        value={inputRemetente}
                        />
                        <label></label>
                        <input 
                        size="60" 
                        placeholder={'Mensagem'} 
                        onChange={handleInputMensagem} 
                        value={inputMensagem}
                        />
                        <button onClick={addConversa}>Enviar </button>
                    </Enviar>
                </Coluna2>
                <Coluna3/>
            </Main> 
    )
}