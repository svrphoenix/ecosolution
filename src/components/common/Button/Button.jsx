import PropTypes from 'prop-types';
import { ButtonStyled, IconWrapper } from './Button.styled';

const Button = ({ type = 'button', caption, icon: Icon }) => {
  return (
    <ButtonStyled type={type}>
      {caption}
      <IconWrapper>{Icon}</IconWrapper>
    </ButtonStyled>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  caption: PropTypes.string,
  icon: PropTypes.element,
};

export default Button;
