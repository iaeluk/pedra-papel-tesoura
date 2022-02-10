import React from "react";
import Home from './pages/Home'
import RulesButton from './components/RulesButton';

function App() {
  return (
    <div className="h-screen flex flex-col items-center">
    <Home />
    <RulesButton />
    </div>

  );
}

export default App;
