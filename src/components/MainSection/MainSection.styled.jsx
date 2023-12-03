import styled from 'styled-components';
import { colors } from '../../constants/theme';
import { device } from '../../constants/media';
import { Copyright } from '../common/Contacts/Contact.styled';

export const MainSectionStyled = styled.section`
  padding-top: 110px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${device.tablet} {
    padding-bottom: 70px;
  }
`;

export const MainTitle = styled.h1`
  color: ${colors.accentBackground};

  font-family: Oswald;
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
  align-items: center;
  gap: 24px;

  @media ${device.tablet} {
    padding-left: 10px;
    align-items: flex-start;
    width: 50%;
    justify-content: space-between;
  }

  @media ${device.desktop} {
    width: 40%;
  }
`;

export const ContactsWrapper = styled.div`
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
    padding-left: 10px;
    display: flex;
    justify-content: space-between;
    width: 50%;
  }

  @media ${device.desktop} {
    width: 40%;
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
