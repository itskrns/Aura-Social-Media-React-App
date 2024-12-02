export default function Main() {
  return (
    <Grid
      gap={4}
      h="100vh"
      p="0 20px 0px"
      overflowY="scroll"
      gridTemplateColumns="1fr"
      css={{ "::-webkit-scrollbar": { display: "none" } }}
    >
      <GridItem>
        <AddPost />
      </GridItem>

      <GridItem
        p="10px 40px"
        rowGap={4}
        display="flex"
        flexDirection="column"
        borderRadius={5}
        alignItems="start"
        justifyContent="center"
        bg="var(--color-grey-500)"
      >
        <Heading>Feeds</Heading>
        <Outlet />
      </GridItem>
    </Grid>
  );
}
