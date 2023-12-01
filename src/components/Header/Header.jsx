import { useState } from 'react';
import Logo from '../common/Logo/Logo';
import { BtnWrapper, StyledHeader } from './Header.styled';
import MenuButton from '../MenuButton/MenuButton';
import Menu from '../Menu/Menu';
import InTouchBtn from '../InTouchBtn/InTouchBtn';
import { Icon } from '../common/Icon/Icon';
import { colors } from '../../constants/theme';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToogle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <StyledHeader>
        <Logo />
        <BtnWrapper>
          <MenuButton handleMenuOpen={handleMenuToogle} />
          <InTouchBtn
            caption="Get in touch"
            icon={
              <Icon name={'arrow-down'} width={14} height={14} fill={colors.accentBackground} />
            }
          />
        </BtnWrapper>
      </StyledHeader>
      {isMenuOpen && <Menu handleMenuClose={handleMenuToogle} />}
    </>
  );
};

export default Header;
