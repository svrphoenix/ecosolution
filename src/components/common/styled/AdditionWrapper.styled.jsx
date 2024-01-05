import styled from 'styled-components';

import { device } from '../../../constants/media';

export const AdditionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${device.tablet} {
    align-items: flex-start;
    flex-basis: 50%;
    justify-content: space-between;
  }

  @media ${device.desktop} {
    flex-basis: 40%;
  }
`;
