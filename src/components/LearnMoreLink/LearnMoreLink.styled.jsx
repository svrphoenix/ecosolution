import styled from 'styled-components';

import LinkButton from '../common/LinkButton/LinkButton';
import { DefaultIconContainer } from '../common/LinkButton/LinkButton.styled';
import { DefaultSvg } from '../common/Icon/Icon.styled';
import { colors } from '../../constants/theme';

export const LearnMoreStyled = styled(LinkButton)`
  padding: 4px 4px 4px 16px;
  background-color: transparent;
  border-color: ${colors.accentColor};

  line-height: calc(18 / 16);

  &:hover,
  &:focus {
    border-color: ${colors.mainColor};
  }
`;

export const LinkIconContainer = styled(DefaultIconContainer)`
  padding: 8px;
  color: ${colors.mainColor};
  border-radius: 50%;
  background-color: ${colors.accentColor};
`;

export const LearnMoreSvg = styled(DefaultSvg)`
  width: 16px;
  height: 16px;
`;
