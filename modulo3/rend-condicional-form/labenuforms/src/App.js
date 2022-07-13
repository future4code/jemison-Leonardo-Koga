import React, { useState } from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";
import styled from "styled-components";

const Secao = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`

function App() {
  const [etapa, setEtapa] = useState(1);

  const irParaProximaEtapa = () => {
    let cont = etapa + 1;
    setEtapa(cont)
  }

  const renderizaEtapa = () => {
    switch(etapa) {
      case 1:
        return <Etapa1 />
        break;
      case 2:
        return <Etapa2 />
        break;
      case 3:
        return <Etapa3 />
        break;
      case 4:
        return <Final />
        break;
      default:
        break
    }
  }
  
  return (
    <Secao>
      {renderizaEtapa()}
      <br /> 
      <button onClick={irParaProximaEtapa}>Próxima Etapa</button>
    </Secao>
  )
}

export default App;
