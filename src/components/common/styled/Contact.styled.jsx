import styled, { css } from 'styled-components';

import { colors } from '../../../constants/theme';

const textStyles = css`
  color: ${colors.mainColor};
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
