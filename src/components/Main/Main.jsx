import PropTypes from 'prop-types';

import { StyledMainWrapper } from './Main.styled';

const Main = ({ offset, children }) => {
  return (
    <main style={{ paddingTop: offset }}>
      <StyledMainWrapper>{children}</StyledMainWrapper>
    </main>
  );
};

Main.propTypes = {
  offset: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default Main;
