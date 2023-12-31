import styled from 'styled-components';
import { SectionTitle } from '../../components/common/styled/SectionTitle.styled';
import { colors } from '../../constants/theme';
import { device } from '../../constants/media';

export const ContactsSectionStyled = styled.section`
  padding-top: 110px;

  padding-bottom: 36px;

  @media ${device.tablet} {
    padding-bottom: 100px;
  }

  @media ${device.desktop} {
    padding-bottom: 120px;
  }
`;

export const ContactsTitle = styled(SectionTitle)`
  margin-right: auto;
  margin-left: auto;
  text-align: center;
`;

export const StyledSvg = styled.svg`
  width: 24px;
  height: 24px;
  fill: transparent;
  stroke: ${colors.mainColor};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const Address = styled.address`
  @media ${device.tablet} {
    width: 50%;
  }
`;

export const AddressList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ContactTitle = styled.p`
  margin-bottom: 8px;
  color: ${colors.mainColor};

  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const Contact = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${colors.mainColor};
  font-size: 20px;
  line-height: normal;
  letter-spacing: -0.8px;

  &:hover > svg {
    stroke: ${colors.accentColor};
  }
`;

export const PhoneWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
