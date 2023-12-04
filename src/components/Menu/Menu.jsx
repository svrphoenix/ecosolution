import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Backdrop, CloseBtn, MenuItemLink, MenuList, MenuWrapper, UnderLine } from './Menu.styled';
import Icon from '../common/Icon/Icon';
import { MENU_ITEMS } from '../../constants/content';
import Socials from '../common/Socials/Socials';
import { colors } from '../../constants/theme';
import { ScrollToElement } from '../../utils';

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
    ScrollToElement('id', anchor);
    handleMenuClose();
  };

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
            {MENU_ITEMS.map(item => (
              <li key={item.id}>
                <MenuItemLink onClick={() => handleMenuClick(item.anchor)}>
                  {item.value}
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
