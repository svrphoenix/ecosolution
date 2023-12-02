import PropTypes from 'prop-types';
import { InTouchBtnStyled } from './InTouchBtn.styled';

const InTouchBtn = ({ handleClick, caption, icon: Icon }) => {
  return (
    <InTouchBtnStyled onClick={handleClick}>
      {caption}
      {Icon}
    </InTouchBtnStyled>
  );
};

InTouchBtn.propTypes = {
  handleClick: PropTypes.func,
  caption: PropTypes.string,
  icon: PropTypes.element,
};

export default InTouchBtn;
