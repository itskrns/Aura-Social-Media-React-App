import { Heading } from "@chakra-ui/react";

export default function Header() {
  return (
    <Heading
      p={4}
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="var(--color-grey-800)"
    >
      Aura
    </Heading>
  );
}
