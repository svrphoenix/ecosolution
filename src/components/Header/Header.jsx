import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

import Logo from '../common/Logo/Logo';
import { BtnWrapper, StyledHeader } from './Header.styled';
import MenuButton from '../MenuButton/MenuButton';
import InTouchBtn from '../InTouchBtn/InTouchBtn';
import Icon from '../common/Icon/Icon';
import { colors } from '../../constants/theme';
import { ScrollToElement } from '../../utils';
import useMenuToggle from '../../hooks/useMenuToggle';
import Menu from '../Menu/Menu';

const Header = ({ refs }) => {
  const [bgColor, setBgColor] = useState(false);
  const [isMenuOpen, onMenuToogle] = useMenuToggle();
  const ref = useRef();

  useEffect(() => {
    const height = ref.current.getBoundingClientRect().height;
    document.body.style.paddingTop = `${height}px`;

    const handleWindowScroll = () => {
      if (window.scrollY > 0) {
        setBgColor('rgba(255,255,255,.7)');
      } else {
        setBgColor('#f3f5fa');
      }
    };
    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  return (
    <>
      <StyledHeader ref={ref} style={{ backgroundColor: bgColor }}>
        <Logo />
        <BtnWrapper>
          <MenuButton handleMenuOpen={onMenuToogle} />
          <InTouchBtn
            handleClick={() => ScrollToElement('ref', refs)}
            caption="Get in touch"
            icon={
              <Icon name={'arrow-down'} width={14} height={14} fill={colors.accentBackground} />
            }
          />
        </BtnWrapper>
      </StyledHeader>
      {isMenuOpen && <Menu handleMenuClose={onMenuToogle} />}
    </>
  );
};

Header.propTypes = {
  refs: PropTypes.any,
};

export default Header;
