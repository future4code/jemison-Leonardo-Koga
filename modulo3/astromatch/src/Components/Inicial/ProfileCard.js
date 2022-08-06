import React from "react";
import { Card, Photo } from "./style";

function ProfileCard(props) {
    const profile = props.profile;


    return(
        <Card>
            <p>{profile.name}</p>
            <p>{profile.age}</p>
            <Photo src= {profile.photo} alt="imagem do perfil"/>
            <p>{profile.bio}</p>
        </Card>
    )
}

export default ProfileCard;