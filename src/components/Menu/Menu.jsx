import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Backdrop, CloseBtn, MenuItemLink, MenuList, MenuWrapper, UnderLine } from './Menu.styled';
import Icon from '../common/Icon/Icon';
import Socials from '../common/Socials/Socials';
import { colors } from '../../constants/theme';
import { sections } from '../../assets/content/main.json';
import { createMenuItems, scrollToElement } from '../../utils';
import { useRefsContext } from '../../hooks/refsContext';

const Menu = ({ handleMenuClose }) => {
  useEffect(() => {
    const handleKeyDown = ({ code }) => {
      if (code === 'Escape') {
        handleMenuClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleMenuClose]);

  const onBackdropClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      handleMenuClose();
    }
  };

  const handleMenuClick = anchor => {
    const offset = parseInt(document.body.style.paddingTop);
    scrollToElement('ref', anchor, offset);
    handleMenuClose();
  };

  const refs = useRefsContext();
  const menuItems = createMenuItems(sections, refs);
  const [activeItem, setActiveItem] = useState();

  const observer = useRef(
    new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = menuItems.findIndex(item => item.ref.current === entry.target);
            if (index !== -1) {
              setActiveItem(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    )
  );

  useEffect(() => {
    const curObserver = observer.current;
    menuItems.forEach(item => {
      observer.current.observe(item.ref.current);
    });

    return () => {
      curObserver.disconnect();
    };
  }, [menuItems]);

  return (
    <Backdrop onClick={onBackdropClick}>
      <MenuWrapper>
        <CloseBtn onClick={handleMenuClose}>
          <Icon name={'close'} width={20} height={20} />
          close
        </CloseBtn>
        <UnderLine />
        <nav>
          <MenuList>
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <MenuItemLink
                  href={`#${item.id}`}
                  $isActive={idx === activeItem}
                  onClick={evt => {
                    evt.preventDefault();
                    handleMenuClick(item.ref);
                  }}
                >
                  {item.menu}
                  <Icon name={'arrow-right-up'} width={16} height={16} />
                </MenuItemLink>
              </li>
            ))}
          </MenuList>
        </nav>
        <Socials gap="8px" mainColor={colors.whiteColor} hoverColor={colors.accentColor} />
      </MenuWrapper>
    </Backdrop>
  );
};

Menu.propTypes = { handleMenuClose: PropTypes.func.isRequired };

export default Menu;
