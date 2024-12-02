import { Grid } from "@chakra-ui/react";
import Search from "./Search";
import AddUser from "../features/home/AddUser";

export default function RightSidebar() {
  return (
    <Grid gap={4} p={4}>
      <Search />
      <AddUser />
    </Grid>
  );
}
