import Icon from '../Icon/Icon';
import { LogoLink, LogoMainText, LogoSloganAccented, LogoSloganText } from './Logo.styled';

const Logo = () => {
  return (
    <LogoLink href="/ecosolution/">
      <Icon name={'logo'} width={31} height={18} />
      <LogoMainText>ecosolution</LogoMainText>
      <LogoSloganText>
        <LogoSloganAccented>green</LogoSloganAccented>
        ergy for life
      </LogoSloganText>
    </LogoLink>
  );
};

export default Logo;
