import PropTypes from 'prop-types';
import { useState } from 'react';

import {
  FaqSectionStyled,
  MoreQuestion,
  Questions,
  Question,
  QuestionWrapper,
  Answer,
  Btn,
  Wrapper,
  AdditionWrapper,
  PositionWrapper,
} from './FaqSection.styled';

import { FAQS } from '../../constants/content';
import Icon from '../common/Icon/Icon';
import { SectionTitle } from '../common/SectionTitle/SectionTitle.styled';
import { UnderLine } from '../common/Underline/Underline.styled';
import { colors } from '../../constants/theme';
import Button from '../common/Button/Button';
import { ScrollToElement } from '../../utils';

const FaqSection = ({ refs, id }) => {
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  const handleSelected = id => {
    setSelectedQuestion(state => (state === id ? undefined : id));
  };

  return (
    <FaqSectionStyled id={id}>
      <Wrapper>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <AdditionWrapper>
          <Questions>
            {FAQS.map(({ id, question, answer }) => (
              <li key={id}>
                <UnderLine />
                <QuestionWrapper>
                  <Btn type="button" onClick={() => handleSelected(id)}>
                    {selectedQuestion === id ? (
                      <Icon
                        name={'minus'}
                        width={16}
                        height={16}
                        stroke={colors.accentBackground}
                      />
                    ) : (
                      <Icon name={'plus'} width={16} height={16} stroke={colors.accentColor} />
                    )}
                  </Btn>
                  <Question onClick={() => handleSelected(id)}>{question}</Question>
                </QuestionWrapper>
                {selectedQuestion === id && <Answer>{answer}</Answer>}
              </li>
            ))}
          </Questions>
        </AdditionWrapper>
        <PositionWrapper>
          <MoreQuestion>Didn&apos;t find the answer to your question? </MoreQuestion>
          <Button
            handleClick={() => ScrollToElement('ref', refs)}
            caption="Contact Us"
            icon={
              <Icon name={'arrow-down'} width={14} height={14} fill={colors.accentBackground} />
            }
          />
        </PositionWrapper>
      </Wrapper>
    </FaqSectionStyled>
  );
};

FaqSection.propTypes = {
  id: PropTypes.string,
  refs: PropTypes.any,
};

export default FaqSection;
