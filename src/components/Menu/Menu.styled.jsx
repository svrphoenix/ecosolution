import { styled } from 'styled-components';
import { device } from '../../constants/media';
import { colors } from '../../constants/theme';
import { DefaultSvg } from '../common/Icon/Icon.styled';

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

  background-color: ${colors.backdropColor};
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

  background-color: ${colors.menuColor};
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

export const BtnWrapper = styled.div`
  margin-bottom: 24px;
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${colors.whiteColor};
  }
`;

export const CloseBtn = styled.button`
  margin-bottom: 8px;
  display: inline-flex;
  gap: 4px;

  font-size: 16px;
  letter-spacing: -0.64px;

  color: ${colors.whiteColor};

  &:hover,
  &:focus {
    color: ${colors.accentColor};
  }
`;

export const StyledCloseSvg = styled(DefaultSvg)`
  width: 20px;
  height: 20px;
`;

export const MenuList = styled.ul`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MenuItemLink = styled.a`
  display: inline-flex;
  gap: 8px;
  align-items: baseline;

  font-size: 24px;
  letter-spacing: -0.96px;
  color: ${props => (props.$isActive ? colors.accentColor : colors.menuLinkColor)};

  &:hover,
  &:focus {
    color: ${colors.whiteColor};
  }
`;

