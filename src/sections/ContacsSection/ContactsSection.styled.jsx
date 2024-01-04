import styled from 'styled-components';

import { SectionStyled } from '../../components/common/styled/Section.styled';
import { DefaultSvg } from '../../components/common/Icon/Icon.styled';
import { SectionTitle } from '../../components/common/styled/SectionTitle.styled';
import { colors, effects } from '../../constants/theme';
import { device } from '../../constants/media';

export const ContactsSectionStyled = styled(SectionStyled)`
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
  margin-bottom: 24px;
  text-align: center;

  @media ${device.tablet} {
    margin-bottom: 40px;
  }

  @media ${device.desktop} {
    margin-bottom: 120px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${device.tablet} {
    flex-direction: row;
  }

  @media ${device.desktop} {
    gap: 48px;
  }
`;

export const Address = styled.address`
  width: 100%;
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
`;

export const StyledSvg = styled(DefaultSvg)`
  width: 24px;
  height: 24px;
  transition: ${effects.hoverStrokeTransition};

  ${Contact}:hover &,
  ${Contact}:focus & {
    stroke: ${colors.accentColor};
  }
`;

export const PhoneWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
