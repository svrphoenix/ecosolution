import styled from 'styled-components';
import { colors } from '../../../constants/theme';

const textStyles = `
  color: ${colors.accentBackground};
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;
`;
export const Address = styled.address`
  ${textStyles}
`;

export const Email = styled.a`
  ${textStyles}
`;

export const Copyright = styled.p`
  ${textStyles}
`;
