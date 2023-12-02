import { styled } from 'styled-components';
import { colors } from '../../constants/theme';

export const FaqSectionStyled = styled.section`
  padding-bottom: 36px;
`;

export const Questions = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 16px;
`;

export const QuestionWrapper = styled.div`
  margin-top: 16px;
  display: flex;
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

export const MoreQuestion = styled.p`
  margin-top: 36px;
  margin-bottom: 12px;

  color: ${colors.accentBackground};

  text-align: center;
  font-size: 18px;
  line-height: normal;
  letter-spacing: -0.72px;
`;
