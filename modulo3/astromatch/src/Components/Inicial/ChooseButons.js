import React from "react";
import { ButtonContainer } from "./style";


function ChooseButons (props) {

    return(
        <ButtonContainer>
            <button onClick={props.onClickNo}>Não</button>
            <button onClick={props.onClickYes}>Sim</button>
        </ButtonContainer>
    )
}

export default ChooseButons;