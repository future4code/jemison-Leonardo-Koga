import { Card, Photo, ProfileInfo } from "./style";
import React from "react";



function ProfileCard(props) {
    const profile = props.profile;

    
    return(
        <Card>
            <ProfileInfo>
                <Photo src= {profile.photo} alt="imagem do perfil"/>
                <p>{profile.name}, {profile.age}</p>
                <p>{profile.bio}</p>
            </ProfileInfo>
        </Card>
    )
}

export default ProfileCard;