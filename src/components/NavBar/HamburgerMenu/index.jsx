import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { MenuToggle } from './menuToggle';
import { Countries } from '../Countries/Countries';
import { Pages } from '../Pages/Pages';
import { SocilaMedia } from '../SocilaMedia/SocialMedias';

const HamburgerMenuContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  ${tw`
        font-family["ZCOOL KuaiLe"]
        font-black
        text-2xl
        text-black
        pr-10
    `};
`;

const MenuContainer = styled(motion.div)`
  min-width: 300px;
  width: 100%;
  max-width: 100%;
  height: 100%;
  background-color: #000;
  box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
  z-index: 90;
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(4em);
  user-select: none;
  padding: 1em 2.5em;
`;

const TopContainer = styled.div`
  display: flex;
  width: 100%;
`;

const DeptLogo = styled(motion.button)`
  border: 0;
  background: transparent;
  color: #fff;
  font-size: 35px;
  font-weight: 900;
  transition: all 250ms ease-in-out;
  display: flex;
  cursor: pointer;
  padding: 5px 12px;

  &:hover {
    color: #666;
  }

  &:focus {
    outline: none;
  }

  &:not(:last-of-type) {
    border-right: 1px solid #b4b4b4;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

const menuVariants = {
  open: {
    transform: 'translateX(0.001%)',
  },
  closed: {
    transform: 'translateX(103%)',
  },
};

const menuTransition = {
  type: 'spring',
  duration: 1,
  stiffness: 33,
  delay: 0.1,
};

const commonVariants = {
  show: {
    transform: 'translateX(0em)',
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.01,
    },
  },
  hide: {
    transform: 'translateX(5em)',
    opacity: 0,
  },
};

const commonTransition = { type: 'spring', duration: 0.05 };

export function HamburgerMenu(props) {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <HamburgerMenuContainer>
      <Content> MENUE</Content>
      <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      <MenuContainer
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        transition={menuTransition}
      >
        <TopContainer>
          <DeptLogo
            initial={false}
            animate={isOpen ? 'show' : 'hide'}
            variants={commonVariants}
            transition={commonTransition}
          >
            DEPT
          </DeptLogo>
        </TopContainer>

        <ContentContainer>
          <Countries />
          <Pages />
          <SocilaMedia />
        </ContentContainer>
      </MenuContainer>
    </HamburgerMenuContainer>
  );
}
