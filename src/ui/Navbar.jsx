import {
  HiBell,
  HiMiniHome,
  HiMiniPlusCircle,
  HiMiniUser,
} from "react-icons/hi2";
import { Box, ListItem, UnorderedList, Badge } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HiSearch } from "react-icons/hi";
import styled from "styled-components";

const StyledListItem = styled(ListItem)`
  display: flex;
  padding: 1rem;
  cursor: pointer;
  align-items: center;
  border-radius: 0.5rem;
  justify-content: space-between;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: translateY(-10%);
    background-color: var(--color-grey-400);
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
`;

const Span = styled.span`
  padding-left: 0.5rem;
`;

export default function Navbar() {
  return (
    <Box borderRadius={5} bg="var(--color-grey-800)" p="2rem 2rem 0 0">
      <UnorderedList listStyleType="none">
        <StyledListItem mb={4}>
          <StyledNavLink to="/">
            <HiMiniHome /> <Span>Home</Span>
          </StyledNavLink>
          <Badge variant="solid" p={2}>
            New
          </Badge>
        </StyledListItem>

        <StyledListItem mb={4}>
          <StyledNavLink to="/explore">
            <HiSearch /> <Span>Explore</Span>
          </StyledNavLink>
          <Badge variant="solid" p={2}>
            New
          </Badge>
        </StyledListItem>

        <StyledListItem mb={4}>
          <StyledNavLink to="/profile">
            <HiMiniUser /> <Span>Profile</Span>
          </StyledNavLink>
        </StyledListItem>

        <StyledListItem mb={4}>
          <StyledNavLink to="/addPost">
            <HiMiniPlusCircle /> <Span>Add Post</Span>
          </StyledNavLink>
        </StyledListItem>
      </UnorderedList>
    </Box>
  );
}
