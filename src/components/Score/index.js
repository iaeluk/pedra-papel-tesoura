import React, { useContext } from 'react';
import { ScoreContext } from '../../contexts/ScoreContext'

import logo from '../../assets/logo.svg';


function Score() {

  const {score} = useContext(ScoreContext)

  return (

  <div className="flex w-[87%] p-3 m-10 mb-[70px] items-center justify-between border border-[#606e85] rounded-md">

      <div className="w-[100px]">
        <img src={logo} />
      </div>

      <div className="w-[90px] py-1 bg-white rounded-md flex flex-col items-center justify-center">
        <h3 className="text-[#2A46C0] font-light">SCORE</h3>
        <h2 className="text-5xl font-extrabold text-[#3B4363]">{score}</h2>
      </div>

    </div>

  )
}

export default Score;
