import PropTypes from 'prop-types';
import icons from '../../../assets/icons/sprite.svg';
import { DefaultSvg } from './Icon.styled';

const Icon = props => {
  const { svgStyled: StyledSvg = DefaultSvg, sprite = icons, name, ...other } = props;
  return (
    <StyledSvg {...other}>
      <use href={`${sprite}#${name}`} />
    </StyledSvg>
  );
};

Icon.propTypes = {
  svgStyled: PropTypes.elementType,
  sprite: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Icon;
