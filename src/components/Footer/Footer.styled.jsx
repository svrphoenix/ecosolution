import { styled } from 'styled-components';
import { device } from '../../constants/media';

export const StyledFooter = styled.footer`
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const AdditionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media ${device.tablet} {
    width: 50%;
  }
`;

export const BtnWrapper = styled.div`
  @media ${device.tablet} {
    position: absolute;
    right: 0;
    top: 24px;
  }
`;

export const AddressWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media ${device.tablet} {
    justify-content: flex-start;
    width: 50%;
  }
`;
