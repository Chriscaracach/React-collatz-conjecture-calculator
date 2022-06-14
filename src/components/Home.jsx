import React from "react";
import { Box, Text, Heading, UnorderedList, ListItem } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box p={3} bg="pink" display="flex" flexDirection="column">
      <Heading>Collatz's Conjecture</Heading>
      <Text>
        The Collatz conjecture is one of the most famous unsolved problems in
        mathematics.
      </Text>
      <Text>
        Consider the following operation on an arbitrary positive integer:
      </Text>
      <UnorderedList>
        <ListItem>If the number is even, divide it by two.</ListItem>
        <ListItem>If the number is odd, triple and add one.</ListItem>
      </UnorderedList>
    </Box>
  );
};

export default Home;
