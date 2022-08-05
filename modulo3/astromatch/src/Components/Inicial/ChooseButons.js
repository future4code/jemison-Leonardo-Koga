import React from "react";


function ChooseButons (props) {

    return(
        <div>
            <button onClick={props.onClickNo}>No</button>
            <button onClick={props.onClickYes}>Yes</button>
        </div>
    )
}

export default ChooseButons;