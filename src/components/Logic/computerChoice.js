import { useContext, useEffect } from "react";
import { ScoreContext } from "../../contexts/ScoreContext";

function ComputerChoice() {
  const {
    computerChoice,
    setComputerChoice,
    userChoice,
    setAllChoices,
    setChoices,
  } = useContext(ScoreContext);

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  useEffect(() => {
    const number = randomIntFromInterval(1, 3);

    switch (number) {
      case 1:
        setComputerChoice("pedra");
        break;
      case 2:
        setComputerChoice("papel");
        break;

      case 3:
        setComputerChoice("tesoura");
        break;
    }

    setAllChoices(userChoice + computerChoice);
    setChoices([userChoice, computerChoice]);
  }, [userChoice]);

  return <></>;
}

export default ComputerChoice;
