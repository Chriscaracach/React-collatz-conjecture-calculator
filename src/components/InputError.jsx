import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const InputError = () => {
  return (
    <Alert status="error" variant="solid">
      <AlertIcon />
      <AlertTitle>Something went wrong!</AlertTitle>
      <AlertDescription>You must enter a number.</AlertDescription>
    </Alert>
  );
};

export default InputError;
