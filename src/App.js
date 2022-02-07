import React from 'react';
import Score from './components/Score'
import ScoreLogic from './components/Logic/scoreLogic';
import Rules from './components/Rules'

import { ScoreContext } from './contexts/ScoreContext';




function App() {



  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <Score />
      <ScoreLogic />
    </div>
  )
}

export default App;
