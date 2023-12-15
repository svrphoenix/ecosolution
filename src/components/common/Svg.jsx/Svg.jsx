import PropTypes from 'prop-types';

const Svg = ({ icon: StyledSvg, sprite, name, stroke, fill }) => {
  return (
    <StyledSvg stroke={stroke} fill={fill}>
      <use href={`${sprite}#${name}`} />
    </StyledSvg>
  );
};

Svg.propTypes = {
  icon: PropTypes.elementType.isRequired,
  sprite: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  stroke: PropTypes.string,
  fill: PropTypes.string,
};

export default Svg;
