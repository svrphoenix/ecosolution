import styled from 'styled-components';
import { colors } from '../../../constants/theme';
import { device } from '../../../constants/media';

export const SectionTitle = styled.h2`
  margin-bottom: 24px;
  color: ${colors.mainColor};

  font-family: Oswald;
  font-weight: 400;
  font-size: 28px;
  line-height: 1;
  text-transform: uppercase;

  @media ${device.mobile} {
    width: 320px;
  }

  @media ${device.tablet} {
    font-size: 36px;
  }

  @media ${device.desktop} {
    font-size: 48px;
    width: 398px;
  }
`;
