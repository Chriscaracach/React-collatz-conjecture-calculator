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
      <AlertDescription>
        Check if the number you're trying to analize is correct. (Text is not
        allowed)
      </AlertDescription>
    </Alert>
  );
};

export default InputError;
