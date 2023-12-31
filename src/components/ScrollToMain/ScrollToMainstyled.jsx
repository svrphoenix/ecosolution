import styled from 'styled-components';
import { colors } from '../../constants/theme';
import LinkButton from '../common/LinkButton/LinkButton';
import { DefaultSvg } from '../common/Icon/Icon.styled';

export const ScrollToMainBtn = styled(LinkButton)`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${colors.accentColor};

  &:focus,
  &:hover {
    background-color: ${colors.mainColor};
  }
`;

export const ScrollUpSvg = styled(DefaultSvg)`
  ${ScrollToMainBtn}:hover &, 
  ${ScrollToMainBtn}:focus & {
    stroke: ${colors.accentColor};
  }
`;
