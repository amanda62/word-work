import React, { useState } from "react";
import "./App.css";
import { Typography, TextField, AppBar, Container } from "@material-ui/core";
import Wordbank from "./components/Wordbank";
import { useWordbank } from "./hooks";

function App() {
  const [sample, setSample] = useState("");
  const sampleArray = sample.split(" ");
  const [wordbank] = useWordbank();

  const writeSample = event => setSample(event.target.value);

  return (
    <div className="App">
      <AppBar position="static">Word Work</AppBar>
      <Container maxWidth="md">
        <Wordbank sample={sample} />
        <div>
          {sampleArray.map(word => (
            <Typography
              display="inline"
              style={{ fontWeight: wordbank.includes(word) ? "bold" : "none" }}
            >
              {word}{" "}
            </Typography>
          ))}
        </div>

        <TextField
          fullWidth
          margin="normal"
          multiline
          label="type below"
          onChange={writeSample}
        />
      </Container>
    </div>
  );
}

export default App;
