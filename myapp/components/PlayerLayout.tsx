import React from "react";
import { Box } from "@chakra-ui/layout";

const PlayerLayout = ({ children }) => {
  return (
    <Box>
      <h1>Layout</h1>
      {children}
    </Box>
  );
};

export default PlayerLayout;
