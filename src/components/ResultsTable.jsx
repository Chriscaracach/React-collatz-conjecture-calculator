import React from "react";
import {
  Flex,
  Text,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
} from "@chakra-ui/react";

const ResultsTable = ({ steps, intermediateValues, handleReset, number }) => {
  return (
    <Flex spacing={4} direction="column" align="center" m={5}>
      <TableContainer>
        <Table variant="striped" bg="pink">
          <Tbody>
            <Tr>
              <Td>Number</Td>
              <Td>{number}</Td>
            </Tr>
            <Tr>
              <Td>Steps</Td>
              <Td>{steps}</Td>
            </Tr>
            <Tr>
              <Td>Collatz Sequence</Td>
              <Td>
                <Text>{intermediateValues.join()}</Text>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Button onClick={handleReset} m={3} colorScheme="pink">
        Try another number
      </Button>
    </Flex>
  );
};

export default ResultsTable;
