import styled from 'styled-components';
import { colors } from '../../constants/theme';

export const ScrollToTopBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;

  background-color: ${colors.accentColor};

  &:focus,
  &:hover {
    background-color: ${colors.mainColor};
  }

  &:hover > svg,
  &:focus > svg {
    stroke: ${colors.accentColor};
  }
`;
