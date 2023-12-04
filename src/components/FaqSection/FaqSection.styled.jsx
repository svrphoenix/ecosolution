import { styled } from 'styled-components';
import { colors } from '../../constants/theme';
import { device } from '../../constants/media';

export const FaqSectionStyled = styled.section`
  /* padding-bottom: 36px; */
  padding-top: 110px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 24px;

  @media ${device.tablet} {
    flex-direction: row-reverse;
    justify-content: space-between;
    position: relative;
  }
`;

export const AdditionWrapper = styled.ul`
  @media ${device.tablet} {
    width: 50%;
  }
`;

export const Questions = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const QuestionWrapper = styled.div`
  margin-top: 16px;
  display: flex;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
`;

export const Question = styled.p`
  margin-left: 8px;

  color: ${colors.accentBackground};
  text-align: justify;
  font-size: 18px;
  line-height: normal;
  letter-spacing: -0.72px;
`;

export const Answer = styled.p`
  margin-top: 16px;
  padding-left: 24px;

  color: ${colors.accentBackground};
  text-align: justify;
  line-height: normal;
  letter-spacing: -0.56px;
`;

export const PositionWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${device.tablet} {
    width: 320px;
    position: absolute;
    bottom: 0;
  }

  @media ${device.desktop} {
    width: 398px;
  }
`;

export const MoreQuestion = styled.p`
  padding-top: 12px;
  padding-bottom: 12px;

  color: ${colors.accentBackground};

  text-align: center;
  font-size: 18px;
  line-height: normal;
  letter-spacing: -0.72px;
`;
