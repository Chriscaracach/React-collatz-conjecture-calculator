import React from "react";
import {
  Flex,
  Text,
  TableContainer,
  Table,
  Tr,
  Tbody,
  Td,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const ResultsTable = ({ steps, intermediateValues, handleReset, number }) => {
  let intermediateValuesMap = intermediateValues.map((item, i) => {
    return (
      <GridItem w="20%" h="10" key={i}>
        <Text>{item}</Text>
      </GridItem>
    );
  });
  return (
    <Flex spacing={4} direction="column" align="center" m={5}>
      <TableContainer borderRadius="10px">
        <Table variant="simple" bg="pink.200">
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
                <Grid templateColumns="repeat(10, 1fr)" gap={3}>
                  {intermediateValuesMap}
                </Grid>
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
