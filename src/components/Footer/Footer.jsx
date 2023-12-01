import { colors } from '../../constants/theme';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Logo from '../common/Logo/Logo';
import Socials from '../common/Socials/Socials';
import { Address, BtnWrapper, Copyright, Email, StyledFooter, UnderLine } from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <UnderLine />
      <BtnWrapper>
        <Logo />
        <ScrollToTop />
      </BtnWrapper>
      <Socials gap="8px" mainColor={colors.accentBackground} />
      <Address>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</Address>
      <Email href="mailto:office@ecosolution.com">office@ecosolution.com</Email>
      <Copyright>ecosolution © 2023</Copyright>
    </StyledFooter>
  );
};

export default Footer;
