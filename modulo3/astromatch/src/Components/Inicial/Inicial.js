import React, { useState } from "react";
import { Bar, InicialContainer } from "./style";
import ChooseProfilePage from "./ChooseProfilePage";
import MatchList from "../Matches/MatchList"


function Inicial(){
    const [screen, setScreen] = useState('choose-profile')
  
    const renderScreen = () => {
      switch (screen) {
        case 'choose-profile' :
          return <ChooseProfilePage/>
        case 'match-list' :
          return <MatchList/>
        default:
          return null
    }
  }

    const goToprofilePage = () => {
        setScreen('choose-profile')
    }

    const goToMatchListPage = () => {
        setScreen('match-list')
    }
    
    return(
        <InicialContainer>
            <Bar>
                <button onClick={goToprofilePage}>Matches</button>
                <h2>astromatch</h2>
                <button onClick={goToMatchListPage}>Lista</button>
            </Bar>
            {renderScreen()}    
        </InicialContainer>
  
    )
}

export default Inicial;
