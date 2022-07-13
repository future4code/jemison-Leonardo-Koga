import React from "react";
import styled from "styled-components";

const Secao = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`

function Final() {
  return (
    <Secao>
        <h1>O FORMULÁRIO ACABOU</h1>
        <p>Muito obrigado por participar! Entraremos em contato!</p>
    </Secao>
  );
}

export default Final;