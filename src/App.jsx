import { useState } from "react";
import "./App.css";
import { Container, Text, Input, Button, Flex, Box } from "@chakra-ui/react";
import { collatzMethod } from "./utils/collatzMethod";
import ResultsTable from "./components/ResultsTable";
import CollatzNumberInput from "./components/NumberInput";
import Home from "./components/Home";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import InputError from "./components/InputError";
import LimitMessage from "./components/LimitMessage";

function App() {
  const [isSolved, setIsSolved] = useState(false);
  const [collatzNumber, setCollatzNumber] = useState(0);
  const [steps, setSteps] = useState(0);
  const [intermediateValues, setIntermediateValues] = useState([]);
  const [inputError, setInputError] = useState(false);
  const [limitWarning, setLimitWarning] = useState(false);

  const handleCollatzNumber = (e) => {
    setCollatzNumber(e.target.value);
    if (!parseInt(collatzNumber)) {
      setInputError(true);
    } else {
      setInputError(false);
    }
    if (collatzNumber > Number.MAX_VALUE - 1000000) {
      setLimitWarning(true);
    } else {
      setLimitWarning(false);
    }
  };

  const solveCollatzGuess = () => {
    let results = collatzMethod(collatzNumber);
    setSteps(results.step);
    setIntermediateValues(results.intermediateValues);
    setIsSolved(true);
  };

  const handleReset = () => {
    setIsSolved(false);
    setCollatzNumber(0);
    setIntermediateValues([]);
    setSteps(0);
  };

  return (
    <Container className="App" maxW="70vw">
      <Home />
      {isSolved ? (
        <ResultsTable
          steps={steps}
          intermediateValues={intermediateValues}
          handleReset={handleReset}
          number={collatzNumber}
        />
      ) : (
        <CollatzNumberInput
          solveCollatzGuess={solveCollatzGuess}
          handleCollatzNumber={handleCollatzNumber}
        />
      )}
      {limitWarning && <LimitMessage />}
      {inputError && <InputError />}
    </Container>
  );
}

export default App;
