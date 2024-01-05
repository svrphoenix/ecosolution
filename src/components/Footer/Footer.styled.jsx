import { styled } from 'styled-components';
import { device } from '../../constants/media';
import { colors } from '../../constants/theme';
// import { Address } from '../common/styled/Contact.styled';
import { AdditionWrapper } from '../common/styled/AdditionWrapper.styled';

export const StyledFooter = styled.footer`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px 24px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* gap: 24px; */

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${colors.accentColor};
    margin-bottom: 24px;

    @media ${device.tablet} {
      margin-bottom: 40px;
    }
    @media ${device.desktop} {
      margin-bottom: 44px;
    }
  }

  @media ${device.mobile} {
    max-width: 480px;
  }

  @media ${device.tablet} {
    max-width: 768px;
    padding: 0 30px 40px 30px;
    /* gap: 40px; */
  }

  @media ${device.desktop} {
    max-width: 1280px;
    padding: 0 20px 40px 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  position: relative;
  margin-bottom: 24px;

  @media ${device.tablet} {
    flex-direction: row;
    margin-bottom: ${props => props.$noMargin && '0'};
  }
`;

export const FooterAdditionWrapper = styled(AdditionWrapper)`
  height: 100%;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const BtnWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  @media ${device.tablet} {
    position: absolute;
    right: 0;
  }
`;

export const EmailWrapper = styled(AdditionWrapper)`
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
  gap: 16px;
  text-align: center;
  /* flex-basis: 50%; */

  @media ${device.tablet} {
    flex-direction: row;
    /* justify-content: flex-start; */
    /* justify-content: space-between; */
  }
`;
