import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from '../Logo';
import { HamburgerMenu } from './HamburgerMenu/index';
import { Link } from 'react-scroll';

const Container = styled.div`
  width: 90%;
  ${tw`
        flex
        h-20
        pl-6
        pr-6
        pt-4
        border-b
        border-black
        items-center
        self-center
    `};
`;

const NavbarContainer = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 0 1.5em;
`;

export function NavBar() {
  return (
    <Container>
      <Logo />
      <NavbarContainer>
        <HamburgerMenu />
      </NavbarContainer>
    </Container>
  );
}
