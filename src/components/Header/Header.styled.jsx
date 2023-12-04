import { styled } from 'styled-components';
import { device } from '../../constants/media';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 36px;
  padding-bottom: 36px;
  gap: 11px;

  width: 100%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  @media ${device.tablet} {
    width: 708px;
  }

  @media ${device.desktop} {
    width: 1080px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 12px;
`;
