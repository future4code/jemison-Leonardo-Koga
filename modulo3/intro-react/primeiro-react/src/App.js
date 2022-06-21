import leo from './img/leo.PNG'
import './App.css';

function App() {

  const titulo = 'Olá! Eu sou o Leonardo'
  const mandarMensagem =()=>{
    alert('Boa noite!')
  }

  return (
    <div className="App">
      <h1>{titulo}</h1>
      <header className="App-header">
        <img src={leo} className="App-logo" alt="logo" />
        
      <p>Este é o meu primeiro site React</p>
      <button onClick={mandarMensagem}>Aperte este botão</button>
      </header>

    </div>
  );
}

export default App;
