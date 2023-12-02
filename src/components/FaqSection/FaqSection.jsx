import { useState } from 'react';

import {
  FaqSectionStyled,
  MoreQuestion,
  Questions,
  Question,
  QuestionWrapper,
  Answer,
} from './FaqSection.styled';

import { FAQS } from '../../constants/content';
import Icon from '../common/Icon/Icon';
import { SectionTitle } from '../common/SectionTitle/SectionTitle.styled';
import { UnderLine } from '../common/Underline/Underline.styled';
import { colors } from '../../constants/theme';
// import InTouchBtn from '../InTouchBtn/InTouchBtn';
import Button from '../common/Button/Button';

const FaqSection = () => {
  const [selectedQuestion, setSelectedQuestion] = useState([]);

  const handleSelected = id => {
    setSelectedQuestion(state => {
      const questions = [...state];
      const index = questions.indexOf(id);
      if (index === -1) {
        questions.push(id);
      } else questions.splice(index, 1);
      return questions;
    });
  };

  return (
    <FaqSectionStyled>
      <SectionTitle>Successful cases of our company</SectionTitle>
      <Questions>
        {FAQS.map(({ id, question, answer }) => (
          <li key={id}>
            <UnderLine />
            <QuestionWrapper>
              <button type="button" onClick={() => handleSelected(id)}>
                {selectedQuestion.indexOf(id) !== -1 ? (
                  <Icon name={'minus'} width={16} height={16} stroke={colors.accentBackground} />
                ) : (
                  <Icon name={'plus'} width={16} height={16} stroke={colors.accentColor} />
                )}
              </button>
              <Question>{question}</Question>
            </QuestionWrapper>
            {selectedQuestion.indexOf(id) !== -1 && <Answer>{answer}</Answer>}
          </li>
        ))}
      </Questions>
      <MoreQuestion>Didn&apos;t find the answer to your question? </MoreQuestion>
      <Button
        caption="Contact Us"
        icon={<Icon name={'arrow-down'} width={14} height={14} fill={colors.accentBackground} />}
      />
    </FaqSectionStyled>
  );
};

export default FaqSection;
