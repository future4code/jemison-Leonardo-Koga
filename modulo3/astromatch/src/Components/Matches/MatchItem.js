import React from "react";
import { Avatar, ListItemContainer } from "../Inicial/style";

function MatchItem(props) {
    const profile = props.profile

    return(
        <ListItemContainer>
            <Avatar src={profile.photo} alt="imagem" />
            <p>{profile.name}</p>
        </ListItemContainer>
    )
}

export default MatchItem;