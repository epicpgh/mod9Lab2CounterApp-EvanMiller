import { useState } from "react";



import CharacterCounter from "./components/CharacterCounter/CharacterCounter";
import TextInput from "./components/TextInput/TextInput";
import StatsDisplay from "./components/StatsDisplay/StatsDisplay";


import "./App.css";


function App() {
  const [text, setText] = useState("");
  
  
    return (

      <>
        <h1>Character Counter App</h1>
    <CharacterCounter />
    <h2 />
    <StatsDisplay />
    <h3 />
    
    
  
   </>
    )
 
}

export default App;
