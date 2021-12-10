import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import tw from 'twin.macro';
import { NavBar } from '../NavBar/index';
import BackgroundImage from '../../images/thumbnails/Header.jpg';
import { BsArrowDownCircle } from 'react-icons/bs';

const TopSectionContainer = styled.div`
  ${tw`
        w-full
        flex
        flex-col
        h-screen
        relative
    `};
`;

const LandingSection = styled.div`
  ${tw`
        w-full
        h-screen
        flex
        flex-col
    `};

  background-image: url(${BackgroundImage}),
    linear-gradient(to left, #666869, #b1d1b148);

  background-size: cover;
  background-position: bottom 70% left;
  background-blend-mode: overlay;
`;

const InfoSection = styled.div`
  ${tw`
        absolute
        top[150px]
        left-12
        lg:top[150px]
        lg:right-10
        lg:right-auto
        2xl:right-60
        2xl:top[240px]
        2xl:right-auto
    `};
`;

const FloatingText = styled.h1`
  ${tw`
        m-0
        font-black
        text-black
        font-size[120px]
        line-height[90px]
        lg:font-size[230px]
        lg:line-height[160px]
        2xl:font-size[360px]
        2xl:line-height[225px]
        font-family["Archivo Narrow"]
        flex
        items-center
    `};
`;

const OutlinedTextSvg = styled.svg`
  font: bold 100px Century 'Archivo Narrow', Arial;
  ${tw`
        width[550px]
        height[100px]
        lg:width[580px]
        lg:height[110px]
        2xl:width[550px]
        2xl:height[110px]
        flex
    `};
  overflow: overlay;

  text {
    max-height: 100%;
    flex: 1;
    fill: none;
    stroke: Black;
    stroke-width: 2px;
    stroke-linejoin: round;
    z-index: 99;
    ${tw`
      2xl:transform[translateY(113px)]
      lg:transform[translateY(97px)]
      transform[translateY(71px)]
    `};
    text-shadow: 0px 0px 0px rgba(255, 255, 255, 0.5);
  }
`;

const ViewCase = styled.button`
  ${tw`
        absolute
        bg-black
        border-black
        font-normal
        top-3/4
        right-1/4
        -translate-x-1/2
        text-white
        py-2
        px-4
        rounded
        items-center
        text-2xl
        duration-200
        hover:text-gray-400
    `};
`;
const ViewMoreButton = styled.button`
  ${tw`
        absolute
        bottom-4
        left-1/2
        -translate-x-1/2
        text-white
        text-4xl
        transition-colors
        duration-200
        hover:text-blue-400
    `};
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <LandingSection>
        <NavBar />
        <InfoSection>
          <FloatingText>WORK</FloatingText>
        </InfoSection>
        <ViewCase>VIEW CASE</ViewCase>
        <ViewMoreButton>
          <Link to='Cases' smooth={'easeInOutQuad'} duration={1500}>
            <BsArrowDownCircle />
          </Link>
        </ViewMoreButton>
      </LandingSection>
    </TopSectionContainer>
  );
}
