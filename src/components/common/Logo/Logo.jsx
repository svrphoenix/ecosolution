import Icon from '../Icon/Icon';
import {
  LogoLink,
  LogoMainText,
  LogoSloganAccented,
  LogoSloganText,
  StyledSvg,
} from './Logo.styled';

const Logo = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <LogoLink href={base} role="navigation" aria-label="logo">
      <Icon svgStyled={StyledSvg} name="logo" />
      <LogoMainText>ecosolution</LogoMainText>
      <LogoSloganText>
        <LogoSloganAccented>green</LogoSloganAccented>
        ergy for life
      </LogoSloganText>
    </LogoLink>
  );
};

export default Logo;
