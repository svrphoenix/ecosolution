import styled from 'styled-components';
import { device } from '../../../constants/media';
import { colors } from '../../../constants/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    position: relative;

    &::after {
      @media ${device.tablet} {
        content: '';
        display: block;
        width: 1px;
        height: 100%;
        background-color: ${colors.accentColor};
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%);
      }
    }
  }
`;
