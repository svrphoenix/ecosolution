import { styled } from 'styled-components';

export const SocialsList = styled.ul`
  margin-top: auto;
  display: flex;
  gap: ${props => props.$gap};
`;

export const SocialsLink = styled.a`
  color: ${props => props.$mainColor};

  & > svg {
    stroke: currentColor; 
  }

  &:hover,
  &:focus {
    color: ${props => props.$hoverColor};
  }
`;
