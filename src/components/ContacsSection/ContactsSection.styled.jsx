import styled from 'styled-components';
import { SectionTitle } from '../common/SectionTitle/SectionTitle.styled';
import { colors } from '../../constants/theme';

export const ContactsSectionStyled = styled.section`
  padding-bottom: 36px;
`;

export const ContactsTitle = styled(SectionTitle)`
  text-align: center;
`;

export const AddressWrapper = styled.address`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ContactTitle = styled.p`
  margin-bottom: 8px;
  color: ${colors.accentBackground};

  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const PhoneWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Contact = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${colors.accentBackground};
  font-size: 20px;
  line-height: normal;
  letter-spacing: -0.8px;

  &:hover {
    color: ${colors.accentColor};
  }
`;
