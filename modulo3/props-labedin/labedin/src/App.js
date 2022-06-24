import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://lh3.googleusercontent.com/-T3_qDTkbtGo/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnJkaX0J_IommwzLZWMyD0WTnR_-A/photo.jpg?sz=46" 
          nome="Leonardo" 
          descricao="Oi, eu sou o Leonardo. Uma pessoa focada, determinada a ter uma transição de carreira. Comprometido com a idéia de que o aprendizado e a prática são essenciais para desenvolvimento. E através da comunicação e da escuta, a possibilidade de resolução."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
          <CardPequeno
            imagem="https://cdn-icons.flaticon.com/png/512/3178/premium/3178158.png?token=exp=1656028655~hmac=c0c345d406cacfd3a1e391b434268722"
            texto="Email: leokoga@gmail.com"
          />

          <CardPequeno
            imagem="https://cdn-icons-png.flaticon.com/512/1239/1239525.png"
            texto="Endereço: Rua Labenu"
          />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://ncdn0.infojobs.com.br/logos/Company_Evaluation/127150.jpg?v=1" 
          nome="Grão Espresso" 
          descricao="Trabalhei por 20 anos como empreendedor nesta Cafeteria, onde aprendi muito sobre gestão de pessoas e administração." 
        />
        
        <CardGrande 
          imagem="https://cnbbsul3.org.br/wp-content/uploads/2016/10/caritas.png" 
          nome="Cáritas Brasileira" 
          descricao="OSC onde trabalho atualmente, com o acolhimento de migrantes estrangeiros. Refugiados de guerra e vítimas de tráfico de pessoas." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
