import { useState } from "react";
import "./App.css";
import { Container, Text, Input, Button, Flex, Box } from "@chakra-ui/react";
import { collatzMethod } from "./utils/collatzMethod";
import ResultsTable from "./components/ResultsTable";
import CollatzNumberInput from "./components/NumberInput";
import Home from "./components/Home";

function App() {
  const [isSolved, setIsSolved] = useState(false);
  const [collatzNumber, setCollatzNumber] = useState(0);
  const [steps, setSteps] = useState(0);
  const [intermediateValues, setIntermediateValues] = useState([]);

  const handleCollatzNumber = (e) => {
    setCollatzNumber(e.target.value);
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
    <Container className="App">
      <Home></Home>
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
    </Container>
  );
}

export default App;
