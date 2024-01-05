import { useEffect, useRef, useState } from 'react';

import Socials from '../common/Socials/Socials';
import MenuButton from '../MenuButton/MenuButton';
import Icon from '../common/Icon/Icon';
import {
  Backdrop,
  BtnWrapper,
  CloseBtn,
  MenuItemLink,
  MenuList,
  MenuWrapper,
  StyledCloseSvg,
} from './Menu.styled';
import { buttonCaptions } from '../../assets/content/main.json';
import { colors } from '../../constants/theme';
import { sections } from '../../assets/content/main.json';
import { createMenuItems, scrollToElement } from '../../utils';
import { useRefsContext } from '../../hooks/refsContext';
import { useMenuToggle } from '../../hooks/useMenuToggle';

const Menu = () => {
  const [isMenuOpen, onMenuToogle] = useMenuToggle();
  const refs = useRefsContext();
  const menuItems = createMenuItems(sections, refs);
  const [activeItem, setActiveItem] = useState();
  const offset = refs.header.current
    ? parseFloat(refs.header.current.getBoundingClientRect().height)
    : 0;

  useEffect(() => {
    const handleKeyDown = ({ code }) => {
      if (code === 'Escape' && isMenuOpen) {
        onMenuToogle();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen, onMenuToogle]);

  const onBackdropClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onMenuToogle();
    }
  };

  const handleMenuClick = (evt, ref) => {
    evt.preventDefault();
    scrollToElement('ref', ref, offset);
    onMenuToogle();
  };

  const observer = useRef(
    new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = menuItems.findIndex(({ ref }) => ref.current === entry.target);
            if (index !== -1) {
              setActiveItem(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      }
    )
  );

  useEffect(() => {
    const curObserver = observer.current;
    menuItems.forEach(({ ref }) => {
      observer.current.observe(ref.current);
    });

    return () => {
      curObserver.disconnect();
    };
  }, [menuItems]);

  return (
    <div>
      <MenuButton handleMenuOpen={onMenuToogle} isMenuOpen={isMenuOpen} />
      {isMenuOpen && (
        <Backdrop onClick={onBackdropClick}>
          <MenuWrapper>
            <BtnWrapper>
              <CloseBtn type="button" onClick={onMenuToogle}>
                <Icon svgStyled={StyledCloseSvg} name="close" aria-hidden="true" />
                {buttonCaptions.close}
              </CloseBtn>
            </BtnWrapper>
            <MenuList role="menu">
              {menuItems.map(({ ref, menu }, idx) => (
                <li key={idx}>
                  <MenuItemLink
                    href={`#${ref.current.id}`}
                    role="menuitem"
                    $isActive={idx === activeItem}
                    onClick={evt => handleMenuClick(evt, ref)}
                  >
                    {menu}
                    <Icon name="arrow-right-up" aria-hidden="true" />
                  </MenuItemLink>
                </li>
              ))}
            </MenuList>
            <Socials gap="8px" mainColor={colors.whiteColor} hoverColor={colors.accentColor} />
          </MenuWrapper>
        </Backdrop>
      )}
    </div>
  );
};

export default Menu;
