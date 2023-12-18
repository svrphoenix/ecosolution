import PropTypes from 'prop-types';
import { StyledMainWrapper } from './Main.styled';

const Main = ({ children }) => {
  return (
    <main>
      <StyledMainWrapper>{children}</StyledMainWrapper>
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
