import { styled } from 'styled-components';
import { device } from '../../constants/media';

export const StyledHeader = styled.header`
  width: 100%;
  margin: 0 auto;

  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.$bgColor};
  transition: background-color 0.5s;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${props => `${props.$vertPadding} 20px`};
  gap: 11px;

  width: 100%;
  margin: 0 auto;

  @media ${device.mobile} {
    max-width: 480px;
  }

  @media ${device.tablet} {
    max-width: 768px;
    padding: ${props => `${props.$vertPadding} 30px`};
  }

  @media ${device.desktop} {
    max-width: 1280px;
    padding: ${props => `${props.$vertPadding} 20px`};
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 12px;
`;
