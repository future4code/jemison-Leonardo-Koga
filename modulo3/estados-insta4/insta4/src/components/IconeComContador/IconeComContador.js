import React from 'react'
import {Container, Imagem} from './style'




export function IconeComContador(props) {
	return <Container className='IconContainer'>
		< Imagem className ='IconImage' alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</Container>
}
