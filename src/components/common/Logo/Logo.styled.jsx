import { styled } from 'styled-components';
import { colors } from '../../../constants/theme';

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LogoMainText = styled.p`
  margin-left: 4px;
  color: ${colors.accentBackground};
  font-family: 'Fontspring';
  font-size: 33px;
  line-height: normal;
  letter-spacing: -1.32px;
  &:hover {
    color: ${colors.accentColor};
  }
`;

export const LogoSloganText = styled.p`
  width: 60px;
  margin-left: 8px;
  color: ${colors.accentBackground};
  font-family: 'CA Saygon Text';
  font-size: 10px;
  line-height: 9px;
  letter-spacing: -0.4px;
  text-transform: uppercase;
`;

export const LogoSloganAccented = styled.span`
  color: ${colors.accentColor};
`;
