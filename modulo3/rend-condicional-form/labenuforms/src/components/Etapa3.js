import React from "react";
import styled from "styled-components";

const Secao = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`

function Etapa3() {
  return (
    <Secao>
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        <p>5. Por que você não terminou um curso de graduação?</p>
        <input></input>
        <p>6. Você fez algum curso complementar?</p>
        <select>
            <option>Curso técnico</option>
            <option>Cursos de inglês</option>
            <option>Não fiz curso complementar</option>
        </select>
    </Secao>
  );
}

export default Etapa3;