import ScrollToMain from '../ScrollToMain/ScrollToMain';
import Logo from '../common/Logo/Logo';
import Socials from '../common/Socials/Socials';
import { Address, Copyright, Email } from '../common/styled/Contact.styled';
import { AdditionWrapper } from '../common/styled/AdditionWrapper.styled';
import {
  BtnWrapper,
  EmailWrapper,
  FooterAdditionWrapper,
  StyledFooter,
  Wrapper,
} from './Footer.styled';
import { contacts, copyright } from '../../assets/content/main.json';
import { colors } from '../../constants/theme';

const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <FooterAdditionWrapper>
          <Logo />
          <BtnWrapper>
            <ScrollToMain />
          </BtnWrapper>
        </FooterAdditionWrapper>
        <AdditionWrapper>
          <Socials gap="8px" mainColor={colors.mainColor} hoverColor={colors.accentColor} />
        </AdditionWrapper>
      </Wrapper>
      <Wrapper $noMargin>
        <AdditionWrapper>
          <Address>{contacts.address.value}</Address>
        </AdditionWrapper>
        <EmailWrapper>
          <Email href={`mailto:${contacts.email.value}`}>{contacts.email.value}</Email>
          <Copyright>{copyright}</Copyright>
        </EmailWrapper>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;
