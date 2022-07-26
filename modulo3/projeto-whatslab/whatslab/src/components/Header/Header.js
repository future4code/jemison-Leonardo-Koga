import React from "react";
import {Headere, ImgEstilizado, HeaderEstilizado} from './style'
import logo from '../../img/logoLabenu.PNG'

export function Header(){
    return(
    <Headere>
        <ImgEstilizado src={logo} alt="logo"/>
        <HeaderEstilizado>LabZap</HeaderEstilizado>
    </Headere>
    )
}