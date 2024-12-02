import { Box, Stack, Text, Avatar, HStack } from "@chakra-ui/react";

const user = {
  id: "1",
  name: "John Mason",
  email: "john.mason@example.com",
  avatar: "https://i.pravatar.cc/300?u=iu",
  bio: "Sassy Classy with some badassy",
};

export default function UserAvatar() {
  return (
    <Box borderRadius={5} bg="var(--color-grey-800)" p={4}>
      <Stack
        p={4}
        gap={4}
        display="flex"
        key={user.email}
        alignItems="center"
        justifyContent="center"
      >
        <Avatar name={user.name} size="lg" src={user.avatar} />
        <Stack gap="0">
          <Text fontWeight="medium" textAlign="center">
            {user.name}
          </Text>
          <Text color="fg.muted" fontSize="lg" textAlign="center">
            {user.email}
          </Text>
          <Text fontSize="xl" fontStyle="italic" mt={2} textAlign="center">
            {user.bio}
          </Text>
        </Stack>
      </Stack>

      <HStack
        p={4}
        display="flex"
        textAlign="center"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          fontSize="xl"
          flexBasis="50%"
          borderRight="solid 1px var(--color-grey-600)"
        >
          10k
          <br />
          Followers
        </Box>
        <Box fontSize="xl" flexBasis="50%">
          102
          <br />
          Following
        </Box>
      </HStack>
    </Box>
  );
}
