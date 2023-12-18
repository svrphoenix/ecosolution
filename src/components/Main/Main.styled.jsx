import styled from 'styled-components';
import { device } from '../../constants/media';

export const StyledMainWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media ${device.mobile} {
    max-width: 480px;
  }

  @media ${device.tablet} {
    max-width: 768px;
    padding: 0 30px;
  }

  @media ${device.desktop} {
    max-width: 1280px;
    padding: 0 20px;
  }
`;
