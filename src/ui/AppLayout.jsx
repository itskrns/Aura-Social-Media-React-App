import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Content from "./Content";

export default function AppLayout() {
  return (
    <Grid
      height="100vh"
      color="#fff"
      overflow="hidden"
      templateRows="50px 1fr"
      bg="var(--color-grey-700)"
      templateColumns="300px 1fr 250px"
      templateAreas={`"header header header" "leftbar content rightbar"`}
    >
      <GridItem area="header">
        <Header />
      </GridItem>

      <GridItem area="leftbar" h="100vh">
        <LeftSidebar />
      </GridItem>

      <GridItem area="content">
        <Content />
      </GridItem>

      <GridItem area="rightbar" h="100vh">
        <RightSidebar />
      </GridItem>
    </Grid>
  );
}
