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

import { SectionTitle } from '../../components/common/SectionTitle/SectionTitle.styled';
import { colors } from '../../constants/theme';
import Button from '../../components/common/Button/Button';
import { scrollToElement } from '../../utils';
import { useRefsContext } from '../../hooks/refsContext';
import Svg from '../../components/common/Svg.jsx/Svg';
import Icon from '../../components/common/Icon/Icon';
import { sections, faq } from '../../assets/content/main.json';

const FaqSection = forwardRef(function FaqSection(props, ref) {
  const { contactUs } = useRefsContext();
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
                    <Svg
                      icon={StyledSvg}
                      name={selectedQuestion === id ? 'minus' : 'plus'}
                      stroke={selectedQuestion === id ? colors.mainColor : colors.accentColor}
                    />
                    {/* {selectedQuestion === id ? (
                      <Icon
                        name={'minus'}
                        width={16}
                        height={16}
                        stroke={colors.mainColor}
                      />
                    ) : (
                      <Icon name={'plus'} width={16} height={16} stroke={colors.accentColor} />
                    )} */}
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
          <Button
            handleClick={() => scrollToElement('ref', contactUs)}
            caption="Contact Us"
            icon={<Icon name={'arrow-down'} width={14} height={14} fill={colors.mainColor} />}
          />
        </PositionWrapper>
      </Wrapper>
    </FaqSectionStyled>
  );
});

FaqSection.propTypes = {
  sectionId: PropTypes.string,
};

export default FaqSection;
