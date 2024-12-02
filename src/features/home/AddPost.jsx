import {
  Box,
  Avatar,
  HStack,
  defineStyle,
  Text,
  Stack,
} from "@chakra-ui/react";

const users = [
  {
    id: "1",
    username: "@johnmason",
    avatar: "https://i.pravatar.cc/300?u=iu",
  },
  {
    id: "2",
    username: "@melissa.jones",
    avatar: "https://i.pravatar.cc/300?u=po",
  },
  {
    id: "3",
    username: "@johnmason",
    avatar: "https://i.pravatar.cc/300?u=iu",
  },
  {
    id: "4",
    username: "@johnmason",
    avatar: "https://i.pravatar.cc/300?u=iu",
  },
  {
    id: "5",
    username: "@melissa.jones",
    avatar: "https://i.pravatar.cc/300?u=po",
  },
  {
    id: "6",
    username: "@johnmason",
    avatar: "https://i.pravatar.cc/300?u=iu",
  },
  {
    id: "7",
    username: "@johnmason",
    avatar: "https://i.pravatar.cc/300?u=iu",
  },
  {
    id: "8",
    username: "@johnmason",
    avatar: "https://i.pravatar.cc/300?u=iu",
  },
  {
    id: "9",
    username: "@melissa.jones",
    avatar: "https://i.pravatar.cc/300?u=po",
  },
  {
    id: "10",
    username: "@johnmason",
    avatar: "https://i.pravatar.cc/300?u=iu",
  },
  {
    id: "11",
    username: "@johnmason",
    avatar: "https://i.pravatar.cc/300?u=iu",
  },
  {
    id: "12",
    username: "@johnmason",
    avatar: "https://i.pravatar.cc/300?u=iu",
  },
  {
    id: "13",
    username: "@melissa.jones",
    avatar: "https://i.pravatar.cc/300?u=po",
  },
  {
    id: "14",
    username: "@johnmason",
    avatar: "https://i.pravatar.cc/300?u=iu",
  },
  {
    id: "15",
    username: "@melissa.jones",
    avatar: "https://i.pravatar.cc/300?u=po",
  },
  {
    id: "16",
    username: "@johnmason",
    avatar: "https://i.pravatar.cc/300?u=iu",
  },
];

const ringCss = defineStyle({
  outlineWidth: "2px",
  outlineColor: "colorPalette.200",
  outlineOffset: "2px",
  outlineStyle: "solid",
});

export default function AddPost() {
  return (
    <Box
      p="1rem"
      cursor="pointer"
      overflowY="scroll"
      css={{
        "::-webkit-scrollbar": { display: "none" },
      }}
    >
      <HStack gap="6">
        {users.map((user) => (
          <Stack
            gap={2}
            transition="all 0.3s ease-in-out"
            _hover={{ transform: "scale(1.05)" }}
          >
            <Avatar
              name={user.username.slice(1)}
              size="xl"
              colorPalette="pink"
              src={user.avatar}
              css={ringCss}
            />
            <Text fontSize="sm" textAlign="center">
              {user.username.slice(1)}
            </Text>
          </Stack>
        ))}
      </HStack>
    </Box>
  );
}
