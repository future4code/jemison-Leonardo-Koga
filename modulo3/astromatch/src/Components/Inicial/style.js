import styled from "styled-components";

//ProfileCard
export const Card = styled.div`
margin: 16px;
border: 1px solid black;
max-height: 650px;
`

export const ProfileInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 16px;
`

export const Photo = styled.img`
    width: 100%;
    display: block;
    max-height: 350px;
`
// Inicial

export const Bar = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 1px solid lightgray;
align-items: center;
padding: 0 8px;
`


//ChooseButton

export const ButtonContainer = styled.div`
display: flex;
justify-content: space-around;

`

//Inicial

export const InicialContainer = styled.div`
border: 1px solid black;
border-radius: 3px;
width: 400px;
height: 800px;
margin: 30px;
display: flex;
flex-direction: column;
`
//MatchItem

export const ListItemContainer = styled.div`
display: flex;
align-items: center;
border-bottom: 1px solid gray;

:hover{
    background-color: lightblue;
}
`

export const Avatar = styled.img`
border-radius: 50%;
margin-right: 8px;
height: 30px;
width: 30px;
`