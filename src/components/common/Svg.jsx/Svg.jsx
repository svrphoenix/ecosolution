import PropTypes from 'prop-types';
import icons from '../../../assets/icons/sprite.svg';

const Svg = props => {
  const { icon: StyledSvg, sprite = icons, name, ...other } = props;
  return (
    <StyledSvg {...other}>
      <use href={`${sprite}#${name}`} />
    </StyledSvg>
  );
};

Svg.propTypes = {
  icon: PropTypes.elementType.isRequired,
  sprite: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Svg;
