import PropTypes from 'prop-types';
import { InTouchBtnStyled } from './InTouchBtn.styled';

const InTouchBtn = ({ caption, icon: Icon }) => {
  return (
    <InTouchBtnStyled>
      {caption}
      {Icon}
    </InTouchBtnStyled>
  );
};

InTouchBtn.propTypes = {
  caption: PropTypes.string,
  icon: PropTypes.element,
};

export default InTouchBtn;
