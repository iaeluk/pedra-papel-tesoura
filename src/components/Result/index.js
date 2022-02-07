import React, { useContext } from 'react';

import { ScoreContext } from '../../contexts/ScoreContext';
import Rules from '../Rules';


import iconPaper from '../../assets/icon-paper.svg';
import iconRock from '../../assets/icon-rock.svg';
import iconScissors from '../../assets/icon-scissors.svg';
import { useEffect } from 'react/cjs/react.development';




function Result() {

  const {userChoice, setUserChoice, computerChoice, setComputerChoice, setAllChoices, allChoices, choices, mensagem, setMensagem} = useContext(ScoreContext)

  const newGame = () => {
    setUserChoice('')
    setComputerChoice('')
    setAllChoices('')
    setMensagem('')
  }


  let userIcon = ''
  let userBgColor = ''


  let computerIcon = ''
  let computerBgColor = ''

  switch(choices[0]) {

    case 'pedra':
      userIcon = iconRock
      userBgColor = 'bg-red-600'
      break;
    case 'papel':
      userIcon = iconPaper
      userBgColor = 'bg-blue-500'
      break;
    case 'tesoura':
      userIcon = iconScissors
      userBgColor = 'bg-yellow-500'
  }

  

  switch(choices[1]) {

    case 'pedra':
      computerIcon = iconRock
      computerBgColor = 'bg-red-600'
      break;
    case 'papel':
      computerIcon = iconPaper
      computerBgColor = 'bg-blue-500'
      break;
    case 'tesoura':
      computerIcon = iconScissors
      computerBgColor = 'bg-yellow-500'
  }





  return (

    <div className="flex flex-col items-center space-y-[79px]">

    <div className="text-white flex flex-col items-center space-y-20">


      <div className="flex space-x-16">


       <div className="flex flex-col items-center">
       <div 
        className={`${userBgColor} mb-3 w-[130px] h-[130px] rounded-full flex items-center justify-center cursor-pointer`}>
            <div className="bg-white w-[100px] h-[100px] rounded-full flex items-center justify-center">
            <img src={userIcon}/>
            </div>   
        </div>
       <p className="font-semibold">YOU PICKED</p>
       </div>
        

      <div className="flex flex-col items-center">
        <div className={`${computerBgColor} mb-3 w-[130px] h-[130px] rounded-full flex items-center justify-center cursor-pointer`}>
            <div className="bg-white w-[100px] h-[100px] rounded-full flex items-center justify-center">
            <img src={computerIcon}/>
            </div>
        </div>
        <p className="font-semibold">THE HOUSE PICKED</p>
        </div>


        </div>


        <div className="flex flex-col items-center space-y-5">

          <h1 className="font-bold text-7xl">{mensagem}</h1>

          <button className=" w-[200px] rounded-md text-lg py-4 bg-white font-medium text-[#3b4363] hover:text-red-500 tracking-widest" onClick={() => {newGame()}}>PLAY AGAIN</button>
        </div>

        

        

  </div>

  <Rules />

  </div>
  )
}

export default Result;
