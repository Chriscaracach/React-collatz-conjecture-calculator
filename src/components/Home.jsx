import React from "react";
import { Box, Text, Heading, UnorderedList, ListItem } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Box
        p={3}
        bg="pink"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
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
          <ListItem>Repeat until the result is 1.</ListItem>
        </UnorderedList>
        <Text fontSize="xl">
          Can you think a number that never will reach 1 as result?
        </Text>
      </Box>
      <Box
        p={3}
        bg="blue.100"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="lg">Don't forget about Javascript limits!</Text>
        <Text>
          If you try a number higher than {Number.MAX_VALUE}, you're on your
          own.
        </Text>
      </Box>
    </>
  );
};

export default Home;
