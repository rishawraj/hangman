import { useCallback, useEffect, useState } from "react";
import { HangmanDrawing } from "./components/HangmanDrawing";
import { HangmanWord } from "./components/HangmanWord";
import { Keyboard } from "./components/Keyboard";
import words from "./wordList.json";

function getWord(): string {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);

  console.log(wordToGuess);

  const [guessedLetter, setGuessedLetters] = useState<string[]>([]);
  // console.log(guessedLetter);

  const inCorrectLetter = guessedLetter.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLooser = inCorrectLetter.length >= 6;
  const isWinner = wordToGuess.split("").every((letter) => {
    console.log(letter);
    return guessedLetter.includes(letter);
  });

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetter.includes(letter) || isLooser || isWinner) return;
      setGuessedLetters((currentLetter) => [...currentLetter, letter]);
    },
    [guessedLetter, isLooser, isWinner]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetter]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  });

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {isWinner ? "Winner! Refresh to try again." : ""}
        {isLooser ? "Looser! Refresh to try again." : ""}
      </div>
      <HangmanDrawing numberOfGuesses={inCorrectLetter.length} />
      <HangmanWord
        reveal={isLooser}
        guessedLetter={guessedLetter}
        wordToGuess={wordToGuess}
      />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isLooser || isWinner}
          activeLetter={guessedLetter.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetter={inCorrectLetter}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
