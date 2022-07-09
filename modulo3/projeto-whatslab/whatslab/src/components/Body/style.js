import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    width: 100vw;
    height: 90vh;
`
export const Coluna1 = styled.div`
    background-color: orange;
    width: 20vw;
`
export const Coluna2 = styled.div`
    width: 80vw;
    height: 85vh;
    display: grid;
    grid-template-rows: 1fr;

`
export const Mensagem = styled.div`
    display: flex;
    align-items: flex-end;
    padding: 50px;
    background-color: lightgrey;
    border: 1px solid black;
`
export const Enviar = styled.div`
    display: flex;
    align-items: center;
    padding:10px;
`
export const Coluna3 = styled.div`
    background-color: orange;
    width: 20vw;
`
export const Conversa = styled.div`
    display: flex;
    background-color: lightgrey;
`
export const Remetente = styled.p`
    font-weight: bold;

    
`

export const MensagemConversa = styled.p`
    margin-left: 5px;
    
`