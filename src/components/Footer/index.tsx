import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'react-scroll';
import { SiFacebook, SiInstagram, SiTwitter } from 'react-icons/si';

const FooterContainer = tw.div`
    w-full
    h-96
    bg-black
    mt-10
    flex
    pt-6
    pl-2
    pr-2
    lg:pt-14
    lg:pr-16
    lg:pl-16
    text-white
    items-center
    flex-col
`;

const Wrapper = tw.div`
    flex
    flex-col
    w-full
    h-full
    justify-center
    max-w-6xl
    lg:max-w-7xl
`;

const TopSection = tw.div`
    flex
    w-full
    justify-center
    lg:justify-start
    pl-4
    pr-4
    pb-8
    pt-10
    
`;

const RightInnerContainer = tw.div`
    flex
    flex-col
    lg:justify-end
    lg:flex-row
    flex[1]
    w-full
    h-full
    mb-5
    lg:mb-0
    flex-wrap
`;

const MiddleInnerContainer = tw.div`
    flex
    flex-col
    lg:justify-center
    lg:flex-row
    flex[5]
    w-full
    h-full
    mb-5
    lg:mb-0
    flex-wrap
`;

const Menu = tw.ul`
    flex
    flex-col
    flex-wrap
    lg:flex-row
    lg:justify-center
    list-none
    mr-3
    lg:ml-5
    lg:mr-16
    
`;

const MenuItem = tw.li`
    flex
    text-white
    font-size[large]
    font-bold
    lg:text-base
    mt-2
    pl-2
    ml-3
`;

const BottomSection = tw.div`
    w-full
    flex
    flex-wrap
    lg:flex-row
    items-center
    justify-between
    pt-16
    lg:pt-9
    pl-4
    pr-4
    h-full
    bottom-5
    border-t
    border-t-gray-300
    border-opacity-50
`;

const LogoContainer = styled.div`
  ${tw`
        font-family["ZCOOL KuaiLe"]
        font-black
        text-white
        text-2xl
        
    `};
`;

const Copyright = tw.span`
font-size[large]
    text-gray-300
    w-full
    lg:w-auto
    text-center
`;

const SmallText = tw.span`
    font-size[large]
    text-gray-300
`;

const SocialMedia = tw.div`
    flex
    justify-center
`;

const Icon = tw.span`
    h-6
    flex
    mr-4
    cursor-pointer
    transition-colors
    hover:text-gray-300
`;

export function Footer() {
  return (
    <FooterContainer>
      <Wrapper>
        <TopSection>
          <LogoContainer> DEPT</LogoContainer>

          <MiddleInnerContainer>
            <Menu>
              <MenuItem>
                <Link to='Work'>WORK</Link>
              </MenuItem>
              <MenuItem>
                <Link to='Service'>SERVICE</Link>
              </MenuItem>
              <MenuItem>
                <Link to='Stories'>STORIES</Link>
              </MenuItem>
              <MenuItem>
                <Link to='About'>ABOUT</Link>
              </MenuItem>
              <MenuItem>
                <Link to='Careers'>CAREERS</Link>
              </MenuItem>
              <MenuItem>
                <Link to='Contact'>CONTACT</Link>
              </MenuItem>
            </Menu>
          </MiddleInnerContainer>
          <RightInnerContainer>
            <SocialMedia>
              <Icon>
                <SiFacebook size={25} />
              </Icon>
              <Icon>
                <SiInstagram size={25} />
              </Icon>
              <Icon>
                <SiTwitter size={25} />
              </Icon>
            </SocialMedia>
          </RightInnerContainer>
        </TopSection>
        <BottomSection>
          <SmallText>
            <p>Chamber of Commerce: 63464101</p>
          </SmallText>
          <SmallText>
            <p>VAT: NL 8552.47.502.B01</p>
          </SmallText>
          <SmallText>
            <Link to='#'>Terms and conditions</Link>
          </SmallText>
          <Copyright>© {new Date().getFullYear()} Dept Agency</Copyright>
        </BottomSection>
      </Wrapper>
    </FooterContainer>
  );
}
