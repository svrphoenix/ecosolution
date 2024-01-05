import PropTypes from 'prop-types';
import { forwardRef, useEffect, useState } from 'react';

import Menu from '../Menu/Menu';
import Logo from '../common/Logo/Logo';
import InTouchLink from '../InTouchLink/InTouchLink';
import { buttonCaptions } from '../../assets/content/main.json';
import { BtnWrapper, Navigation, StyledHeader } from './Header.styled';
import { colors } from '../../constants/theme';

const Header = forwardRef(function CasesSection(props, ref) {
  const [bgColor, setBgColor] = useState(colors.bodyBackground);
  const [vertPadding, setVertPadding] = useState('36px');

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 0) {
        setBgColor(colors.whiteColor);
      } else {
        setBgColor(colors.bodyBackground);
      }
    };
    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setVertPadding('24px');
      } else {
        setVertPadding('36px');
      }
    };
    props.action();
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [props, vertPadding]);

  return (
    <StyledHeader ref={ref} $bgColor={bgColor}>
      <Navigation $vertPadding={vertPadding}>
        <Logo />
        <BtnWrapper>
          <Menu />
          <InTouchLink caption={buttonCaptions.inTouch} mobileVisible={false} />
        </BtnWrapper>
      </Navigation>
    </StyledHeader>
  );
});

Header.propTypes = {
  action: PropTypes.func.isRequired,
};

export default Header;
