import React from "react";
import { Flex, Text, Box, Input, Button } from "@chakra-ui/react";

const CollatzNumberInput = ({ solveCollatzGuess, handleCollatzNumber }) => {
  return (
    <Flex direction="column" align="center" bg="pink.100">
      <Text m={5}>Let's try the Collatz's Conjecture</Text>
      <Box>
        <Input
          onChange={(e) => handleCollatzNumber(e)}
          placeholder="Enter a number"
          size="sm"
          type="number"
          onKeyDown={(e) => e.key === "e" && e.preventDefault()}
          bg="pink.300"
          color="black"
          borderRadius="7px"
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
