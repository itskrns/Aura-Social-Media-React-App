import { Box, Input } from "@chakra-ui/react";

export default function Search() {
  return (
    <Box borderRadius={5} bg="var(--color-grey-800)" p={4}>
      <Input
        placeholder="Search"
        variant="flushed"
        fontSize="xl"
        _focus={{ outline: "none" }}
      />
    </Box>
  );
}
