import React from "react";
import { Box } from "@chakra-ui/layout";
import Sidebar from "./Sidebar";

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box
        sx={{
          position: "absolute",
          top: "0",
          width: "250px",
          left: "0",
          border: "1px solid #BADA55",
        }}
      >
        <Sidebar />
      </Box>
      <Box marginLeft="250px" marginBottom="100px" border="1px solid tomato">
        Maincontent
        {children}
      </Box>
      <Box
        position="absolute"
        left="0"
        bottom="0"
        border="1px solid rebeccapurple"
      >
        Player
      </Box>
    </Box>
  );
};

export default PlayerLayout;
