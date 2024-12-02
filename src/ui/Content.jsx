import { Box, Grid } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function Content() {
  return (
    <Grid gridTemplateRows="100vh">
      <Box
        borderRadius={5}
        overflowY="scroll"
        css={{ "::-webkit-scrollbar": { display: "none" } }}
      >
        <Outlet />
      </Box>
    </Grid>
  );
}
