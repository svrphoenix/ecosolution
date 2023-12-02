import PropTypes from 'prop-types';
import { ButtonStyled, IconWrapper } from './Button.styled';

const Button = ({ caption, icon: Icon }) => {
  return (
    <ButtonStyled>
      {caption}
      <IconWrapper>{Icon}</IconWrapper>
    </ButtonStyled>
  );
};

Button.propTypes = {
  caption: PropTypes.string,
  icon: PropTypes.element,
};

export default Button;
