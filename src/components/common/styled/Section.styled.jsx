import styled from 'styled-components';

import { device } from '../../../constants/media';

export const SectionStyled = styled.section`
  padding-top: 36px;

  @media ${device.tablet} {
    padding-top: 100px;
  }

  @media ${device.desktop} {
    padding-top: 120px;
  }
`;
