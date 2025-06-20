import { useState } from "react";
import StatsDisplay from "../StatsDisplay/StatsDisplay";
import TextInput from "../TextInput/TextInput";

function CharacterCounter() {
  const [text, setText] = useState("");
  const charachterCount = inputText.length;

  const calculateStats = (inputText) => {
    // Calculate character count

    const wordsArray =
      newText.trim() === "" ? 0 : newText.trim().split(/\s+/).length;
    const wordCount = wordsArray.length;
  };

  const stats = calculateStats(text);

  const handleTextChange = (newText) => {
    setText(newText);

    const calculateStats = (inputText) => {
      // Calculate character count

      const wordsArray =
        newText.trim() === "" ? 0 : newText.trim().split(/\s+/).length;
      const wordCount = wordsArray.length;

      return { wordsArray, wordCount };
    };
  };
  return (
    <div>
      <h1>Character Counter</h1>

      <StatsDisplay stats={stats} />

      <TextInput
        placeholder="Start typing here..."
        onTextChange={handleTextChange}
      />
    </div>
  );
}

export default CharacterCounter;
