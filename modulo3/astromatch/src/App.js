import './App.css';
import React, {useState} from 'react';
import Inicial from './Components/Inicial/Inicial';
import Matches from './Components/Matches/Matches';



function App() {
  const [screen, setScreen] = useState('start')

  const changeScreen = (screen) => {
    setScreen(screen)
  }

  const renderScreen = () => {
    switch (screen) {
      case 'start' :
        return <Inicial changeScreen={changeScreen} />
      case 'match' :
        return <Matches changeScreen={changeScreen} />
      default:
        return null
  }
}

  return (
    <div>
      {renderScreen()}
    </div>
  );
}

export default App;
