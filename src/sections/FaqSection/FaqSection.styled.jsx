import { styled } from 'styled-components';
import { colors } from '../../constants/theme';
import { device } from '../../constants/media';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${device.tablet} {
    flex-direction: row-reverse;
    justify-content: space-between;
    position: relative;
  }
`;

export const Questions = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${device.desktop} {
    gap: 24px;
    padding-right: 24px;
  }
`;

export const QuestionItem = styled.li`
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${colors.accentColor};
    margin-bottom: 16px;
  }

  @media ${device.desktop} {
    &::before {
      margin-bottom: 24px;
    }
  }
`;

export const QuestionBtn = styled.button`
  display: inline-flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
`;

export const StyledSvg = styled.svg`
  width: 16px;
  height: 16px;
  fill: transparent;
  stroke: ${props => props.$stroke};

  @media ${device.tablet} {
    width: 28px;
    height: 28px;
  }
`;

export const Question = styled.span`
  margin-left: 8px;

  color: ${colors.mainColor};
  text-align: justify;
  font-size: 18px;
  line-height: normal;
  letter-spacing: -0.72px;

  @media ${device.tablet} {
    margin-left: 16px;
  }

  @media ${device.desktop} {
    margin-left: 24px;
    font-size: 24px;
  }
`;

export const Answer = styled.p`
  padding-left: 24px;

  color: ${colors.mainColor};
  font-size: 14px;
  text-align: justify;
  line-height: normal;
  letter-spacing: -0.56px;

  animation-name: fade;
  animation-duration: 1.7s;

  @keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }

  @media ${device.tablet} {
    padding-left: 44px;
  }
  @media ${device.desktop} {
    padding-left: 52px;
    font-size: 16px;
  }
`;

export const PositionWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;

  @media ${device.tablet} {
    width: 50%;
    position: absolute;
    bottom: 0;
  }

  @media ${device.desktop} {
    width: 40%;
  }
`;

export const MoreQuestion = styled.p`
  color: ${colors.mainColor};

  text-align: center;
  font-size: 18px;
  line-height: normal;
  letter-spacing: -0.72px;

  @media ${device.desktop} {
    font-size: 24px;
  }
`;
