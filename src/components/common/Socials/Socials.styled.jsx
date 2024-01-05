import { styled } from 'styled-components';

import { DefaultSvg } from '../Icon/Icon.styled';
import { effects } from '../../../constants/theme';

export const SocialsList = styled.ul`
  margin-top: auto;
  display: flex;
  gap: ${props => props.$gap};
`;

export const SocialsLink = styled.a`
  color: ${props => props.$mainColor};
  transition: ${effects.hoverColorTransition};

  &:hover,
  &:focus {
    color: ${props => props.$hoverColor};
  }
`;

export const StyledSvg = styled(DefaultSvg)`
  width: 24px;
  height: 24px;
`;
