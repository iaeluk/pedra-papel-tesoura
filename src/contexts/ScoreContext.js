import { createContext, useState } from "react";

import ComputerChoice from "../components/Logic/computerChoice";

export const ScoreContext = createContext();

export default function ScoreContextProvider({ children }) {
  const [score, setScore] = useState(0);

  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [allChoices, setAllChoices] = useState("");
  const [mensagem, setMensagem] = useState("");

  const [choices, setChoices] = useState([]);

  return (
    <ScoreContext.Provider
      value={{
        choices,
        setChoices,
        score,
        setScore,
        ComputerChoice,
        allChoices,
        setAllChoices,
        computerChoice,
        setComputerChoice,
        userChoice,
        setUserChoice,
        mensagem,
        setMensagem,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
}
