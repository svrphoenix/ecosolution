import { styled } from 'styled-components';
import { colors } from '../../constants/theme';
import LinkButton from '../common/LinkButton/LinkButton';

export const StyledButton = styled(LinkButton)`
  width: 40px;
  height: 40px;
  border-radius: 50%; //можливо це залишити??

  color: ${colors.menuIconColor};
  border-color: transparent;
  background-color: ${colors.menuIconBackground};

  &:hover,
  &:focus {
    background-color: ${colors.accentColor};
    color: ${colors.menuIconColor};
  }
`;
