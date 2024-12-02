import { Box, Grid } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import AddPost from "../features/home/AddPost";

export default function Content() {
  return (
    <Grid gridTemplateRows="100px 100vh">
      <AddPost />

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
