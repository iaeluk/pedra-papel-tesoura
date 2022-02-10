import React, { useContext, useEffect } from "react";
import { ScoreContext } from "../../contexts/ScoreContext";
import Result from "../../pages/Result";

import ComputerChoice from "./computerChoice";
import UserChoice from "./userChoice";

function ScoreLogic() {
  const { allChoices, score, setScore, setMensagem } = useContext(ScoreContext);

  useEffect(() => {
    switch (allChoices) {
      case "pedrapedra":
        setMensagem("EMPATE");
        break;
      case "pedrapapel":
        setMensagem("PERDEU");
        setScore(score - 1);
        break;
      case "pedratesoura":
        setMensagem("GANHOU");
        setScore(score + 1);
        break;
      case "papelpedra":
        setMensagem("GANHOU");
        setScore(score + 1);
        break;
      case "papelpapel":
        setMensagem("EMPATE");
        break;
      case "papeltesoura":
        setMensagem("PERDEU");
        setScore(score - 1);
        break;
      case "tesourapedra":
        setMensagem("PERDEU");
        setScore(score - 1);
        break;
      case "tesourapapel":
        setMensagem("GANHOU");
        setScore(score + 1);
        break;
      case "tesouratesoura":
        setMensagem("EMPATE");
        break;
    }
  }, [allChoices]);

  return (
    <>
      {allChoices == "" ? (
        <div className="pb-5 flex flex-col items-center">
          <UserChoice />
          <ComputerChoice />
        </div>
      ) : (
        <Result />
      )}

    </>
  );
}

export default ScoreLogic;
