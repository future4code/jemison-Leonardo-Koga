import React from "react";
import styled from "styled-components";

const Secao = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`

function Etapa2() {
  return (
    <Secao>
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
        <p>5. Qual curso?</p>
        <input></input>
        <p>6. Qual unidade de ensino?</p>
        <input></input>
    </Secao>
  );
}

export default Etapa2;