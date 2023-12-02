import { styled } from 'styled-components';
import { colors } from '../../../constants/theme';

export const ButtonStyled = styled.button`
  margin: 0 auto;
  padding: 4px 4px 4px 16px;
  border: 1px solid ${colors.accentColor};
  border-radius: 500px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  color: ${colors.accentBackground};
  background-color: transparent;

  font-size: 16px;
  letter-spacing: -0.64px;

  & > svg {
    stroke: currentColor;
  }

  &:hover,
  &:focus {
    color: ${colors.accentColor};
    background-color: ${colors.accentBackground};
  }
`;

export const IconWrapper = styled.div`
  padding: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${colors.accentColor};
`;
