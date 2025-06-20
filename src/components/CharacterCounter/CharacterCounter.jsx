import { useState } from "react";
import StatsDisplay from "../StatsDisplay/StatsDisplay";
import TextInput from "../TextInput/TextInput";

function calculateStats(inputText) {
  const trimmed = inputText.trim();
  const words = trimmed === "" ? [] : trimmed.split(/\s+/);
  const wordCount = words.length;
  const characterCount = inputText.length;
  const readingTime = wordCount / 200;

  return { characterCount, wordCount, readingTime };
}

function CharacterCounter() {
  const [text, setText] = useState("");

  const stats = calculateStats(text);

  const handleTextChange = (newText) => {
    setText(newText);
  };

  return (
    <div>
      <h1>Character Counter</h1>

      <TextInput
        placeholder="Start typing here..."
        onTextChange={handleTextChange}
      />

      <StatsDisplay stats={stats} showReadingTime={true} />
    </div>
  );
}


export default CharacterCounter;
