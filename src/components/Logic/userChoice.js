 import { useContext } from "react"
 import { ScoreContext } from '../../contexts/ScoreContext'
 import Rules from "../Rules";

 import iconPaper from '../../assets/icon-paper.svg';
 import iconRock from '../../assets/icon-rock.svg';
 import iconScissors from '../../assets/icon-scissors.svg';



 function UserChoice () {

    const {setUserChoice} = useContext(ScoreContext)
     
     return (
         <div className={`flex flex-col items-center space-y-44`}>
      <div className={`flex flex-col items-center space-y-8`}>
    
        <div className="flex space-x-16">
        <div 
        onClick={() => {setUserChoice('papel')}}
        className="bg-blue-500 w-[130px] h-[130px] rounded-full flex items-center justify-center cursor-pointer">
            <div className="bg-white w-[100px] h-[100px] rounded-full flex items-center justify-center">
            <img src={iconPaper}/>

            </div>
        </div>

        
        <div 
        onClick={() => {setUserChoice('tesoura')}}
        className="bg-yellow-500 w-[130px] h-[130px] rounded-full flex items-center justify-center cursor-pointer">
            <div className="bg-white w-[100px] h-[100px] rounded-full flex items-center justify-center">
            <img src={iconScissors}/>

            </div>
        </div>
        </div>

        <div 
        onClick={() => {setUserChoice('pedra')}}
        className=" bg-red-600 w-[130px] h-[130px] rounded-full flex items-center justify-center cursor-pointer">
            <div className="bg-white w-[100px] h-[100px] rounded-full flex items-center justify-center">
            <img src={iconRock}/>

            </div>
        </div>

      </div>

      <Rules />

      </div>
     )
 }
 
 export default UserChoice;
 