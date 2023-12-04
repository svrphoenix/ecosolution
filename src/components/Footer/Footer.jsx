import { ADDRESS, EMAIL } from '../../constants/content';
import { colors } from '../../constants/theme';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import { Address, Copyright, Email } from '../common/Contacts/Contact.styled';
import Logo from '../common/Logo/Logo';
import Socials from '../common/Socials/Socials';
import { UnderLine } from '../common/Underline/Underline.styled';
import {
  AdditionWrapper,
  AddressWrapper,
  BtnWrapper,
  StyledFooter,
  Wrapper,
} from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <UnderLine />
      <Wrapper>
        <AdditionWrapper>
          <Logo />
          <BtnWrapper>
            <ScrollToTop />
          </BtnWrapper>
        </AdditionWrapper>
        <Socials gap="8px" mainColor={colors.accentBackground} hoverColor={colors.accentColor} />
      </Wrapper>
      <Wrapper>
        <AddressWrapper>
          <Address>{ADDRESS}</Address>
        </AddressWrapper>
        <Email href={`mailto:${EMAIL}`}>{EMAIL}</Email>
        <Copyright>ecosolution © 2023</Copyright>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;
