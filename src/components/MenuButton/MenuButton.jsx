import PropTypes from 'prop-types';

import { StyledButton } from './MenuButton.styled';

const MenuButton = ({ handleMenuOpen, isMenuOpen }) => {
  return (
    <StyledButton
      onClick={handleMenuOpen}
      aria-expanded={isMenuOpen}
      aria-label="menu-button"
      iconSettings={{ name: 'menu' }}
    />
  );
};

MenuButton.propTypes = {
  handleMenuOpen: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

export default MenuButton;
