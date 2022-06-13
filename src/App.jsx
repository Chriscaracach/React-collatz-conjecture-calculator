import { useState } from "react";
import "./App.css";
import {
  Container,
  Text,
  Input,
  Button,
  HStack,
  Flex,
  Box,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { collatzMethod } from "./utils/collatzMethod";

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
      {isSolved ? (
        <Flex spacing={4} direction="column" align="center">
          <TableContainer>
            <Table variant="simple">
              <TableCaption>Collatz's Conjecture results</TableCaption>
              <Thead>
                <Tr>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Steps</Td>
                  <Td>{steps}</Td>
                </Tr>
                <Tr>
                  <Td>Collatz Sequence</Td>
                  <Td>
                    <Text noOfLines={[1, 2, 3]}>
                      {intermediateValues.join()}
                    </Text>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Button onClick={handleReset}>Try another number</Button>
        </Flex>
      ) : (
        <Flex direction="column" align="center">
          <Text>Enter a number</Text>
          <Box>
            <Input
              value={collatzNumber}
              onChange={(e) => handleCollatzNumber(e)}
              placeholder="Ingresá un número"
              size="sm"
            />
          </Box>
          <Box>
            <Button colorScheme="teal" onClick={solveCollatzGuess}>
              Collatz!
            </Button>
          </Box>
        </Flex>
      )}
    </Container>
  );
}

export default App;
