import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {
return(
  <MainContainer>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}

            nomeUsuario2={'leo'}
            fotoUsuario2={'https://picsum.photos/50/150'}
            fotoPost2={'https://picsum.photos/id/237/200/150'}
  
            nomeUsuario3={'ju'}
            fotoUsuario3={'https://picsum.photos/50/250'}
            fotoPost3={'https://picsum.photos/200/150?grayscale'}
          />
        </MainContainer>
)

}


export default App;
