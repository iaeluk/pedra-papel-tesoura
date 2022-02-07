import React, {useContext, useEffect} from 'react';
import { ScoreContext } from '../../contexts/ScoreContext';
import Result from '../Result';
import ComputerChoice from './computerChoice';
import UserChoice from './userChoice';



function ScoreLogic() {

  const {choices, allChoices, setAllChoices, score, setScore, mensagem, setMensagem, setUserChoice, setComputerChoice} = useContext(ScoreContext)

  useEffect(() => {

    switch(allChoices) {
      case 'pedrapedra':
        setMensagem('DRAW')
      break;
      case 'pedrapapel':
        setMensagem('YOU LOSE')
        break;
      case 'pedratesoura':
        setMensagem('YOU WIN')
        setScore(score + 1)
      break;
      case 'papelpedra':
        setMensagem('YOU WIN')
        setScore(score + 1)
      break;
      case 'papelpapel':
        setMensagem('DRAW')
      break;
      case 'papeltesoura':
        setMensagem('YOU LOSE')
      break;
      case 'tesourapedra':
        setMensagem('YOU LOSE')
      break;
      case 'tesourapapel':
        setMensagem('YOU WIN')
        setScore(score +1)
      break;
      case 'tesouratesoura':
        setMensagem('DRAW')
      break;
    }

  }, [allChoices])


  return (
      <>
    {allChoices == '' ? <div className="pb-5 flex flex-col items-center">
        <UserChoice />
        <ComputerChoice />
      </div> : <Result /> }
    </>
  );
}

export default ScoreLogic;
