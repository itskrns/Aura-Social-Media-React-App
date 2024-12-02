import { Grid } from "@chakra-ui/react";
import UserAvatar from "./UserAvatar";
import Navbar from "./Navbar";

export default function LeftSidebar() {
  return (
    <Grid gap={4} p={4}>
      <UserAvatar />
      <Navbar />
    </Grid>
  );
}
