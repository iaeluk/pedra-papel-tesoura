import Rules from "../RulesButton";
import ChosenModel from "../ChosenModel";

import iconPaper from "../../assets/icon-paper.svg";
import iconRock from "../../assets/icon-rock.svg";
import iconScissors from "../../assets/icon-scissors.svg";

function UserChoice() {

  return (
    <div className={`flex flex-col items-center space-y-44`}>

      <div className={`flex flex-col items-center space-y-8 bg-img`}>
        <div className="flex space-x-16">
          <ChosenModel chosen="papel" bgColor="from-[#4865f4] to-[#5671f5]" icon={iconPaper} />
          <ChosenModel chosen="tesoura" bgColor="from-[#ec9e0e] to-[#eca922]" icon={iconScissors}/>
        </div>

        <ChosenModel chosen="pedra" bgColor="from-[#dc2e4e] to-[#dd405d]" icon={iconRock} />
      </div>
      
      <Rules />
    </div>
  );
}

export default UserChoice;
