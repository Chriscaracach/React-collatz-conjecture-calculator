import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const LimitMessage = () => {
  return (
    <Alert status="warning">
      <AlertIcon />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>You're close to Javascript limits!</AlertDescription>
    </Alert>
  );
};

export default LimitMessage;
