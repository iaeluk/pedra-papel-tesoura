import React, { useContext, useEffect } from "react";

import { ScoreContext } from "../../contexts/ScoreContext";
import ChosenModel from "../../components/ChosenModel";

import RulesButton from "../../components/RulesButton";

import iconPaper from "../../assets/icon-paper.svg";
import iconRock from "../../assets/icon-rock.svg";
import iconScissors from "../../assets/icon-scissors.svg";

function Result() {
  const {
    setUserChoice,
    setComputerChoice,
    setAllChoices,
    choices,
    mensagem,
    setMensagem,
  } = useContext(ScoreContext);

  const newGame = () => {
    setUserChoice("");
    setComputerChoice("");
    setAllChoices("");
    setMensagem("");
  };

  let userIcon = "";
  let userBgColor = "";

  let computerIcon = "";
  let computerBgColor = "";

  switch (choices[0]) {
    case "pedra":
      userIcon = iconRock;
      userBgColor = "from-[#dc2e4e] to-[#dd405d]";
      break;
    case "papel":
      userIcon = iconPaper;
      userBgColor = "from-[#4865f4] to-[#5671f5]";
      break;
    case "tesoura":
      userIcon = iconScissors;
      userBgColor = "from-[#ec9e0e] to-[#eca922]";
  }

  switch (choices[1]) {
    case "pedra":
      computerIcon = iconRock;
      computerBgColor = "from-[#dc2e4e] to-[#dd405d]";
      break;
    case "papel":
      computerIcon = iconPaper;
      computerBgColor = "from-[#4865f4] to-[#5671f5]";
      break;
    case "tesoura":
      computerIcon = iconScissors;
      computerBgColor = "from-[#ec9e0e] to-[#eca922]";
  }

  return (
    <div className="flex flex-col items-center space-y-[79px]">
      <div className="text-white flex flex-col items-center space-y-20">
        <div className="flex space-x-16">
          <div className="flex flex-col items-center">
            <ChosenModel bgColor={userBgColor} icon={userIcon} />
            <p className="font-semibold">YOU PICKED</p>
          </div>

          <div className="flex flex-col items-center">
          <ChosenModel bgColor={computerBgColor} icon={computerIcon} />
            <p className="font-semibold">THE HOUSE PICKED</p>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-5">
          <h1 className="font-bold text-7xl">{mensagem}</h1>

          <button
            className=" w-[200px] rounded-md text-lg py-4 bg-white font-medium text-[#3b4363] hover:text-red-500 tracking-widest"
            onClick={() => {
              newGame();
            }}
          >
            PLAY AGAIN
          </button>
        </div>
      </div>

      <RulesButton />
    </div>
  );
}

export default Result;
