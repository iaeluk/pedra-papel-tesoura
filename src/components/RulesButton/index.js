import React from "react";


function RulesButton() {
  return (
    <div className="m-[50px] border border-[#606e85] rounded-lg  w-[120px] h-[43px] flex items-center justify-center">
      <button
        onClick={() => {
          alert(
            "Papel ganha de pedra. Pedra ganha de tesoura. Tesoura ganha de papel."
          );
        }}
        className="text-gray-300 text-lg"
      >
        REGRAS
      </button>
    </div>
  );
}

export default RulesButton;
