import React, { useState } from "react";
import { Typography, TextField } from "@material-ui/core";
import WordWorkAPI from "../WordWorkAPI";
import { useWordbank } from "../hooks";

export default function Wordbank({ sample }) {
  const [word, setWord] = useState("");
  const [wordbank, setWordbank] = useWordbank();
  const sampleArray = sample.split(" ");

  const writeWord = event => setWord(event.target.value);
  const addToWordBank = async event => {
    event.preventDefault();
    const updatedWordBank = await WordWorkAPI.setWordbank(word);
    setWordbank(updatedWordBank);
  };

  return (
    <div>
      <form onSubmit={addToWordBank}>
        <TextField label="add to wordbank" value={word} onChange={writeWord} />
      </form>
      {wordbank.map(word => (
        <>
          <Typography
            gutterBottom
            display="inline"
            style={{
              textDecoration: sampleArray.includes(word)
                ? "line-through"
                : "none"
            }}
          >
            {word}
          </Typography>
          &nbsp;
        </>
      ))}
    </div>
  );
}
