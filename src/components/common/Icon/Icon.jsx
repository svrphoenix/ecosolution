import PropTypes from 'prop-types';
import icons from '../../../assets/icons/sprite.svg';

export const Icon = ({ name, width, height, stroke, fill = 'transparent' }) => {
  return (
    <svg width={width} height={height} stroke={stroke} fill={fill}>
      <use href={`${icons}#${name}`} />
    </svg>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  stroke: PropTypes.string,
  fill: PropTypes.string,
};
