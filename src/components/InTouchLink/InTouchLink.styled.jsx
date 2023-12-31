import { styled } from 'styled-components';
import { device } from '../../constants/media';
import LinkButton from '../common/LinkButton/LinkButton';
import { colors, effects } from '../../constants/theme';

export const InTouchStyled = styled(LinkButton)`
  display: none;
  background-color: ${colors.accentColor}; //може бути спільним
  padding: 10px 16px; //може бути спільним

  @media ${device.tablet} {
    display: inline-flex;
  }
`;

export const InTouchSvg = styled.svg`
  width: 14px;
  height: 14px;

  fill: ${colors.mainColor};
  stroke: ${colors.mainColor};
  transition: ${effects.hoverFillTransition};

  line-height: normal;

  ${InTouchStyled}:hover &,
  ${InTouchStyled}:focus & {
    fill: ${colors.accentColor};
  }
`;
