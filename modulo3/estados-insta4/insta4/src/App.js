import React, {useState} from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
  const [inputNomeUsuario, setIpuntNomeusuario] = useState("")
  const [inputFotoUsuario, setInputFotoUsuario] = useState("")
  const [inputFotoPost, setInputFotoPost] = useState("")
  const [inputArrayPost, setInputArrayPost] = useState([
    {
      nomeUsuario:'paulinha',
      fotoUsuario:'https://picsum.photos/50/50',
      fotoPost:'https://picsum.photos/200/150',
    },
    {
      nomeUsuario:'leo',
      fotoUsuario:'https://picsum.photos/150/50',
      fotoPost:'https://picsum.photos/210/150',
    },
    {
      nomeUsuario:'ju',
      fotoUsuario:'https://picsum.photos/50/50',
      fotoPost:'https://picsum.photos/201/150',
    }
  ])

  const handleInputNomeUsuario = (e) =>{
    setIpuntNomeusuario(e.target.value)
  }

  const handleInputFotoUsuario = (e) =>{
    setInputFotoUsuario(e.target.value)
  }

  const handleInputFotoPost = (e) =>{
    setInputFotoPost(e.target.value)
  }
  
  const addPost = (e) =>{
    e.preventDefault();

    const novoPost = {nomeUsuario: inputNomeUsuario, fotoUsuario: inputFotoUsuario, fotoPost: inputFotoPost}
    const novaListaPost = [...inputArrayPost, novoPost]
    setInputArrayPost(novaListaPost)
  }

  const ListaPost = inputArrayPost.map((postagem,index) => {
    return(
      <Post key={index}
        nomeUsuario={postagem.nomeUsuario}
        fotoUsuario={postagem.fotoUsuario}
        fotoPost={postagem.fotoPost}
      />
    )
  })

return(
  <div className='MainContainer'>
          <form>
            <input 
            placeholder='nome'
            value={inputNomeUsuario}
            onChange={handleInputNomeUsuario}
            />
            <input 
            placeholder='url fotoUsuario'
            value={inputFotoUsuario}
            onChange={handleInputFotoUsuario}
            />
            <input 
            placeholder='url fotoPost'
            value={inputFotoPost}
            onChange={handleInputFotoPost}
            />
            <button onClick={addPost}>Postar</button>
          </form>
          {ListaPost}
  </div>
)

}

export default App;
