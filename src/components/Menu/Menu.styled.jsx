import { styled } from 'styled-components';
import { device } from '../../constants/media';
import { colors } from '../../constants/theme';

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  background-color: rgba(23, 61, 51, 0.25);
  backdrop-filter: blur(2px);

  @media ${device.tablet} {
    justify-content: end;
  }
`;

export const MenuWrapper = styled.div`
  width: 310px;
  max-height: 100vh;
  overflow: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;

  background-color: rgba(23, 61, 51, 0.75);
  border-radius: 25px;

  position: absolute;
  top: 20px;
  bottom: 20px;

  @media ${device.tablet} {
    right: 30px;
    top: 42px;
  }

  @media ${device.desktop} {
    right: 100px;
    top: 30px;
  }
`;

export const CloseBtn = styled.button`
  display: flex;
  gap: 4px;

  font-size: 16px;
  letter-spacing: -0.64px;

  color: ${colors.whiteColor};
  & > svg {
    stroke: currentColor;
  }

  &:hover,
  &:focus {
    color: ${colors.accentColor};
  }
`;

export const UnderLine = styled.div`
  margin-top: 6px;
  width: 100%;
  height: 1px;
  background-color: ${colors.whiteColor};
`;

export const MenuList = styled.ul`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MenuItemLink = styled.a`
  display: flex;
  gap: 8px;
  align-items: baseline;

  font-family: Fira Sans;
  font-size: 24px;
  letter-spacing: -0.96px;
  color: ${props => (props.$isActive ? colors.accentColor : '#ffffff3f')};

  & > svg {
    stroke: currentColor;
  }

  &:hover,
  &:focus {
    color: ${colors.whiteColor};
  }
`;
