import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Logo from '../common/Logo/Logo';
import { StyledFooter } from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <Logo />
      <ScrollToTop />
    </StyledFooter>
  );
};

export default Footer;
