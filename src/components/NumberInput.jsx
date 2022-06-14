import React from "react";
import { Flex, Text, Box, Input, Button } from "@chakra-ui/react";

const CollatzNumberInput = ({ solveCollatzGuess, handleCollatzNumber }) => {
  return (
    <Flex direction="column" align="center" m={5}>
      <Text m={2}>Let's try the Collatz's Conjecture</Text>
      <Box>
        <Input
          // value={collatzNumber}
          onChange={(e) => handleCollatzNumber(e)}
          placeholder="Enter a number"
          size="sm"
        />
      </Box>
      <Box m={3}>
        <Button colorScheme="pink" onClick={solveCollatzGuess}>
          Collatz!
        </Button>
      </Box>
    </Flex>
  );
};

export default CollatzNumberInput;
