import { ADDRESS, EMAIL } from '../../constants/content';
import { colors } from '../../constants/theme';
// import ScrollToTop from '../ScrollToMain/ScrollToMain';
import { Address, Copyright, Email } from '../common/styled/Contact.styled';
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
import ScrollToMain from '../ScrollToMain/ScrollToMain';

const Footer = () => {
  return (
    <StyledFooter>
      <UnderLine />
      <Wrapper>
        <AdditionWrapper>
          <Logo />
          <BtnWrapper>
            <ScrollToMain />
          </BtnWrapper>
        </AdditionWrapper>
        <Socials gap="8px" mainColor={colors.mainColor} hoverColor={colors.accentColor} />
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
