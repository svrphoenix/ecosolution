import { styled } from 'styled-components';
import { device } from '../../constants/media';
import { colors } from '../../constants/theme';

export const InTouchBtnStyled = styled.button`
  margin: 0 auto;
  display: none;

  @media ${device.tablet} {
    padding: 10px 16px;
    border-radius: 500px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    color: ${colors.accentBackground};
    background-color: ${colors.accentColor};

    font-size: 16px;
    letter-spacing: -0.64px;

    & > svg {
      stroke: currentColor;
    }

    &:hover {
      color: ${colors.accentColor};
      background-color: ${colors.accentBackground};
    }

    &:hover > svg {
      fill: ${colors.accentColor};
      stroke: ${colors.accentBackground};
    }
  }
`;
