import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
  const arrayPost = [
    {
      nomeUsuario:'paulinha',
      fotoUsuario:'https://picsum.photos/50/50',
      fotoPost:'https://picsum.photos/200/150'
    },
    {
      nomeUsuario:'leo',
      fotoUsuario:'https://picsum.photos/150/50',
      fotoPost:'https://picsum.photos/210/150'
    },
    {
      nomeUsuario:'ju',
      fotoUsuario:'https://picsum.photos/50/50',
      fotoPost:'https://picsum.photos/201/150'
    }
  ]

  const post = arrayPost.map((post,index) => {
    return <li key={index}>{post}</li>
  })

  console.log(post)

return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
          <Post
            nomeUsuario={'leo'}
            fotoUsuario={'https://picsum.photos/150/50'}
            fotoPost={'https://picsum.photos/210/150'}
          />
          <Post
            nomeUsuario={'ju'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/201/150'}
          />
  </div>
)

}


export default App;
