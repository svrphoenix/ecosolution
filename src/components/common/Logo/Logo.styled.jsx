import { styled } from 'styled-components';
import { colors } from '../../../constants/theme';

export const LogoLink = styled.a`
  display: inline-flex;
  align-items: center;

  &:hover > .LogoMainText,
  &:focus > .LogoMainText {
    color: ${colors.accentColor};
  }
`;

export const LogoMainText = styled.p`
  margin-left: 4px;
  color: ${colors.mainColor};
  font-family: 'Fontspring';
  font-size: 33px;
  letter-spacing: -1.32px;
`;

export const LogoSloganText = styled.p`
  width: 60px;
  margin-left: 8px;
  color: ${colors.mainColor};
  font-family: 'CA Saygon Text';
  font-size: 10px;
  line-height: 9px;
  letter-spacing: -0.4px;
  text-transform: uppercase;
`;

export const LogoSloganAccented = styled.span`
  color: ${colors.accentColor};
`;
