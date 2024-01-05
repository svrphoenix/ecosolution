import styled from 'styled-components';

import { Copyright } from '../../components/common/styled/Contact.styled';
import { Text } from '../../components/common/styled/Text.styled';
import { colors, fonts } from '../../constants/theme';
import { device } from '../../constants/media';

export const MainSectionStyled = styled.section`
  padding-top: 110px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${device.tablet} {
    padding-top: 128px;
  }

  @media ${device.desktop} {
    padding-top: 176px;
  }
`;

export const MainTitle = styled.h1`
  color: ${colors.mainColor};

  font-family: ${fonts.title}, sans-serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 1;
  text-transform: uppercase;

  @media ${device.mobile} {
    width: 320px;
  }

  @media ${device.tablet} {
    width: 290px;
    font-size: 48px;
  }

  @media ${device.desktop} {
    width: 490px;
    font-size: 64px;
  }
`;

export const MainText = styled(Text)`
  @media ${device.desktop} {
    padding-right: 96px;
    text-align: justify;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const AdditionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${device.tablet} {
    flex-basis: 50%;
    align-items: flex-start;
    justify-content: space-between;
  }

  @media ${device.desktop} {
    flex-basis: 40%;
  }
`;

export const ContactsWrapper = styled.div`
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    margin-bottom: 24px;
    background-color: ${colors.accentColor};
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const EmailWrapper = styled.div`
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    gap: 24px;
  }
`;

export const CopyrightMain = styled(Copyright)`
  display: none;

  @media ${device.tablet} {
    display: flex;
  }
`;

export const MainImgWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
`;

export const Img = styled.img`
  margin: 0 auto;
  width: 100%;
`;

export const BtnWrapper = styled.div`
  margin: 0 auto;

  @media ${device.tablet} {
    margin: 0;
  }
`;
