import { useEffect, useRef, useState } from 'react';
import Logo from '../common/Logo/Logo';
import { BtnWrapper, StyledHeader } from './Header.styled';
import MenuButton from '../MenuButton/MenuButton';
// import Menu from '../Menu/Menu';
import InTouchBtn from '../InTouchBtn/InTouchBtn';
import Icon from '../common/Icon/Icon';
import { colors } from '../../constants/theme';

const Header = ({ contactUs, handleMenuOpen }) => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bgColor, setBgColor] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const height = ref.current.getBoundingClientRect().height;
    document.body.style.paddingTop = `${height}px`;
    const handleWindowScroll = () => {
      if (window.scrollY > 0) {
        setBgColor('#fff');
      } else {
        setBgColor('#f3f5fa');
      }
    };
    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  // const handleMenuToogle = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  const handleClick = () => {
    contactUs.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <StyledHeader ref={ref} style={{ backgroundColor: bgColor }}>
        <Logo />
        <BtnWrapper>
          <MenuButton handleMenuOpen={handleMenuOpen} />
          <InTouchBtn
            handleClick={handleClick}
            caption="Get in touch"
            icon={
              <Icon name={'arrow-down'} width={14} height={14} fill={colors.accentBackground} />
            }
          />
        </BtnWrapper>
      </StyledHeader>
      {/* {isMenuOpen && <Menu handleMenuClose={handleMenuToogle} />} */}
    </>
  );
};

export default Header;
