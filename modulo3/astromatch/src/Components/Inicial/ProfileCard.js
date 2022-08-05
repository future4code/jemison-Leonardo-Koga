import React from "react";
import { Card, Photo } from "./style";

function ProfileCard(props) {
    const profile = props.profile;


    return(
        <Card>
            {profile.name}
            {profile.age}
            <Photo src= {profile.photo} alt="imagem do perfil"/>
            {profile.bio}
        </Card>
    )
}

export default ProfileCard;