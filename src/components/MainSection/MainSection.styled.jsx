import styled from 'styled-components';
import { colors } from '../../constants/theme';

export const MainSectionStyled = styled.section`
  padding-top: 110px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const MainTitle = styled.h1`
  color: ${colors.accentBackground};

  font-family: Oswald;
  font-weight: 400;
  font-size: 36px;
  line-height: calc(36 / 36);
  text-transform: uppercase;
`;

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

export const MainImgWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
`;

export const Img = styled.img`
  margin: 0 auto;
  width: 100%;
`;
