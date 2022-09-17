import { useEffect, useState, useRef } from "react";
import Card, { ICardProps } from "./components/Card";

import { CardWrapper, Page, AppHeader, TextInput } from "./App.style";
import React from "react";

type alphabetType = string[];

function App() {
  const [text, setText] = useState("");
  const [alphabet, setAlphabet] = useState([]);
  const speechInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    speechInput.current?.focus();
    const alpha: number[] = Array.from(Array(26)).map((e, i) => i + 65);
    const createdAlphabet: any = alpha.map((x) => String.fromCharCode(x))
    setAlphabet(createdAlphabet);
  }, []);
    
  const speechHandler = (tts: string) => {
    const msg = new SpeechSynthesisUtterance()
    msg.text = tts
    window.speechSynthesis.speak(msg)
  }

  const handleChange = (e: any) => {
    setText((e.target as HTMLInputElement).value.replace(/[^a-z]/gi, '')); 
  }

  useEffect(() => {
    speechHandler(text);
  }, [text])

  return (
    <Page>
      <AppHeader>
        <h1>React Text to Speech App</h1>
        <TextInput
          ref={speechInput}
          type='text'
          value={text.toUpperCase()}
          placeholder='Enter Text'
          onChange={(e) =>handleChange(e)}
          onKeyUp={(e) => (e.target as HTMLInputElement).select()}
        />
      </AppHeader>
      <CardWrapper>
        {alphabet.map((letter, idx) => (
          console.log(letter),
          <Card key={idx} letter={letter} active={letter === text} />
        ))}
      </CardWrapper>
    </Page>
  );
}

export default App;
