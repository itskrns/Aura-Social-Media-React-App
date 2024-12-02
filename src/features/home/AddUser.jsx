import { Box, HStack, Stack, Text, Avatar, Button } from "@chakra-ui/react";
import { HiUserAdd } from "react-icons/hi";

const users = [
  {
    id: "1",
    name: "John Mason",
    username: "@johnmason",
    avatar: "https://i.pravatar.cc/300?u=iu",
  },
  {
    id: "2",
    name: "Melissa Jones",
    username: "@melissa.jones",
    avatar: "https://i.pravatar.cc/300?u=po",
  },
  {
    id: "3",
    name: "John Mason",
    username: "@johnmason",
    avatar: "https://i.pravatar.cc/300?u=iu",
  },
  {
    id: "4",
    name: "Melissa Jones",
    username: "@melissa.jones",
    avatar: "https://i.pravatar.cc/300?u=po",
  },
  {
    id: "5",
    name: "John Mason",
    username: "@johnmason",
    avatar: "https://i.pravatar.cc/300?u=iu",
  },
  {
    id: "6",
    name: "Melissa Jones",
    username: "@melissa.jones",
    avatar: "https://i.pravatar.cc/300?u=po",
  },
];

export default function AddUser() {
  return (
    <Box borderRadius={5} bg="var(--color-grey-800)" p={4}>
      <Stack gap="8">
        {users.slice(0, 5).map((user) => (
          <HStack
            key={user.email}
            gap="4"
            display="flex"
            justifyContent="space-between"
          >
            <Avatar name={user.name} size="lg" src={user.avatar} />
            <Stack gap="0">
              <Text fontWeight="medium">{user.name}</Text>
              <Text color="var(--color-grey-400)" fontSize="lg">
                {user.username}
              </Text>
            </Stack>
            <Button
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <HiUserAdd /> Add
            </Button>
          </HStack>
        ))}
      </Stack>
    </Box>
  );
}
