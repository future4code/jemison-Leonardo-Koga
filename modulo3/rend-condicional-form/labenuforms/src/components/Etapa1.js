import React from "react";
import styled from "styled-components";

const Secao = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`

function Etapa1() {
  return (
    <Secao>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <p>1. Qual o seu nome?</p>
        <input></input>
        <p>2. Qual sua idade?</p>
        <input></input>
        <p>3. Qual seu email?</p>
        <input></input>
        <p>4. Qual sua escolaridade?</p>
        <select>
            <option>Ensino Médio Incompleto</option>
            <option>Ensino Médio Completo</option>
            <option>Ensino Superior Incompleto</option>
            <option>Ensino Superior Completo</option>
        </select>
    </Secao>

  );
}

export default Etapa1;