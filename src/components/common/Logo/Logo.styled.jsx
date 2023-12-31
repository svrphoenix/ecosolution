import { styled } from 'styled-components';

import { colors, fonts, effects } from '../../../constants/theme';

export const LogoLink = styled.a`
  display: inline-flex;
  align-items: center;
`;

export const StyledSvg = styled.svg`
  width: 18px;
  height: 18px;
`;

export const LogoMainText = styled.p`
  transition: ${effects.hoverColorTransition};
  margin-left: 4px;
  color: ${colors.mainColor};
  font-family: ${fonts.logoMain};
  font-size: 33px;
  letter-spacing: -1.32px;

  ${LogoLink}:hover &,
  ${LogoLink}:focus & {
    color: ${colors.accentColor};
  }
`;

export const LogoSloganText = styled.p`
  width: 60px;
  margin-left: 8px;
  color: ${colors.mainColor};
  font-family: ${fonts.logoAdd};
  font-size: 10px;
  line-height: calc(9 / 10);
  letter-spacing: -0.4px;
  text-transform: uppercase;
`;

export const LogoSloganAccented = styled.span`
  color: ${colors.accentColor};
`;
