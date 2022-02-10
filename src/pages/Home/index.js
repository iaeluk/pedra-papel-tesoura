import React from 'react';
import Score from "../../components/Score";
import ScoreLogic from "../../components/Logic/scoreLogic";

function Home() {
  return (
    <div className=" h-[700px] w-full flex flex-col items-center">
      <Score />
      <ScoreLogic />
    </div>
  )
}

export default Home;
