import { HiPencilSquare, HiShare } from "react-icons/hi2";
import { HiThumbUp } from "react-icons/hi";
import styled from "styled-components";

import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  HStack,
  Center,
  CircularProgress,
  Box,
} from "@chakra-ui/react";

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
`;
const Span = styled.span`
  padding-left: 0.5rem;
`;

const posts = [
  {
    id: "1",
    username: "johnmason",
    src: "template1.png",
    avatar: "https://i.pravatar.cc/300?u=po",
    caption:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste ad aliquam rem, eveniet vel dolor.",
  },
  {
    id: "2",
    username: "melissa.jones",
    src: "template2.jpg",
    avatar: "https://i.pravatar.cc/300?u=po",
    caption:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste ad aliquam rem, eveniet vel dolor.",
  },
  {
    id: "3",
    username: "johnmason",
    src: "template1.png",
    avatar: "https://i.pravatar.cc/300?u=po",
    caption:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste ad aliquam rem, eveniet vel dolor.",
  },
];

export default function Cards() {
  return (
    <>
      {posts.map((post) => (
        <Card
          m="2rem 4rem"
          p={4}
          as="card"
          bg="var(--color-grey-800)"
          color="#fff"
        >
          <HStack p={4} gap="4" display="flex" alignItems="center">
            <Avatar name="Segun Adebayo" src={post.avatar} />
            <Heading size="md">{post.username}</Heading>
          </HStack>

          <Divider />

          <CardBody>
            <Center>
              <Image
                src={post.src}
                alt={post.caption}
                borderRadius="md"
                objectFit="cover"
                boxSize="80%"
              />
            </Center>
          </CardBody>

          <Divider />

          <CardFooter flexDirection="column" gap={2}>
            <Text fontSize="xl">{post.caption}</Text>

            <ButtonGroup spacing="2">
              <StyledButton variant="ghost" colorScheme="white">
                <HiThumbUp /> <Span>Like</Span>
              </StyledButton>
              <StyledButton variant="ghost" colorScheme="white">
                <HiPencilSquare /> <Span>Comment</Span>
              </StyledButton>
              <StyledButton variant="ghost" colorScheme="white">
                <HiShare /> <Span>Share</Span>
              </StyledButton>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}

      <Box height="200px">
        <Center>
          <CircularProgress isIndeterminate color="white" />
        </Center>
      </Box>
    </>
  );
}
