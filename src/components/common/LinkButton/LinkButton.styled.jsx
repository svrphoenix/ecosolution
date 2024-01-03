import { css, styled } from 'styled-components';
import { colors, effects } from '../../../constants/theme';

const shared = css`
  /* display: inline-flex; */
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  gap: 12px;
  border-radius: 500px;

  color: ${colors.mainColor};
  border: 1px solid transparent;

  font-size: 16px;
  letter-spacing: -0.64px;

  transition: ${effects.hoverBackgroundTransition}, ${effects.hoverColorTransition},
    ${effects.hoverBorderTransition};

  &:hover,
  &:focus {
    color: ${colors.accentColor};
    background-color: ${colors.mainColor};
  }
`;

export const LinkStyled = styled.a`
  ${shared};
`;

export const ButtonStyled = styled.button`
  ${shared};
`;

export const DefaultIconContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
