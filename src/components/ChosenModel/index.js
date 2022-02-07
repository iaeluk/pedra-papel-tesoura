import React, {useContext} from 'react';
import { ScoreContext } from '../../contexts/ScoreContext';

function ChosenModel({chosen, bgColor, icon}) {

  const {setUserChoice} = useContext(ScoreContext)

 return (
   <>
   <div
          onClick={() => {
            setUserChoice(chosen);
          }}
          className={`bg-gradient-to-r ${bgColor} w-[130px] h-[130px] rounded-full flex items-center justify-center cursor-pointer`}
        >
          <div className={`bg-white w-[100px] h-[100px] rounded-full flex items-center justify-center`}>
            <img src={icon} />
          </div>
        </div>
   </>
 )
}

export default ChosenModel;
