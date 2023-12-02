import PropTypes from 'prop-types';
import Icon from '../common/Icon/Icon';
import { StyledButton } from './MenuButton.styled';

const MenuButton = ({ handleMenuOpen }) => {
  return (
    <StyledButton onClick={handleMenuOpen}>
      <Icon name={'menu'} width={16} height={16} stroke={'#292D32'} />
    </StyledButton>
  );
};

MenuButton.propTypes = {
  handleMenuOpen: PropTypes.func.isRequired,
};

export default MenuButton;
