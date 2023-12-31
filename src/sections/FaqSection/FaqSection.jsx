import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';

import {
  FaqSectionStyled,
  MoreQuestion,
  Questions,
  Question,
  Answer,
  Wrapper,
  AdditionWrapper,
  PositionWrapper,
  IconWrapper,
  QuestionBtn,
  QuestionItem,
  StyledSvg,
} from './FaqSection.styled';

import { SectionTitle } from '../../components/common/styled/SectionTitle.styled';
import { colors } from '../../constants/theme';
import { sections, faq, buttonCaptions } from '../../assets/content/main.json';
import InTouchLink from '../../components/InTouchLink/InTouchLink';
import Icon from '../../components/common/Icon/Icon';

const FaqSection = forwardRef(function FaqSection(props, ref) {
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  const handleSelected = id => {
    setSelectedQuestion(state => (state === id ? undefined : id));
  };

  return (
    <FaqSectionStyled id={props.sectionId} ref={ref}>
      <Wrapper>
        <SectionTitle>{sections.faq.title}</SectionTitle>
        <AdditionWrapper>
          <Questions>
            {faq.questions.map(({ id, question, answer }) => (
              <QuestionItem key={id}>
                <QuestionBtn
                  type="button"
                  id={`${id}-question`}
                  aria-expanded={selectedQuestion === id ? true : false}
                  aria-controls={`${id}-answer`}
                  onClick={() => handleSelected(id)}
                >
                  <IconWrapper aria-hidden="true">
                    <Icon
                      svgStyled={StyledSvg}
                      name={selectedQuestion === id ? 'minus' : 'plus'}
                      stroke={selectedQuestion === id ? colors.mainColor : colors.accentColor}
                    />
                  </IconWrapper>
                  <Question>{question}</Question>
                </QuestionBtn>
                {selectedQuestion === id && (
                  <Answer
                    id={`${selectedQuestion}-answer`}
                    aria-labelledby={`${selectedQuestion}-question`}
                  >
                    {answer}
                  </Answer>
                )}
              </QuestionItem>
            ))}
          </Questions>
        </AdditionWrapper>
        <PositionWrapper>
          <MoreQuestion>{faq.moreTitle}</MoreQuestion>
          <InTouchLink caption={buttonCaptions.contactUs} />
        </PositionWrapper>
      </Wrapper>
    </FaqSectionStyled>
  );
});

FaqSection.propTypes = {
  sectionId: PropTypes.string,
};

export default FaqSection;
