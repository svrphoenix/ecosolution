import PropTypes from 'prop-types';

import Icon from '../Icon/Icon';
import { ButtonStyled, DefaultIconContainer, LinkStyled } from './LinkButton.styled';

const LinkButton = ({
  handleClick,
  caption,
  href,
  iconContainer: IconContainer = DefaultIconContainer,
  iconSettings,
  ...other
}) => {
  const StyledIcon = iconSettings?.name ? (
    <IconContainer>
      <Icon svgStyled={iconSettings.svgStyled} name={iconSettings.name} aria-hidden="true" />
    </IconContainer>
  ) : null;
  const { button, ...rest } = other;

  if (href) {
    return (
      <LinkStyled href={href} onClick={handleClick} {...rest}>
        {caption}
        {StyledIcon}
      </LinkStyled>
    );
  } else {
    return (
      <ButtonStyled type={button || 'button'} onClick={handleClick} {...rest}>
        {caption}
        {StyledIcon}
      </ButtonStyled>
    );
  }
};

LinkButton.propTypes = {
  handleClick: PropTypes.func,
  caption: PropTypes.string,
  href: PropTypes.string,
  iconContainer: PropTypes.elementType,
  iconSettings: PropTypes.shape({
    name: PropTypes.string.isRequired,
    svgStyled: PropTypes.elementType,
  }),
};

export default LinkButton;
