import { forwardRef, useState } from 'react';

import {
  MoreQuestion,
  Questions,
  Question,
  Answer,
  Wrapper,
  // AdditionWrapper,
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
import { SectionStyled } from '../../components/common/styled/Section.styled';
import { AdditionWrapper } from '../../components/common/styled/AdditionWrapper.styled';

const FaqSection = forwardRef(function FaqSection(_, ref) {
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  const handleSelected = id => {
    setSelectedQuestion(state => (state === id ? undefined : id));
  };

  return (
    <SectionStyled id={sections.faq.id} ref={ref}>
      <Wrapper>
        <AdditionWrapper>
          <SectionTitle>{sections.faq.title}</SectionTitle>
        </AdditionWrapper>
        <AdditionWrapper style={{ flexBasis: '50%' }}>
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
          <InTouchLink caption={buttonCaptions.contactUs} mobileVisible={true} />
        </PositionWrapper>
      </Wrapper>
    </SectionStyled>
  );
});

export default FaqSection;
