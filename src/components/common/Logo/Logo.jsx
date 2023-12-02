import Icon from '../Icon/Icon';
import { LogoMainText, LogoSloganAccented, LogoSloganText, LogoWrapper } from './Logo.styled';

const Logo = () => {
  return (
    <LogoWrapper>
      <Icon name={'logo'} width={31} height={18} />
      <LogoMainText>ecosolution</LogoMainText>
      <LogoSloganText>
        <LogoSloganAccented>green</LogoSloganAccented>
        ergy for life
      </LogoSloganText>
    </LogoWrapper>
  );
};

export default Logo;
