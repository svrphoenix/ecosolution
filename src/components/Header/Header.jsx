import { useEffect, useRef, useState } from 'react';

import Menu from '../Menu/Menu';
import Logo from '../common/Logo/Logo';
import InTouchLink from '../InTouchLink/InTouchLink';
import { buttonCaptions } from '../../assets/content/main.json';
import { colors } from '../../constants/theme';
import { BtnWrapper, Navigation, StyledHeader } from './Header.styled';

const Header = () => {
  const [bgColor, setBgColor] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const height = ref.current.getBoundingClientRect().height;
    document.body.style.paddingTop = `${height}px`;

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

  return (
    <StyledHeader ref={ref} $bgColor={bgColor}>
      <Navigation>
        <Logo />
        <BtnWrapper>
          <Menu />
          <InTouchLink caption={buttonCaptions.inTouch} />
        </BtnWrapper>
      </Navigation>
    </StyledHeader>
  );
};

export default Header;
