import React from "react";
import{Body, HeaderEstilizado, ImgEstilizado, Header, Main, Coluna1, Coluna2, Coluna3,ButtonEstilizado} from './style.js'
import logo from '../img/logoLabenu.PNG';


export function MeuComponente(){
    return(
        <Body>
            <Header>
                <ImgEstilizado src={logo} className="LogoLabenu" alt="logo"/>
                <HeaderEstilizado>LabZap</HeaderEstilizado>
            </Header>
            <Main>
                <Coluna1 className="Coluna1"/>
                <Coluna2 className="Coluna2">
                    <label for="Remetente">Remetente: </label>
                    <input name="Remetente" size="40" onChange={""} value={""}/>
                    <label for="Msg">Msg: </label>
                    <input name="MSG" size="70" onChange={""} value={""}/>
                <ButtonEstilizado>Enviar Mensagem</ButtonEstilizado>
                </Coluna2>
                <Coluna3 className="Coluna3"/>
            </Main>
            
        </Body>
    )
}