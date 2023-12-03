import PropTypes from 'prop-types';
import { ButtonStyled, IconWrapper } from './Button.styled';

const Button = ({ handleClick, type = 'button', caption, icon: Icon }) => {
  return (
    <ButtonStyled type={type} onClick={handleClick}>
      {caption}
      <IconWrapper>{Icon}</IconWrapper>
    </ButtonStyled>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
  type: PropTypes.string,
  caption: PropTypes.string,
  icon: PropTypes.element,
};

export default Button;
