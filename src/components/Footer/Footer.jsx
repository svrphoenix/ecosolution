import { ADDRESS, EMAIL } from '../../constants/content';
import { colors } from '../../constants/theme';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import { Address, Copyright, Email } from '../common/Contacts/Contact.styled';
import Logo from '../common/Logo/Logo';
import Socials from '../common/Socials/Socials';
import { UnderLine } from '../common/Underline/Underline.styled';
import { BtnWrapper, StyledFooter } from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <UnderLine />
      <BtnWrapper>
        <Logo />
        <ScrollToTop />
      </BtnWrapper>
      <Socials gap="8px" mainColor={colors.accentBackground} />
      <Address>{ADDRESS}</Address>
      <Email href={`mailto:${EMAIL}`}>{EMAIL}</Email>
      <Copyright>ecosolution © 2023</Copyright>
    </StyledFooter>
  );
};

export default Footer;
