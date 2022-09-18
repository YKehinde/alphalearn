import { useEffect, useState, useRef } from "react";
import Card from "./components/Card";

import { CardWrapper, Page, AppHeader, TextInput, Title } from "./App.style";
import React from "react";

type alphabetType = string[];

function App() {
  const [text, setText] = useState("");
  const [alphabet, setAlphabet] = useState([] as alphabetType);
  const speechInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    speechInput.current?.focus();
    const alpha: number[] = Array.from(Array(26)).map((e, i) => i + 65);
    setAlphabet(alpha.map((x) => String.fromCharCode(x)));
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
        <Title>React Text to Speech App</Title>
        <TextInput
          ref={speechInput}
          type='text'
          value={text.toUpperCase()}
          placeholder='Enter Text'
          onChange={(e) =>handleChange(e)}
          onKeyUp={(e) => (e.target as HTMLInputElement).select()}
          maxLength={1}
          onBlur={() => speechInput.current?.focus()}
        />
      </AppHeader>
      <CardWrapper>
        {alphabet.map((letter, idx) => (
          <Card key={idx} letter={letter} active={letter === text.toUpperCase()} />
        ))}
      </CardWrapper>
    </Page>
  );
}

export default App;
