import styled from 'styled-components';
import { colors } from '../../constants/theme';

export const ValuesSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ValuesTitle = styled.h2`
  color: ${colors.accentBackground};

  font-family: Oswald;
  font-weight: 400;
  font-size: 28px;
  line-height: calc(28 / 28);
  text-transform: uppercase;
`;
