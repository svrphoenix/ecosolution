import { styled } from 'styled-components';
import { colors } from '../../constants/theme';

export const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: #dcefd8;

  &:hover,
  &:focus {
    background-color: ${colors.accentColor};
  }
`;
